import React from 'react';
import ReactDOM from 'react-dom';
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
    pHourSelected:this.props.pHourSelected,
    pMinutesSelected:this.props.pMinutesSelected,
    cTxtYears:this.props.pYears,
    cTxtMonths:this.props.pMonths,
    cTxtWeeks:this.props.pWeeks,
    cTxtDays:this.props.pDays,
    cTxtHours:this.props.pHoursFormat,
    cTxtMinutes:this.props.pMinutesFormat,
    cTxtSeconds:this.props.pSecondsFormat,
    pFormat:this.props.pFormat,
  };
  var divStyle = {
    fontSize: this.props.pFont + 'px',
    color: this.props.pColor,
    fontWeight: (
      this.props.pIsBold == true
      ? 'bold'
      : 'normal')
  };
  if(isOnlyPreview){
    var theMainID =this.props.parentID;

    var ectPIndex;
    ectProperties.forEach(function(item,index){
      for(var key in item){
        if(key==theMainID){
          ectPIndex = index;
          return;
        }
      }
    });
    var propertiesObj = ectProperties[ectPIndex][theMainID];
    dataProps = {
      timeout: propertiesObj.timeout,
      pDate: propertiesObj.pDate,
      pTimezoneOffset: propertiesObj.pTimezoneOffset,
      pHourSelected: propertiesObj.pHourSelected,
      pMinutesSelected: propertiesObj.pMinutesSelected,
      pFormat: propertiesObj.pFormat,
      fontSize:propertiesObj.fontSize,
      color:propertiesObj.color,
      fontWeight:propertiesObj.fontWeight,
      cTxtYears:propertiesObj.cTxtYears,
      cTxtMonths:propertiesObj.cTxtMonths,
      cTxtWeeks:propertiesObj.cTxtWeeks,
      cTxtDays:propertiesObj.cTxtDays,
      cTxtHours:propertiesObj.cTxtHours,
      cTxtMinutes:propertiesObj.cTxtMinutes,
      cTxtSeconds:propertiesObj.cTxtSeconds,
    }
    divStyle = {
      fontSize: propertiesObj.fontSize,
      color: propertiesObj.color,
      fontWeight: propertiesObj.fontWeight
    };
  }
  return (<span style={divStyle}>{mathCountDown.mathFunc(dataProps)}</span>);
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
