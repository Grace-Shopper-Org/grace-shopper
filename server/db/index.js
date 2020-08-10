const db = require('./db')

// register models
const {User, Product, Cart, Order, Review} = require('./models')

module.exports = {db, User, Product, Order, Cart, Review}
