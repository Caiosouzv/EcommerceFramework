const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');
const User = require('./User');

const Order = sequelize.define('Order', {
  totalPrice: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM('pending', 'completed', 'canceled'),
    defaultValue: 'pending',
  },
}, {
  timestamps: true,
});

// Relacionamento entre Usuários e Pedidos
Order.belongsTo(User, { foreignKey: 'userId', as: 'user' });

module.exports = Order;
