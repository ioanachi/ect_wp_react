import React from 'react';

export class TimeFormat extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      timeFormat: this.props.pTimeFormat
    }
    this.chooseFormat = this.chooseFormat.bind(this);
    this.optionsFormat = this.optionsFormat.bind(this);
  };
  chooseFormat(evt) {
    var formatType = evt.target.value;
    this.setState({timeFormat: formatType});
    const SubmitFormat = this.props.callBackSelectFormat;
    SubmitFormat(formatType);
  };

  optionsFormat() {
    var Obj = [
      {
        "value": 'D then H:M:S',
        "text": 'Days then Hours/Minutes/Seconds'
      }, {
        "value": 'days',
        "text": 'Days'
      }, {
        "value": 'D:H:M:S',
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
      }
    ];
    return Obj.map(function(item, i) {
      return (<option key={i} value={item.value}>{item.text}</option>)
    });
  };

  render() {
    return (<select onChange={this.chooseFormat}>
      {this.optionsFormat()}
    </select>);
  }
}