const faker = require('faker')

function generateProducts(num) {
  let products = []

  for (let i = 0; i < num; i++) {
    const newProduct = {
      name: faker.commerce.productName(),
      price: Math.floor(faker.commerce.price()),
      description: faker.lorem.sentences()
    }
    products.push(newProduct)
  }
  return products
}

module.exports = generateProducts
