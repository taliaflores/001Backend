import express from 'express';

// Crear una nueva aplicación Express
const app = express();

// Definir un puerto para nuestro servidor
const port = 3000 || process.env.PORT;

// Definir una ruta de prueba
app.get('/', (req, res) => {

  res.send("Hola !");

});

// Iniciar el servidor talia
app.listen(port, () => {
  console.log("############################");
  console.log("###### ailatdev REST 00 ####");
  console.log("############################");
  console.log(`Servidor escuchando en http://localhost:${port}`);
  
});
