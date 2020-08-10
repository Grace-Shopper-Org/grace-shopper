const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
  status: {
    //What is the purpose of processing
    type: Sequelize.ENUM('created', 'completed', 'processing'),
    defaultValue: 'created'
  }
})

module.exports = Order
