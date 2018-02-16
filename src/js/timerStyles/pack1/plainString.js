import React from 'react';

export default class PlainString extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    var finalResult = [];
    for(var key in this.props.numbers){
      if(key!='Styles'){
        var tempItem = (<div className="spanDiv"><span style={this.props.numbers.Styles}>{this.props.numbers[key]}</span> <span style={this.props.cTxt.Styles}>{this.props.cTxt[key]}</span> /&nbsp;</div>);
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
