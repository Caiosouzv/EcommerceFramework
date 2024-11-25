const express = require('express');
const cors = require('cors');
const { router: authRoutes } = require('./routes/auth');
const { router: productRoutes } = require('./routes/products');
const { router: cartRoutes } = require('./routes/cart');

const app = express();


app.use(cors());
app.use(express.json());

// Rotas
app.use('/api/auth', authRoutes); 
app.use('/api/products', productRoutes); 
app.use('/api/cart', cartRoutes); 

// Porta do servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
