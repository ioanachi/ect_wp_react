import React from 'react';

export default class PlainString extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <span style={this.props.numbers.styles}>{this.props.numbers.years}</span> <span style={this.props.cTxt.styles}>{this.props.cTxt.years}</span> /&nbsp;
        <span style={this.props.numbers.styles}>{this.props.numbers.months}</span> <span style={this.props.cTxt.styles}>{this.props.cTxt.months}</span> /&nbsp;
        <span style={this.props.numbers.styles}>{this.props.numbers.weeks}</span> <span style={this.props.cTxt.styles}>{this.props.cTxt.weeks}</span> /&nbsp;
        <span style={this.props.numbers.styles}>{this.props.numbers.days}</span> <span style={this.props.numbers.styles}>{this.props.cTxt.days}</span> /&nbsp;
        <span style={this.props.numbers.styles}>{this.props.numbers.hours}</span> <span style={this.props.cTxt.styles}>{this.props.cTxt.hours}</span> /&nbsp;
        <span style={this.props.numbers.styles}>{this.props.numbers.minutes}</span> <span style={this.props.cTxt.styles}>{this.props.cTxt.minutes}</span> /&nbsp;
        <span style={this.props.numbers.styles}>{this.props.numbers.seconds}</span> <span style={this.props.cTxt.styles}>{this.props.cTxt.seconds}</span>
      </div>
    );
  }
}
