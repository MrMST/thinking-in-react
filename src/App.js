import React, { Component } from 'react';
import FilterableProductContainer from './components/FilterableProductContainer';
import MonthFilterbox from './components/MonthFilterbox';
import GenderFilterbox from './components/GenderFilterbox';
import './App.css';
// import Products from './data/products.json';

// const PRODUCTS = Products;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedGender: 'All',
      selectedMonth: null
    };
    this.handleMonthChange = this.handleMonthChange.bind(this);
    this.handleGenderChange = this.handleGenderChange.bind(this);
  }

  handleMonthChange(selectedMonth) {
    this.setState({
      selectedMonth: selectedMonth
    });
  }

  handleGenderChange(selectedGender) {
    this.setState({
      selectedGender: selectedGender
    });
  }

  render() {
    return (
      <div className="release-calendar">
        <MonthFilterbox 
        onMonthChange={this.handleMonthChange}
        selectedMonth={this.state.selectedMonth}
        />
        <GenderFilterbox 
        onGenderChange={this.handleGenderChange}
        selectedGender={this.state.selectedGender}
        />
        <FilterableProductContainer
          // products={PRODUCTS}
          gender={this.state.selectedGender}
          selectedMonth={this.state.selectedMonth}
        />
      </div>
    );
  }
}

export default App;
