import React from 'react';

export default class PlainString extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    var finalResult = [];
    var isLast = true;
    for (var key in this.props.numbers) {
      if (key != 'Styles') {
        if (isLast) {
          if (this.props.numbers[key] != 0) {
            isLast = false;
          }else{
            continue;
          }
        }
          var tempItem = (<div className="spanDiv"><span style={this.props.numbers.Styles}>{this.props.numbers[key]}</span> <span style={this.props.customTxt.Styles}>{this.props.customTxt[key]}</span>&nbsp;</div>);
          finalResult.push(tempItem);
      }
    }
    return (
      <div>
        {finalResult}
      </div>
    );
  }
}
