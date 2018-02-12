import React from 'react';
import timezoneArr from './timezoneArr.js'

export class Timezones extends React.Component {
  constructor(props) {

    super(props);
    this.state = {
      differenceUtc: '',
      selectedOption:this.props.pTimezoneOffset
    };
    this.chooseTimezone = this.chooseTimezone.bind(this);
    this.getOptions = this.getOptions.bind(this);
  };
  chooseTimezone(evt) {
    var selectedOption;

    var offsetInHours = new Date();
    const selectedValue = evt.target.value;
    const utcTz = evt.target[evt.target.selectedIndex].getAttribute('utctz');
    const returnDataToParent = this.props.callbackChildPropT;


    returnDataToParent(selectedValue, utcTz);
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
      return (<option  id={i} key={i} utctz={item['utc'][0]} value={offsetMilisec}>{item.text}</option>);
    });
  }
  render() {
    return (<select value={this.state.selectedOption}  onChange={this.chooseTimezone}>
      {this.getOptions(timezoneArr)}
    </select>);
  }
}
