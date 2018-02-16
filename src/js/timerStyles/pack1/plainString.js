import React from 'react';

export default class PlainString extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <span style={this.props.numbers.styles}>{this.props.numbers.Years}</span> <span style={this.props.cTxt.styles}>{this.props.cTxt.Years}</span> /&nbsp;
        <span style={this.props.numbers.styles}>{this.props.numbers.Months}</span> <span style={this.props.cTxt.styles}>{this.props.cTxt.Months}</span> /&nbsp;
        <span style={this.props.numbers.styles}>{this.props.numbers.Weeks}</span> <span style={this.props.cTxt.styles}>{this.props.cTxt.Weeks}</span> /&nbsp;
        <span style={this.props.numbers.styles}>{this.props.numbers.Days}</span> <span style={this.props.numbers.styles}>{this.props.cTxt.Days}</span> /&nbsp;
        <span style={this.props.numbers.styles}>{this.props.numbers.Hours}</span> <span style={this.props.cTxt.styles}>{this.props.cTxt.Hours}</span> /&nbsp;
        <span style={this.props.numbers.styles}>{this.props.numbers.Minutes}</span> <span style={this.props.cTxt.styles}>{this.props.cTxt.Minutes}</span> /&nbsp;
        <span style={this.props.numbers.styles}>{this.props.numbers.Seconds}</span> <span style={this.props.cTxt.styles}>{this.props.cTxt.Seconds}</span>
      </div>
    );
  }
}
