import React from 'react';
import timezoneArr from './timezoneArr.js'
export class Timezones extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timezone: ''
    }
    this.chooseTimezone = this.chooseTimezone.bind(this);
    this.getOptions = this.getOptions.bind(this);
  };
  chooseTimezone(evt) {
    this.setState({timezone: evt.target.value});
    console.log(evt.target.value);
  };
  getOptions(x){
    return x.map(function(item,i) {
      var newValue = item.text.split(')')[0];
      newValue = newValue.split('(')[1];
      return (<option key={i} value={newValue}>{item.text}</option>);
    });
  }
  render() {
    return (<div className="componentContainer">
      <label>timezone</label>
      <select onChange={this.chooseTimezone}>
        {this.getOptions(timezoneArr)}
      </select>
    </div>);
  }
}
