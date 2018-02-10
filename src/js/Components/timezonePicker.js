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
    const returnDataToParent = this.props.callbackChildPropT;
    returnDataToParent(selectedValue);
  };
  getOptions(x) {
    return x.map(function(item, i) {
      var partialParsing = item.text.split('UTC')[1];
      var newValue = partialParsing.split(')')[0];
      var oneHour = 60 * 60 * 1000;
      var oneMinute = 60 * 1000;

      var offsetHMilisec = newValue.split(':')[0] * oneHour;
      var offsetMMilisec = newValue.split(':')[1] * oneMinute;

      var offsetMilisec = offsetHMilisec + offsetMMilisec;

      // console.log(offsetMilisec, "newValu/senewValuenewValuenewValuenewValuenewValue");
      return (<option key={i} value={offsetMilisec}>{item.text}</option>);
    });
  }
  render() {
    return (<select onChange={this.chooseTimezone}>
      {this.getOptions(timezoneArr)}
    </select>);
  }
}
