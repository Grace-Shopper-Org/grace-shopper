const Sequelize = require('sequelize')
const db = require('../db')

const product = db.define('product', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  price: {
    type: Sequelize.FLOAT,
    validate: {
      min: 0
    }
  },
  description: Sequelize.TEXT,
  imageUrl: {
    type: Sequelize.TEXT,
    defaultValue:
      'https://images.unsplash.com/photo-1541261376025-872d4f4dd733?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80'
  }
})

module.exports = product
