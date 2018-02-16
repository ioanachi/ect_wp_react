import React from 'react';
import ReactDOM from 'react-dom';
import mathCountDown from './mathCountDown';
import {
    PlainString
} from '../TimerStyles/pack1';
export class LivePreview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            timeout: [],
            timerStyle: 'PlainString'
        };
        const tempClass = window[this.state.timerStyle + '2'];
        console.log(this.tempClass);
        this.liveCountDown = this.liveCountDown.bind(this);
    }
    ;
    liveCountDown() {
        var tempTimeout = this.state.timeout;
        if (!tempTimeout[0]) {
            tempTimeout.push(setTimeout(() => {
                this.setState({
                    timeout: []
                });
            }, 1000));
        }
        var dataProps = {
            tThis: this,
            timeout: this.state.timeout,
            endDate: this.props.endDate,
            pTimezoneOffset: this.props.pTimezoneOffset,
            endHour: this.props.endHour,
            endMinute: this.props.endMinute,
            cTxtYears: this.props.pYears,
            cTxtMonths: this.props.pMonths,
            cTxtWeeks: this.props.pWeeks,
            cTxtDays: this.props.pDays,
            cTxtHours: this.props.pHoursFormat,
            cTxtMinutes: this.props.pMinutesFormat,
            cTxtSeconds: this.props.pSecondsFormat,
            pFormat: this.props.pFormat,
        };
        var divStyle = {
            fontSize: this.props.pFont + 'px',
            color: this.props.pColor,
            fontWeight: (
                this.props.pIsBold == true ?
                    'bold' :
                    'normal')
        };
        if (isOnlyPreview) {
            var theMainID = this.props.parentID;
            var ectPIndex;
            ectProperties.forEach(function (item, index) {
                for (var key in item) {
                    if (key == theMainID) {
                        ectPIndex = index;
                        return;
                    }
                }
            });
            var propertiesObj = ectProperties[ectPIndex][theMainID];
            dataProps = {
                timeout: propertiesObj.timeout,
                endDate: propertiesObj.endDate,
                pTimezoneOffset: propertiesObj.pTimezoneOffset,
                endHour: propertiesObj.endHour,
                endMinute: propertiesObj.endMinute,
                pFormat: propertiesObj.pFormat,
                fontSize: propertiesObj.fontSize,
                color: propertiesObj.color,
                fontWeight: propertiesObj.fontWeight,
                cTxtYears: propertiesObj.cTxtYears,
                cTxtMonths: propertiesObj.cTxtMonths,
                cTxtWeeks: propertiesObj.cTxtWeeks,
                cTxtDays: propertiesObj.cTxtDays,
                cTxtHours: propertiesObj.cTxtHours,
                cTxtMinutes: propertiesObj.cTxtMinutes,
                cTxtSeconds: propertiesObj.cTxtSeconds,
            }
            divStyle = {
                fontSize: propertiesObj.fontSize,
                color: propertiesObj.color,
                fontWeight: propertiesObj.fontWeight
            };
        }
        return (<span style={divStyle} > {
            mathCountDown.mathFunc(dataProps)
        } </span>
        );
    }
    dinamicComponent() {
        var tempTimeout = this.state.timeout;
        if (!tempTimeout[0]) {
            tempTimeout.push(setTimeout(() => {
                this.setState({
                    timeout: []
                });
            }, 1000));
        }
        var tempTimeout = this.state.timeout;
        if (!tempTimeout[0]) {
            tempTimeout.push(setTimeout(() => {
                this.setState({
                    timeout: []
                });
            }, 1000));
        }
        var dataProps = {
            tThis: this,
            timeout: this.state.timeout,
            endDate: this.props.endDate,
            pTimezoneOffset: this.props.pTimezoneOffset,
            endHour: this.props.endHour,
            endMinute: this.props.endMinute,
            cTxtYears: this.props.pYears,
            cTxtMonths: this.props.pMonths,
            cTxtWeeks: this.props.pWeeks,
            cTxtDays: this.props.pDays,
            cTxtHours: this.props.pHoursFormat,
            cTxtMinutes: this.props.pMinutesFormat,
            cTxtSeconds: this.props.pSecondsFormat,
            pFormat: this.props.pFormat,
        };
        var divStyle = {
            fontSize: this.props.pFont + 'px',
            color: this.props.pColor,
            fontWeight: (
                this.props.pIsBold == true ?
                    'bold' :
                    'normal')
        };
        if (isOnlyPreview) {
            var theMainID = this.props.parentID;
            var ectPIndex;
            ectProperties.forEach(function (item, index) {
                for (var key in item) {
                    if (key == theMainID) {
                        ectPIndex = index;
                        return;
                    }
                }
            });
            var propertiesObj = ectProperties[ectPIndex][theMainID];
            dataProps = {
                timeout: propertiesObj.timeout,
                endDate: propertiesObj.endDate,
                pTimezoneOffset: propertiesObj.pTimezoneOffset,
                endHour: propertiesObj.endHour,
                endMinute: propertiesObj.endMinute,
                pFormat: propertiesObj.pFormat,
                fontSize: propertiesObj.fontSize,
                color: propertiesObj.color,
                fontWeight: propertiesObj.fontWeight,
                cTxtYears: propertiesObj.cTxtYears,
                cTxtMonths: propertiesObj.cTxtMonths,
                cTxtWeeks: propertiesObj.cTxtWeeks,
                cTxtDays: propertiesObj.cTxtDays,
                cTxtHours: propertiesObj.cTxtHours,
                cTxtMinutes: propertiesObj.cTxtMinutes,
                cTxtSeconds: propertiesObj.cTxtSeconds,
            }
            divStyle = {
                fontSize: dataProps.fontSize,
                color: dataProps.color,
                fontWeight: dataProps.fontWeight
            };
        }

        const components = {
            PlainString: PlainString
        };
        var tempDatesObj = {
            endDate: dataProps.endDate,
            pTimezoneOffset: dataProps.pTimezoneOffset,
            endHour: dataProps.endHour,
            endMinute: dataProps.endMinute
        };
        var numberValues = mathCountDown.mathFunc(tempDatesObj); 
        if(numberValues==false || typeof numberValues == 'undefined'){
            return;
        }
        const timerNumbers = {
            Years: numberValues.Years,
            Months: numberValues.Months,
            Weeks: numberValues.Weeks,
            Days: numberValues.Days,
            Hours: numberValues.Hours,
            Minutes: numberValues.Minutes,
            Seconds: numberValues.Seconds,
            styles: {
                fontSize: this.props.pFont + 'px',
                color: this.props.pColor,
                fontWeight: (
                    this.props.pIsBold == true ?
                        'bold' :
                        'normal')
            }
        }
        const timerCustomTxt = {
            Years: dataProps.cTxtYears,
            Months: dataProps.cTxtMonths,
            Weeks: dataProps.cTxtWeeks,
            Days: dataProps.cTxtDays,
            Hours: dataProps.cTxtHours,
            Minutes: dataProps.cTxtMinutes,
            Seconds: dataProps.cTxtSeconds,
            styles: {
                fontSize: this.props.pFont + 'px',
                color: this.props.pColor,
                fontWeight: (
                    this.props.pIsBold == true ?
                        'bold' :
                        'normal')
            }
        }
        console.log(timerNumbers);
        const DynamicComponentName = components[this.state.timerStyle];
        return (<DynamicComponentName numbers={timerNumbers} cTxt={timerCustomTxt} />);
    }
    render() {
        return (<div className="containerPreview" > {this.dinamicComponent()} </div>);
    }
}
