const Sequelize = require('sequelize')
const db = require('../db')

const review = db.define('review', {
  content: {
    type: Sequelize.TEXT,
    allowNull: false
  }
})

module.exports = review
