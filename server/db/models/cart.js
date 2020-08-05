const Sequelize = require('sequelize')
const db = require('../db')

const cart = db.define('cart', {
  quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 1,
    validate: {
      min: 0
    }
  },
  //will be updated once order status changes from CART to PROCESSING
  //do something w/sequelize hooks to catch that
  price: {
    type: Sequelize.INTEGER,
    validate: {
      min: 0
    }
  }
})

module.exports = cart
