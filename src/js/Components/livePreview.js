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
    pYearsFormat:this.props.pYears,
    pMonthsFormat:this.props.pMonths,
    pWeeksFormat:this.props.pWeeks,
    pDaysFormat:this.props.pDays,
    pHoursFormat:this.props.pHoursFormat,
    pMinutesFormat:this.props.pMinutesFormat,
    pSecondsFormat:this.props.pSecondsFormat,
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
      pYearsFormat:propertiesObj.pYears,
      pMonthsFormat:propertiesObj.pMonths,
      pWeeksFormat:propertiesObj.pWeeks,
      pDaysFormat:propertiesObj.pDays,
      pHoursFormat:propertiesObj.pHoursFormat,
      pMinutesFormat:propertiesObj.pMinutesFormat,
      pSecondsFormat:propertiesObj.pSecondsFormat,
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
