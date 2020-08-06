const router = require('express').Router()
const Product = require('../db/models/product')

module.exports = router

//GET route for product list
router.get('/', async (req, res, next) => {
  try {
    console.log(Product)
    const products = await Product.findAll()
    res.json(products)
  } catch (error) {
    next(error)
  }
})

//GET route for a single product
router.get('/:productId', async (req, res, next) => {
  try {
    const currentProduct = await Product.findByPk(req.params.productId)
    res.json(currentProduct)
  } catch (error) {
    next(error)
  }
})

//POST route to add a new product
router.post('/', async (req, res, next) => {
  try {
    const newProduct = await Product.create(req.body)
    res.jsonp(newProduct)
  } catch (error) {
    next(error)
  }
})

//PUT route to update a product

//DELETE route to remove a product
