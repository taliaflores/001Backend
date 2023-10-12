import express from 'express';
import {config}  from 'dotenv';
import pg from 'pg';


config()

// Crear una nueva aplicación Express
const app = express();

// Conectar a la base de datos
const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl:true
});


// Definir un puerto para nuestro servidor
const port = 3000 || process.env.PORT;

// Definir una ruta de prueba
app.get('/', (req, res) => {
  res.send('¡Hola Mundo AILAT!');
});

app.get('/ping', async (req, res) => {
  const result = await pool.query('SELECT NOW()')
  return res.json(result.rows[0])
});

// Iniciar el servidor
app.listen(port, () => {
  console.log("############################");
  console.log("###### ailatdev REST 00 ####");
  console.log("############################");
  console.log(`Servidor escuchando en http://localhost:${port}`);
});