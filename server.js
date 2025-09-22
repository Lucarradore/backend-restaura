const dotenv = require('dotenv');
dotenv.config();

const mongoose = require('mongoose');
const app = require('./src/app');

const PORT = process.env.PORT || 4000;
const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  console.error("No se encontró la variable MONGO_URI en el archivo .env");
  process.exit(1);
}

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Conexión a MongoDB Atlas exitosa');
    app.listen(PORT, () => {
      console.log(`Servidor escuchando en el puerto ${PORT}`);
    });

    app.get('/', (_, res) => {
  res.send('Backend Restaura funcionando');
});

  })
  .catch(err => {
    console.error('Error al conectar a MongoDB:', err.message);
    process.exit(1);
  });
