import express from 'express';

// Crear una nueva aplicación Express
const app = express();

// Definir un puerto para nuestro servidor
const port = 3000 || process.env.PORT;

// Definir una ruta de prueba
app.get('/', (req, res) => {

  res.send("#########################");
  res.send("###### ailatdev REST00 ##");
  res.send("#########################");
});

// Iniciar el servidor talia
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
