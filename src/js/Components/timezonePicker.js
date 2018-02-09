import React from 'react';
import timezoneArr from './timezoneArr.js'

export class Timezones extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      differenceUtc: ''
    };
    this.chooseTimezone = this.chooseTimezone.bind(this);
    this.getOptions = this.getOptions.bind(this);
  };
  chooseTimezone(evt) {
    const selectedValue = evt.target.value;
    console.log(selectedValue, "initialValue");
    var offset = new Date().getTimezoneOffset();
    const epochTime = new Date(1)
    console.log(epochTime, "rush");
    const returnDataToParent = this.props.callbackChildPropT;
    returnDataToParent(selectedValue);
  };
  getOptions(x) {
    return x.map(function(item, i) {
      var newValue = item.offset;

      return (<option key={i} value={newValue}>{item.text}</option>);
    });
  }
  render() {
    return (
      <select onChange={this.chooseTimezone}>
      {this.getOptions(timezoneArr)}
    </select>
  );
  }
}
