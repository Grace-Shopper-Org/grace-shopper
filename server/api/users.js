const router = require('express').Router()
const {User, Order, Product} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'email']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})

//passed in userId, checks to see if cart is open.

//Orders
//Id + Status + UserId

//Carts
//Quantity + Price + orderId + productId

//Products
//name + price + imageUrl + id

router.get('/:userId/cart', async (req, res, next) => {
  try {
    const cart = await Order.findOrCreate({
      where: {
        userId: req.params.userId,
        status: 'created'
      },
      include: [
        {
          model: Product,
          required: false,
          attributes: ['name', 'price', 'imageUrl', 'id']
        }
      ]
    })
    res.json(cart[0].products || [])
  } catch (error) {
    next(error)
  }
})
