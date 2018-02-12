import React, { Component } from 'react';
import Gender from './Gender';

class GenderFilterbox extends Component {

  render() {
    const genders = [
      'All',
      'Men',
      'Women'
    ];
    const genderItems = [];
    const selectedGender =  this.props.selectedGender || 'All';

    genders.forEach((gender) => {
      genderItems.push(
        <Gender
          key={gender} 
          gender={gender}
          onGenderChange={this.props.onGenderChange}
          isSelected={ selectedGender === gender}
        />
      );
    });

    return (
      <ul className="row release-calendar__nav release-calendar__nav--gender">
        {genderItems}
      </ul>
    );
  }
}

export default GenderFilterbox;