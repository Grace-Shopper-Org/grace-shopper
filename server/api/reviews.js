const router = require('express').Router()
const Review = require('../db/models/review')
const Product = require('../db/models/product')

// get all reviews :: /api/reviews
router.get('/', async (req, res, next) => {
  try {
    const reviews = await Review.findAll({
      include: [
        {
          model: Product,
          attributes: ['id', 'name']
        }
      ]
    })
    res.json(reviews)
  } catch (err) {
    next(err)
  }
})

//  get all reviews for a product :: /api/reviews/product/:productId

router.get('/products/:productId', async (req, res, next) => {
  try {
    const reviews = await Review.findAll({
      where: {productId: +req.params.productId}
    })
    res.json(reviews)
  } catch (err) {
    next(err)
  }
})

//  post new review for a product :: /api/reviews/product/:productId

router.post('/products/:productId', async (req, res, next) => {
  try {
    const newReview = await Review.create(req.body)
    res.status(201).json(newReview)
  } catch (err) {
    next(err)
  }
})

module.exports = router

/*
try {
    const product = await Product.findByPk(req.params.productId, {
      include: [Review],
    });
   //console.log ( 'PRODUCT!!!', product.reviews)
    res.json(product.reviews);


*/
