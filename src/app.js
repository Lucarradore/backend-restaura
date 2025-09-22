const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser'); 
const dishesRoutes = require('./routes/dishesRoutes');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(express.json());

app.use((req, res, next) => {
   console.log('Headers:', req.headers);
   console.log('Body:', req.body);
   next();
});

app.use('/api/dishes', dishesRoutes);
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);

app.get('/', (_, res) => {
  res.send('Backend funcionando');
});

module.exports = app;


