import React from 'react';

export default class VerticalTimer extends React.Component {
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
        console.log(typeof this.props.numbers[key], "this.props.numbers[key]");
        
        var tempItem = (<div key={key} className="verticalView">
        <div className="numbersPreview"><span style = {this.props.numbers.Styles}>{ this.props.numbers[key] } </span></div> 
        <div className="textPreview"><span style={this.props.customTxt.Styles}>{this.props.customTxt[key]}</span> &nbsp;</div> </div>);


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
      return ( <div> {
        finalResult
      } </div>
            );
          }
        }