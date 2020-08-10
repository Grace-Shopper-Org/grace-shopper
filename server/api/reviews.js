const router = require('express').Router()
const Review = require('../db/models/review')

// get all reviews :: /api/reviews
router.get('/', async (req, res, next) => {
  try {
    const reviews = await Review.findAll({})
    res.json(reviews)
  } catch (err) {
    next(err)
  }
})

//  get all reviews for a product :: /api/reviews/:productId

router.get('/:productId', async (req, res, next) => {
  try {
    const reviews = await Review.findAll({
      where: {productId: +req.params.productId}
    })
    res.json(reviews)
  } catch (err) {
    next(err)
  }
})

//  post new review for a product :: /api/reviews

router.post('/', async (req, res, next) => {
  try {
    const newReview = await Review.create(req.body)
    res.status(201).json(newReview)
  } catch (err) {
    next(err)
  }
})

module.exports = router
