const router = require('express').Router()
const {Product, Order} = require('../db/models')
module.exports = router

//Get /api/orders
router.get('/:userId', async (req, res, next) => {
  try {
    const orders = await Order.findAll({
      where: {
        userId: req.params.userId,
        status: 'completed'
      },
      include: [
        {
          model: Product,
          required: false,
          attributes: ['name', 'price', 'imageUrl']
        }
      ]
    })
    res.json(orders)
  } catch (error) {
    next(error)
  }
})
