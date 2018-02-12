import React, { Component } from 'react';

class Product extends Component {
  
  render() {
    const product = this.props.product;

    return (
      <div className="tile">

      <div className="release-calendar__date-box">
        <p className="release-calendar__date-box__day">13</p>
        <p className="release-calendar__date-box__month">Jan</p>
      </div>

      <div className="release-calendar__item__image-container">
          <img className="release-calendar__item__image" alt="product" src={product.image} />
      </div>

      <div className="release-calendar__text-box">
        <p className="release-calendar__text-box__title">
          <span className="release-calendar__text-box__title__brand">Nike</span> {product.name} - {product.gender}
        </p>
        <p className="release-calendar__text-box__color">{product.colors}</p>
        <p className="release-calendar__text-box__vendor-code">{product.manufacturerSku}</p>
      </div>

      <div className="release-calendar__item__button-container">
          <a className="fl-btn fl-btn__primary release-calendar__item__button" href={product.deepLinks[0].link}>
            <span className="fl-btn--inner">Jetzt kaufen</span>
          </a>
      </div>
      </div>
    );
  }
}

export default Product;