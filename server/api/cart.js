const router = require('express').Router()
module.exports = router
const {Order, Product, Cart} = require('../db/models')

//Get all cart items from a user
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

router.get('/:userId/order', async (req, res, next) => {
  try {
    const cart = await Order.findOne({
      where: {
        userId: req.params.userId,
        status: 'created'
      }
    })
    res.json(cart)
  } catch (error) {
    next(error)
  }
})

//delete an item from cart
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

//retrieve a single item from cart
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

//add item to part of the cart
router.post('/:orderId/:productId/:quantity', async (req, res, next) => {
  try {
    const [order] = await Cart.findOrCreate({
      where: {
        orderId: Number(req.params.orderId),
        productId: Number(req.params.productId)
      }
    })

    order.quantity = Number(req.params.quantity)
    await order.save()

    res.send(order)
  } catch (error) {
    next(error)
  }
})
