'use strict'

const {db} = require('../server/db')
const {User, Product, Order} = require('../server/db/models')
const {fakeProducts, fakeUsers, fakeOrder} = require('../dummyData')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  await Promise.all(fakeProducts.map(product => Product.create(product)))
  await Promise.all(fakeUsers.map(user => User.create(user)))
  const orderOne = await Order.create(fakeOrder[0])
  const orderTwo = await Order.create(fakeOrder[1])
  const orderThree = await Order.create(fakeOrder[2])
  const orderFour = await Order.create(fakeOrder[3])
  const customerOne = await User.findOne({
    where: {
      id: 1
    }
  })
  const customerTwo = await User.findOne({
    where: {
      id: 2
    }
  })
  const customerThree = await User.findOne({
    where: {
      id: 3
    }
  })
  const productOne = await Product.findOne({
    where: {
      id: 1
    }
  })
  const productTwo = await Product.findOne({
    where: {
      id: 2
    }
  })
  await customerOne.addOrder(orderOne) //created
  await customerOne.addOrder(orderTwo) // completed
  await customerTwo.addOrder(orderThree) //completed
  await customerThree.addOrder(orderFour) //completed
  await orderOne.addProduct(productOne)
  await orderOne.addProduct(productTwo)
  await orderTwo.addProduct(productOne)
  await orderTwo.addProduct(productTwo)
  await orderThree.addProduct(productOne)
  await orderFour.addProduct(productOne)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
