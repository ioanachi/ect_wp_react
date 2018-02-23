import React from 'react';
import ReactDOM from 'react-dom';
import mathCountDown from './mathCountDown';
import {HorizontalSlider} from '../layouts/pack1';
import {VerticalTimer} from '../layouts/pack1';
export class LivePreview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            timeout: [],
            timerStyle: 'VerticalTimer'
        };
        const tempClass = window[this.state.timerStyle + '2'];
    };

    dinamicComponent() {
        var tempTimeout = this.state.timeout;
        if (!tempTimeout[0]) {
            tempTimeout.push(setTimeout(() => {
                this.setState({timeout: []});
            }, 1000));
        }
        var tempTimeout = this.state.timeout;
        if (!tempTimeout[0]) {
            tempTimeout.push(setTimeout(() => {
                this.setState({timeout: []});
            }, 1000));
        }
        var dataProps = {
            tThis: this,
            timeout: [],
            endDate: this.props.pAllData.endDate,
            pTimezoneOffset: this.props.pAllData.timezoneOffset,
            endHour: this.props.pAllData.endHour,
            endMinute: this.props.pAllData.endMinute,
            fontSize: this.props.pAllData.fontSize,
            fontSizeTxt: this.props.pAllData.fontSizeTxt,
            isBold: this.props.pAllData.isBold,
            isBoldTxt: this.props.pAllData.isBoldTxt,
            customTxtYears: this.props.pAllData.Years,
            customTxtMonths: this.props.pAllData.Months,
            customTxtWeeks: this.props.pAllData.Weeks,
            customTxtDays: this.props.pAllData.Days,
            customTxtHours: this.props.pAllData.Hours,
            customTxtMinutes: this.props.pAllData.Minutes,
            customTxtSeconds: this.props.pAllData.Seconds,
            customTxtEndedTxt: this.props.pAllData.customTxtEndedTxt,
            pFormat: this.props.pAllData.timeFormat
        };
        var divStyle = {},
            divStyleTxt = {};
        if (isOnlyPreview) {
            var theMainID = this.props.pAllData.parentID;
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
                fontSizeTxt: propertiesObj.fontSizeTxt,
                color: propertiesObj.color,
                colorTxt: propertiesObj.colorTxt,
                isBold: propertiesObj.isBold,
                isBoldTxt: propertiesObj.isBoldTxt,
                customTxtYears: propertiesObj.customTxtYears,
                customTxtMonths: propertiesObj.customTxtMonths,
                customTxtWeeks: propertiesObj.customTxtWeeks,
                customTxtDays: propertiesObj.customTxtDays,
                customTxtHours: propertiesObj.customTxtHours,
                customTxtMinutes: propertiesObj.customTxtMinutes,
                customTxtSeconds: propertiesObj.customTxtSeconds,
                customTxtEndedTxt: propertiesObj.customTxtEndedTxt
            };
            divStyle = {
                fontSize: dataProps.fontSize+'px',
                color: dataProps.color,
                fontWeight: (dataProps.isBold == true
                    ? 'bold'
                    : 'normal')
            }
            divStyleTxt = {
                fontSize: dataProps.fontSizeTxt+'px',
                color: dataProps.colorTxt,
                fontWeight: (dataProps.isBoldTxt == true
                    ? 'bold'
                    : 'normal')
            };
        } else {

            divStyle = {
                fontSize: this.props.pAllData.fontSize + 'px',
                color: this.props.pAllData.color,
                fontWeight: (this.props.pAllData.isBold == true
                    ? 'bold'
                    : 'normal')
            }
            divStyleTxt = {
                fontSize: this.props.pAllData.fontSizeTxt + 'px',
                color: this.props.pAllData.colorTxt,
                fontWeight: (this.props.pAllData.isBoldTxt == true
                    ? 'bold'
                    : 'normal')
            }
        }

        const components = {
            HorizontalSlider: HorizontalSlider,
            VerticalTimer: VerticalTimer
        };
        var tempDatesObj = {
            endDate: dataProps.endDate,
            pTimezoneOffset: dataProps.pTimezoneOffset,
            endHour: dataProps.endHour,
            endMinute: dataProps.endMinute
        };
        var numberValues = mathCountDown.mathFunc(tempDatesObj);
        var timerNumbers = {};
        if (!numberValues) {
            timerNumbers = false;

        } else {

            timerNumbers = {
                Years: numberValues.Years,
                Months: numberValues.Months,
                Weeks: numberValues.Weeks,
                Days: numberValues.Days,
                Hours: numberValues.Hours,
                Minutes: numberValues.Minutes,
                Seconds: numberValues.Seconds,
                Styles: divStyle
            }
        }

        const timerCustomTxt = {
            Years: dataProps.customTxtYears,
            Months: dataProps.customTxtMonths,
            Weeks: dataProps.customTxtWeeks,
            Days: dataProps.customTxtDays,
            Hours: dataProps.customTxtHours,
            Minutes: dataProps.customTxtMinutes,
            Seconds: dataProps.customTxtSeconds,
            EndedTxt: dataProps.customTxtEndedTxt,
            Styles: divStyleTxt
        }
        const DynamicComponentName = components[this.state.timerStyle];
        return (<DynamicComponentName numbers={timerNumbers} customTxt={timerCustomTxt}/>);
    }
    render() {
        return (
            <div className={'containerPreview '+this.props.livePreviewOnly}>
                {this.dinamicComponent()}
            </div>
        );
    }
}
