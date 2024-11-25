const express = require('express');
const Product = require('../models/Product');
const { authMiddleware } = require('./auth'); // Middleware de autenticação
const router = express.Router();

// Rota para listar todos os produtos
router.get('/', async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar produtos' });
  }
});

// Rota para adicionar um novo produto (apenas para administradores)
router.post('/', authMiddleware(['admin']), async (req, res) => {
  try {
    const { name, price, image } = req.body;

    if (!name || !price || !image) {
      return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
    }

    const product = await Product.create({ name, price, image });
    res.status(201).json({ message: 'Produto criado com sucesso', product });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar produto' });
  }
});

// Rota para excluir um produto pelo ID (apenas para administradores)
router.delete('/:id', authMiddleware(['admin']), async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findByPk(id);
    if (!product) {
      return res.status(404).json({ error: 'Produto não encontrado' });
    }

    await product.destroy();
    res.json({ message: 'Produto excluído com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao excluir produto' });
  }
});

// Rota para buscar um único produto pelo ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findByPk(id);
    if (!product) {
      return res.status(404).json({ error: 'Produto não encontrado' });
    }

    res.json(product);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar produto' });
  }
});

module.exports = { router };
