const express = require('express');
const app = express();
const port = 3000; // Puedes cambiar el puerto según tus necesidades


app.use(express.json()); // Middleware para analizar el cuerpo de las solicitudes como JSON


// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor Express en funcionamiento en el puerto ${port}`);
});
