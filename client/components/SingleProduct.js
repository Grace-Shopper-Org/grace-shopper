import React from 'react'

const testProduct = {
  name: 'Cedar Surprise',
  price: 6,
  description: 'that good tree smell!',
  imageUrl:
    'https://images.unsplash.com/photo-1560865302-90692d3a4716?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
}

export class SingleProduct extends React.Component {
  componentDidMount() {
    //later, this is where we'll call this.props.loadSingleProduct
    console.log('the component has mounted!')
  }

  render() {
    //later:
    //const currentProduct = this.props.singleProduct

    const currentProduct = testProduct

    return (
      <div>
        <div id="single-product">
          <h2>{currentProduct.name}</h2>
          <p>{currentProduct.description}</p>
          <div>Price: {currentProduct.price}</div>
          <img
            src={currentProduct.imageUrl}
            alt={`a picture of ${currentProduct.name}`}
          />
        </div>
      </div>
    )
  }
}

//here's where the map State will go

//and the mapDispatch

//and the export w/connect statement

export default SingleProduct
