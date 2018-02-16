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
    const formatTypeValue = evt.target.value;
    this.setState({timeFormat:formatTypeValue});
    const SubmitFormat = this.props.callBackSelectFormat;
    SubmitFormat(formatTypeValue);
  };

  optionsFormat() {
    var Obj = [
      {
        "value": 'Y2S',
        "text": 'Years to Seconds'
      }, {
        "value": 'D2S',
        "text": 'Days/Hours/Minutes/Seconds'
      }, {
        "value": 'D then H2S',
        "text": 'Days then Hours/Minutes/Seconds'
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
        "value": 'days',
        "text": 'Days'
      }, {
        "value": 'weeks',
        "text": 'Weeks'
      }, {
        "value": 'months',
        "text": 'Months'
      }, {
        "value": 'years',
        "text": 'Years'
      }
    ];
    return Obj.map(function(item, i) {
      return (<option key={i} value={item.value}>{item.text}</option>)
    });

  };

  render() {
    return (<div>
      {}<select onChange={this.chooseFormat} value={this.state.timeFormat}> {this.optionsFormat()}
    </select>
  </div>);
  }
}
