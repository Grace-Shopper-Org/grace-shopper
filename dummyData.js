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
    status: 'completed'
  },
  {
    userId: 3,
    status: 'completed'
  },
  {
    userId: 3,
    status: 'completed'
  }
]

const fakeReviews = [
  {
    subject: 'The best of the best',
    content:
      'What a pleasant surprise I received in starting to use your superb new soap. My tired old face thanks you for the ease in lavish lathering. Oh, and the divine fragrances are almost (but not quite) the best part. I shall continue using them and pass them around to my friends.',
    productId: 1,
    userId: 2
  },
  {
    subject: 'Wonderful all natural soaps',
    content:
      'I wanted to try the Dr. Squatch cold pressed natural soaps, but they are way too expensive, so I gave these soaps a shot. They are fantastic and I dont think I will ever go back to traditional soaps again',
    productId: 1,
    userId: 1
  },
  {
    subject: 'Love',
    content:
      'I really like these soaps! They smell great when showering and made my bathroom smell wonderful. They seem to rinse clean and leave a subtle scent on my skin.',
    productId: 3,
    userId: 2
  },
  {
    subject: 'High Quality, Beautiful Scent(s), Great Value',
    content:
      'Usually when I see a product this cheap I think something fishy is going on! But that is probably not the case with this soap',
    productId: 4,
    userId: 2
  },
  {
    subject: 'My new favorite soap',
    content:
      'I really like these soaps! I started using soap bars because I wanted to become a more environmentally friendly household.The soap lathers, cleans, and rinses well. The bars are very moisturizing and I even use them on my face',
    productId: 5,
    userId: 2
  },
  {
    subject: 'Silly me',
    content:
      'I was digging through my master bath and found this unused box of soaps. I opened them up, broke out the Lavendar bar and just ordered 6 more sets.',
    productId: 2,
    userId: 2
  },
  {
    subject: 'Exceeded my expectations',
    content:
      'Smells good, but not overpowering (pleasant in the shower, but I dont want to smell that "pretty" going about my business =). And the big thing is that it lasts noticeably longer than mass-market soaps I have used.',
    productId: 2,
    userId: 2
  }
]

module.exports = {fakeProducts, fakeUsers, fakeOrder, fakeReviews}
