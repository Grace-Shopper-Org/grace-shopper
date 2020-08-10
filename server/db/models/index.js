const User = require('./user')
const Product = require('./product')
const Order = require('./order')
const Cart = require('./cart')
const Review = require('./review')
const db = require('../db')

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */

//User associations
User.hasMany(Order)

//Order associations
Order.belongsTo(User)
Order.belongsToMany(Product, {through: Cart})

//Product associations
Product.belongsToMany(Order, {through: Cart})
Product.hasMany(Review)

// Review associations
Review.belongsTo(Product)
Review.belongsTo(User)

module.exports = {
  User,
  Product,
  Order,
  Cart,
  Review,
  db
}
