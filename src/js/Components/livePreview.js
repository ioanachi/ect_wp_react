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
        return (<span style = {divStyle} > {
                        mathCountDown.mathFunc(dataProps)
            } </span>
                );
    }
    dinamicComponent() {
        const components = {
            PlainString: PlainString
        };
        const timerNumbers = {
            years: 10,
            months: 10,
            weeks: 10,
            days: 10,
            hours: 10,
            minutes: 10,
            seconds: 10,
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
            years: 'Years',
            months: 'Months',
            weeks: 'Weeks',
            days: 'Days',
            hours: 'Hours',
            minutes: 'Minutes',
            seconds: 'Seconds',
            styles: {
                fontSize: this.props.pFont + 'px',
                color: this.props.pColor,
                fontWeight: (
                        this.props.pIsBold == true ?
                        'bold' :
                        'normal')
            }
        }
        const DynamicComponentName = components[this.state.timerStyle];
        return (<DynamicComponentName numbers={timerNumbers} cTxt={timerCustomTxt} />);
    }
    render() {
        return (<div className = "containerPreview" > {this.dinamicComponent()} </div>);
    }
}
