import React, { Component } from 'react';

class Month extends Component {
  constructor(props) {
    super(props);
    this.handleMonthChange = this.handleMonthChange.bind(this);
  }
  
  handleMonthChange() {
    this.props.onMonthChange(this.props.monthName);
  }

  render() {
    const monthName = this.props.monthName; 
    const active = (this.props.isSelected) ? 'active' : '';

    return (
      <li 
      className= {"col-xs-4 release-calendar__nav__select " + active}
      onClick={() => this.handleMonthChange(monthName)}
      >
        <span className="visible-xs"></span>
        <span className="hiden-xs">{monthName}</span>
      </li>
    );
  }
}

export default Month;