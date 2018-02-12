import React, { Component } from 'react';
import moment from 'moment'
import Month from './Month';

class MonthFilterbox extends Component {

  render() {
    const months = [
      moment().subtract(1,'M').format('MMMM'),
      moment().format('MMMM'),
      moment().add(1,'M').format('MMMM')
    ];

    const monthItems = [];
    const selectedMonth =  this.props.selectedMonth || moment().format('MMMM');

    months.forEach((monthName) => {
      monthItems.push(
        <Month
          key={monthName} 
          monthName={monthName}
          onMonthChange={this.props.onMonthChange}
          isSelected={ selectedMonth === monthName}
        />
      );
    });

    return (
      <ul className="row release-calendar__nav release-calendar__nav--months">
        {monthItems}
      </ul>
    );
  }
}

export default MonthFilterbox;