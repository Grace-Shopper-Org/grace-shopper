const {db, User, Product, Cart} = require('./server/db')
const {fakeProducts, fakeUsers} = require('./dummyData')

const seed = async () => {
  try {
    await db.sync({force: true})
    await Promise.all(fakeProducts.map(product => Product.create(product)))
    await Promise.all(fakeUsers.map(user => User.create(user)))
  } catch (err) {
    console.log(err)
  }
}
module.exports = seed
// If this module is being required from another module, then we just export the
// function, to be used as necessary. But it will run right away if the module
// is executed directly (e.g. `node seed.js` or `npm run seed`)
if (require.main === module) {
  seed()
    .then(() => {
      console.log('Seeding success!')
      db.close()
    })
    .catch(err => {
      console.error('Oh noes! Something went wrong!')
      console.error(err)
      db.close()
    })
}
