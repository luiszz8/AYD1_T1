const express = require('express');
const app = express();
const port = 3000; // Puedes cambiar el puerto según tus necesidades


app.use(express.json()); // Middleware para analizar el cuerpo de las solicitudes como JSON

// Ruta POST de ejemplo para crear un recurso
app.post('/operacion', (req, res) => {
  const nuevoRecurso = req.body;
  var v1=nuevoRecurso.valor1
  var v2=nuevoRecurso.valor2
  res.json({ valor: v1+v2});
});

// Ruta de ejemplo
app.get('/', (req, res) => {
  res.send('Luis Sánchez - 201700339');
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor Express en funcionamiento en el puerto ${port}`);
});
