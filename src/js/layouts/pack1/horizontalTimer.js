import React from 'react';

export default class HorizontalTimer extends React.Component {
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
          } else {
            continue;
          }
        }
        var tempItem = (<div key={key} className="spanDiv">
        <span style = {this.props.numbers.Styles}>
        { this.props.numbers[key] } 
        </span> <span style={this.props.customTxt.Styles}>{this.props.customTxt[key]}</span> &nbsp; </div>);
              finalResult.push(tempItem);
            }
          }
          if (!this.props.numbers) {
            finalResult = ( <span style = {
                this.props.customTxt.Styles
              } > {
                this.props.customTxt.EndedTxt
              } </span>);
      }
      return ( <div className="floatingPreview"> {
        finalResult
      } </div>
            );
          }
        }
