const fakeProducts = [
  {
    name: 'Soap A',
    price: 5,
    description: 'the first soap I could think of.',
    imageUrl:
      'https://images.unsplash.com/photo-1584305574620-2aab80eedfe6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
  },
  {
    name: 'Lavender Dream',
    price: 7,
    description: 'smells like a lavender dream.',
    imageUrl:
      'https://images.unsplash.com/photo-1524136964799-6ba980a735f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80'
  },
  {
    name: 'Vanilla Vacation',
    price: 6,
    description: 'made from the finest vanilla beans',
    imageUrl:
      'https://images.unsplash.com/photo-1592788174877-3f99727fd23d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2800&q=80'
  },
  {
    name: 'Cedar Surprise',
    price: 6,
    description: 'that good tree smell!',
    imageUrl:
      'https://images.unsplash.com/photo-1560865302-90692d3a4716?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
  },
  {
    name: 'Super Luxury Soap',
    price: 10,
    description: 'like a private jet but for cleaning',
    imageUrl:
      'https://images.unsplash.com/photo-1584305574647-0cc949a2bb9f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
  },
  {
    name: 'Discount Value Soap',
    price: 2,
    description: 'Economy Value that gets the job done'
  }
]

const fakeUsers = [
  {
    username: 'gottaHaveSoap',
    password: '1234',
    email: 'gottaHaveSoap@foo.bar',
    imageUrl:
      'https://previews.123rf.com/images/kahovsky/kahovsky1912/kahovsky191200042/135373319-cute-happy-soap-juggle-foam-bubble-vector-flat-cartoon-character-illustration-icon-design-isolated-o.jpg'
  },
  {
    username: 'cleanKid',
    password: 'password',
    email: 'cleanKid333@lysol.biz',
    imageUrl:
      'https://images.unsplash.com/photo-1504811190172-325dc0249d5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80'
  },
  {
    username: 'graceHopper',
    password: '5678',
    email: 'grace@fullstack.org'
  }
]

const fakeOrder = [
  {
    userId: 1,
    status: 'created'
  },
  {
    userId: 1,
    status: 'completed'
  },
  {
    userId: 2,
    status: 'created'
  }
]

const sampleOrder = [
  {
    id: 2,
    status: 'completed',
    userId: 1,
    products: [
      {
        name: 'Soap A',
        price: 5,
        imageUrl:
          'https://images.unsplash.com/photo-1584305574620-2aab80eedfe6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
        cart: {
          quantity: 1,
          price: null,
          createdAt: '2020-08-06T16:42:34.510Z',
          updatedAt: '2020-08-06T16:42:34.510Z',
          orderId: 2,
          productId: 1
        }
      },
      {
        name: 'Lavender Dream',
        price: 7,
        imageUrl:
          'https://images.unsplash.com/photo-1524136964799-6ba980a735f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
        cart: {
          quantity: 1,
          price: null,
          createdAt: '2020-08-06T16:42:34.517Z',
          updatedAt: '2020-08-06T16:42:34.517Z',
          orderId: 2,
          productId: 2
        }
      }
    ]
  }
]

module.exports = {fakeProducts, fakeUsers, fakeOrder, sampleOrder}
