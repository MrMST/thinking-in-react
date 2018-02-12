import React, { Component } from 'react';
import Product from './Product';

class ProductContainer extends Component {
  render() {
    const products = [];

    this.props.products.forEach((product) => {
      products.push(
        <Product
        product={product}
        key={product.id} />
      );
    });

    return (
      <div className="product-container">
        {products}
      </div>
    );
  }
}

export default ProductContainer;