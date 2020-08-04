const Sequelize = require('sequelize')
const db = require('../db')

const cart = db.define('cart', {
  status: {
    //What is the purpose of processing
    type: Sequelize.ENUM('created', 'completed', 'processing'),
    defaultValue: 'created'
  },
  totalPrice: {
    type: Sequelize.INTEGER,
    validate: {
      min: 0
    }
  },
  quantity: {
    type: Sequelize.INTEGER,
    validate: {
      min: 0
    }
  }
})

//Create a new table to store user cart history

module.exports = cart
