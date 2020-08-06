import React from 'react'
import {fakeProducts} from '../../dummyData'

//importing the product list from dummy data for testing purposes
//eventually we'll make an axios call w/Redux and get it via props

//be sure to add a link to the single-product view
//be sure to change the key id to product.id when we have database access

export class AllProducts extends React.Component {
  render() {
    //this will eventually be:
    //const products = this.props.products
    const products = fakeProducts
    console.log(products)

    return (
      <div>
        <div id="product-list">
          <h3>Our Products:</h3>
          <ul>
            {products.map(product => {
              return (
                <li key={product.id || product.name.length}>
                  <ul>
                    <li>{product.name}</li>
                    <img
                      src={product.imageUrl}
                      alt="a picture of the product"
                    />
                    <li>{product.description}</li>
                    <li>Price: ${product.price}</li>
                  </ul>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    )
  }
}
