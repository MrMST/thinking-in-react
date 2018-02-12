import React, { Component } from 'react';
import Product from './Product';
import moment from 'moment';

const API='http://192.168.0.21/products.json';

class FilterableProductContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetchedProducts: []
    };
  }

  componentDidMount() {
    fetch(API)
      .then(response => response.json())
      .then(data => this.setState({ fetchedProducts: data }));
  }

  render() {

    // console.log('State: ' + this.state.fetchedProducts);

    const gender = this.props.gender;
    const selectedMonth = this.props.selectedMonth;
    let products = this.state.fetchedProducts;
    products = products.filter(function (el) {
      return el.gender === gender || gender === 'All';
    });

    products = products.filter(function (el) {
      return  moment(el.releaseDatetime).format('MMMM') === selectedMonth || selectedMonth === null;
    });

    const productElements = [];

    products.forEach((product) => {
      productElements.push(
        <Product
        product={product}
        key={product.id} />
      );
    });

    return (
      <ul className="row release-calendar__items">
        {productElements}
      </ul>
    );
  }
}

export default FilterableProductContainer;