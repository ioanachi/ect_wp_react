import React from 'react';
import mathCountDown from './mathCountDown';

export class LivePreview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {timeout:[]};
    this.liveCountDown = this.liveCountDown.bind(this);
  };


liveCountDown(){
  var tempTimeout = this.state.timeout;
  if(!tempTimeout[0]){
    tempTimeout.push(setTimeout(() => {
      this.setState({timeout: []});
    }, 1000));
  }
  var dataProps = {
    tThis: this,
    timeout:this.state.timeout,
    pDate:this.props.pDate,
    pTimezoneOffset:this.props.pTimezoneOffset,
    pHour:this.props.pHour,
    pMinutes:this.props.pMinutes,
    pFormat:this.props.pFormat,
  };
  var divStyle = {
    fontSize: this.props.pFont + 'px',
    color: this.props.pColor,
    fontWeight: (
      this.props.pBold == true
      ? 'bold'
      : 'normal')
  };
  if(isOnlyPreview){
    dataProps = {
      timeout: ectProperties.timeout,
      pDate: ectProperties.pDate,
      pTimezoneOffset: ectProperties.pTimezoneOffset,
      pHour: ectProperties.pHour,
      pMinutes: ectProperties.pMinutes,
      pFormat: ectProperties.pFormat,
      fontSize:ectProperties.fontSize,
      color:ectProperties.color,
      fontWeight:ectProperties.fontWeight
    }
    divStyle = {
      fontSize: ectProperties.fontSize,
      color: ectProperties.color,
      fontWeight: ectProperties.fontWeight
    };
  }
  return (<h2 style={divStyle}>{mathCountDown.mathFunc(dataProps)}</h2>);
}

  render() {


    return (<div>
      <div className="containerPreview">
        <h3>{this.props.pName}
        </h3>
        {this.liveCountDown()}
      </div>
    </div>);
  }
}
