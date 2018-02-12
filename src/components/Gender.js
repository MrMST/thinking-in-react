import React, { Component } from 'react';

class Gender extends Component {
  constructor(props) {
    super(props);
    this.handleGenderChange = this.handleGenderChange.bind(this);
  }
  
  handleGenderChange() {
    this.props.onGenderChange(this.props.gender);
  }

  render() {
    const gender = this.props.gender; 
    const active = (this.props.isSelected) ? 'active' : '';

    return (
      <li 
      className= {"col-xs-4 release-calendar__nav__select " + active}
      onClick={() => this.handleGenderChange(gender)}
      >
        <span className="visible-xs"></span>
        <span className="hiden-xs">{gender}</span>
      </li>
    );
  }
}

export default Gender;