const db = require('./db')

// register models
const {User, Product, Cart} = require('./models')

module.exports = {db, User, Product, Cart}
