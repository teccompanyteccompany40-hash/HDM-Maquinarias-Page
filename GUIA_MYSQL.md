# Cómo pasar de tu JSON a una base de datos MySQL (guía, sin implementar aún)

Ahora mismo tu web lee `src/data/repuestos.json` directamente dentro del código React. Eso funciona, pero tiene límites: cada vez que cambias un producto tienes que editar el archivo y volver a publicar la web, y con miles de productos el archivo se vuelve pesado. Pasar a MySQL soluciona eso: los datos viven en una base de datos y tu web los pide "en vivo" a través de una API.

## 1. La idea general (arquitectura)

Hoy:
```
React (frontend) → lee repuestos.json directamente
```

Con base de datos:
```
React (frontend) → pide datos a → Backend/API (Node.js) → consulta → MySQL
```

Es decir, necesitas 3 piezas:
1. **MySQL**: donde viven los datos (tablas).
2. **Un backend** (por ejemplo con Node.js + Express, o algo como Next.js API routes): recibe peticiones del navegador y consulta MySQL.
3. **Tu frontend actual**: en vez de `import repuestos from "../data/repuestos.json"`, hace `fetch("/api/repuestos")`.

El navegador **nunca** se conecta directo a MySQL (no es seguro ni posible desde el navegador). Siempre hay un backend en medio.

## 2. Diseño de tablas (a partir de tu CSV/JSON actual)

Tu CSV tiene: Código, Marca, Marca (detalle), Nombre, Especificaciones, Clasificación, Modelo de Máquina Recomendado, Descripción, Unidad de Medida, Código Original.

Una estructura simple en MySQL sería:

```sql
CREATE TABLE marcas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,      -- ej: "CAT"
  detalle VARCHAR(150)               -- ej: "Caterpillar (original)"
);

CREATE TABLE categorias (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL UNIQUE -- ej: "Bombas"
);

CREATE TABLE repuestos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  codigo VARCHAR(100) NOT NULL,
  codigo_original VARCHAR(150),
  nombre VARCHAR(255) NOT NULL,
  especificaciones TEXT,
  descripcion TEXT,
  unidad VARCHAR(50),
  marca_id INT,
  categoria_id INT,
  imagen VARCHAR(255),
  FOREIGN KEY (marca_id) REFERENCES marcas(id),
  FOREIGN KEY (categoria_id) REFERENCES categorias(id)
);

CREATE TABLE repuesto_modelos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  repuesto_id INT NOT NULL,
  modelo VARCHAR(255) NOT NULL,
  FOREIGN KEY (repuesto_id) REFERENCES repuestos(id)
);
```

Esto es una base de datos **relacional**: en vez de repetir "Caterpillar (original)" cinco mil veces (como en el JSON), lo guardas una vez en `marcas` y cada repuesto solo guarda el `marca_id`. Ocupa menos espacio y si un día corriges el nombre de una marca, lo corriges en un solo lugar.

## 3. Migrar tus datos actuales

Cuando llegue el momento, se puede escribir un script (Node o Python) que lea tu CSV/JSON y haga `INSERT` en MySQL. No es complicado, es un `for` que recorre cada fila y ejecuta un `INSERT INTO repuestos (...) VALUES (...)`. Yo puedo ayudarte a escribir ese script cuando quieras dar el paso.

## 4. El backend (quien conversa con MySQL)

Ejemplo mínimo con Node.js + Express + `mysql2`:

```js
// server.js
import express from "express";
import mysql from "mysql2/promise";

const app = express();
const pool = mysql.createPool({
  host: "localhost",
  user: "tu_usuario",
  password: "tu_password",
  database: "hdm_repuestos",
});

app.get("/api/repuestos", async (req, res) => {
  const [rows] = await pool.query(`
    SELECT r.id, r.codigo, r.nombre, r.descripcion,
           m.nombre AS marca, c.nombre AS categoria
    FROM repuestos r
    LEFT JOIN marcas m ON m.id = r.marca_id
    LEFT JOIN categorias c ON c.id = r.categoria_id
    LIMIT 50
  `);
  res.json(rows);
});

app.listen(3001, () => console.log("API corriendo en puerto 3001"));
```

## 5. El frontend (tu React actual)

Hoy, en `Repuestos.tsx` probablemente tienes algo como:
```ts
import repuestos from "../data/repuestos.json";
```

Con backend, sería:
```ts
const [repuestos, setRepuestos] = useState([]);

useEffect(() => {
  fetch("https://tu-dominio.com/api/repuestos")
    .then((res) => res.json())
    .then(setRepuestos);
}, []);
```

El resto del componente (filtros, tarjetas, etc.) casi no cambia — solo cambia **de dónde** vienen los datos.

## 6. Dónde alojar todo esto

- MySQL y el backend necesitan un servidor (puede ser barato: DigitalOcean, un VPS, Railway, Render, etc.).
- El frontend (React) se puede seguir alojando en Vercel/Netlify como ahora, solo que en vez de leer el JSON local, llama a tu API.

## 7. Resumen de pasos, en orden, cuando decidas implementarlo

1. Crear la base de datos MySQL y las tablas.
2. Escribir el script de migración CSV → MySQL.
3. Crear el backend con 2-3 endpoints (`/api/repuestos`, `/api/repuestos/:id`, `/api/marcas`).
4. Cambiar el frontend para usar `fetch` en vez de `import ... from repuestos.json`.
5. Probar todo en local, luego subir el backend a un servidor.

No hace falta hacerlo todo de una vez — se puede migrar por partes, incluso dejando el JSON como respaldo mientras tanto. Avísame cuando quieras que lo implementemos paso a paso.
