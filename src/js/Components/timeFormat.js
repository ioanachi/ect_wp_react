import React from 'react';

export class TimeFormat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timeFormat: this.props.pTimeFormat
    }
    this.chooseFormat = this.chooseFormat.bind(this);
    this.optionsFormat = this.optionsFormat.bind(this);
  };
  chooseFormat(evt) {
    var formatType = evt.target.value;
    const SubmitFormat = this.props.callBackSelectFormat;
    SubmitFormat(formatType);
  };

  optionsFormat() {
    var Obj = [
      {
        "value": 'D then H2S',
        "text": 'Days then Hours/Minutes/Seconds'
      }, {
        "value": 'days',
        "text": 'Days'
      }, {
        "value": 'D2S',
        "text": 'Days/Hours/Minutes/Seconds'
      }, {
        "value": 'hours:minutes:seconds',
        "text": 'Hours:Minutes:Seconds'
      }, {
        "value": 'hours:minutes',
        "text": 'Hours:Minutes'
      }, {
        "value": 'minutes:seconds',
        "text": 'Minutes:Seconds'
      }, {
        "value": 'seconds',
        "text": 'Seconds'
      }, {
        "value": 'years',
        "text": 'Years'
      }, {
        "value": 'months',
        "text": 'Months'
      }, {
        "value": 'weeks',
        "text": 'Weeks'
      }, {
        "value": 'Y2S',
        "text": 'Years to Seconds'
      }
    ];
    return Obj.map(function(item, i) {
      return (<option key={i} value={item.value}>{item.text}</option>)
    });

  };

  render() {
    console.log(this.state.timeFormat);
    return (<div>
      {}<selec onChange={this.chooseFormat}>
      value={this.state.timeFormat}> {this.optionsFormat()}
    </select>
  </div>);
  }
}
