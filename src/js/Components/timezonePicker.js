import React from 'react';
import timezoneArr from './timezoneArr.js'
export class Timezones extends React.Component {
  constructor(props) {
    super(props);

    this.chooseTimezone = this.chooseTimezone.bind(this);
    this.getOptions = this.getOptions.bind(this);
  };
  chooseTimezone(evt) { 
    const selectedValue = evt.target.value;
    const returnDataToParent = this.props.callbackChildPropT;
    returnDataToParent(selectedValue);
  };
  getOptions(x){
    return x.map(function(item,i) {
      var newValue = item.utc[0];
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
