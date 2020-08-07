const router = require('express').Router()
module.exports = router
const {Order, Product, Cart} = require('../db/models')

//passed in userId, checks to see if cart is open.

//Orders
//Id + Status + UserId

//Carts
//Quantity + Price + orderId + productId

//Products
//name + price + imageUrl + id
router.get('/:userId', async (req, res, next) => {
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

router.delete('/:orderId/:productId', async (req, res, next) => {
  try {
    await Cart.destroy({
      where: {
        orderId: req.params.orderId,
        productId: req.params.productId
      }
    })
    res.sendStatus(204).end()
  } catch (error) {
    next(error)
  }
})

router.get('/:orderId/:productId', async (req, res, next) => {
  try {
    const item = await Cart.findOne({
      where: {
        orderId: req.params.orderId,
        productId: req.params.productId
      }
    })
    res.send(item)
  } catch (error) {
    next(error)
  }
})

router.post('/:orderId/:productId', async (req, res, next) => {
  try {
    const order = await Order.findOne({
      where: {
        id: req.params.orderId
      }
    })

    const product = await Product.findOne({
      where: {
        id: req.params.productId
      }
    })

    const newItem = await order.addProduct(product)
    res.send(newItem)
  } catch (error) {
    next(error)
  }
})
