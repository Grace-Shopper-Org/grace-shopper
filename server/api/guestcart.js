const router = require('express').Router()
const {Product, Order} = require('../db/models')
module.exports = router

//GET route for product list  /api/guestcart
router.get('/', (req, res, next) => {
  try {
    if (!req.user) {
      let guestcart = req.session.cart
      res.json(guestcart)
    }
  } catch (error) {
    next(error)
  }
})

//add products to guest cart /api/guestcart
router.post('/', async (req, res, next) => {
  try {
    const product = await Product.findOne({
      where: {
        id: req.body.productId
        //or id:req.body.productId parseInt
      }
    })
    req.session.cart.push(product)
    res.redirect('/products')
    res.json(req.session.cart)
  } catch (error) {
    next(error)
  }
})
//these get and add route is working, how to test the delete route ????
//1)reducer for guestcart?
//2) can we call it in the component
//if (!this.props.userId) this.props.getCart

//this route not sure how to test
router.delete('/', (req, res, next) => {
  try {
    for (let i = 0; i < req.session.cart.length; i++) {
      if (req.session.cart[i] === req.body.productId) {
        req.session.cart.splice(i, 1)
      }
    }
    res.redirect('/')
    res.send(req.session.cart)
  } catch (error) {
    next(error)
  }
})
