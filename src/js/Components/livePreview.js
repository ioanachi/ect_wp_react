import React from 'react';
import ReactDOM from 'react-dom';
import mathCountDown from './mathCountDown';
import {
    HorizontalTimer,
    VerticalTimer,
    CalendarTimer,
    SeparateTimer
} from '../layouts/pack1';
export class LivePreview extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                timeout: [],
                layoutType: this.props.pAllData.layoutType
            };
            const tempClass = window[this.state.layoutType + '2'];

        };

        dinamicComponent() {
            var tempTimeout = this.state.timeout;
            if (!tempTimeout[0]) {
                tempTimeout.push(setTimeout(() => {

                    this.setState({
                        timeout: []
                    });
                    this.setState({
                        layoutType: this.props.pAllData.layoutType
                    }); //new layout type
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
                timeout: [],
                endDate: this.props.pAllData.endDate,
                timezoneOffset: this.props.pAllData.timezoneOffset,
                endHour: this.props.pAllData.endHour,
                endMinute: this.props.pAllData.endMinute,
                fontSize: this.props.pAllData.fontSize,
                fontSizeTxt: this.props.pAllData.fontSizeTxt,
                isBold: this.props.pAllData.isBold,
                isBoldTxt: this.props.pAllData.isBoldTxt,
                yearsTxt: this.props.pAllData.Years,
                monthsTxt: this.props.pAllData.Months,
                weeksTxt: this.props.pAllData.Weeks,
                daysTxt: this.props.pAllData.Days,
                hoursTxt: this.props.pAllData.Hours,
                minutesTxt: this.props.pAllData.Minutes,
                secondsTxt: this.props.pAllData.Seconds,
                customTxtEndedTxt: this.props.pAllData.customEndedTxt,
                pFormat: this.props.pAllData.timeFormat,
                layoutType: this.props.pAllData.layoutType

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
                    timezoneOffset: propertiesObj.timezoneOffset,
                    endHour: propertiesObj.endHour,
                    endMinute: propertiesObj.endMinute,
                    pFormat: propertiesObj.pFormat,
                    fontSize: propertiesObj.fontSize,
                    fontSizeTxt: propertiesObj.fontSizeTxt,
                    color: propertiesObj.color,
                    colorTxt: propertiesObj.colorTxt,
                    isBold: propertiesObj.isBold,
                    isBoldTxt: propertiesObj.isBoldTxt,
                    yearsTxt: propertiesObj.yearsTxt,
                    monthsTxt: propertiesObj.monthsTxt,
                    weeksTxt: propertiesObj.weeksTxt,
                    daysTxt: propertiesObj.daysTxt,
                    hoursTxt: propertiesObj.hoursTxt,
                    minutesTxt: propertiesObj.minutesTxt,
                    secondsTxt: propertiesObj.secondsTxt,
                    customTxtEndedTxt: propertiesObj.customEndedTxt,
                    layoutType: propertiesObj.layoutType

                };
                divStyle = {
                    fontSize: dataProps.fontSize + 'px',
                    color: dataProps.color,
                    fontWeight: (dataProps.isBold == true ?
                        'bold' :
                        'normal')
                }
                divStyleTxt = {
                    fontSize: dataProps.fontSizeTxt + 'px',
                    color: dataProps.colorTxt,
                    fontWeight: (dataProps.isBoldTxt == true ?
                        'bold' :
                        'normal')
                };
            } else {

                divStyle = {
                    fontSize: this.props.pAllData.fontSize + 'px',
                    color: this.props.pAllData.color,
                    fontWeight: (this.props.pAllData.isBold == true ?
                        'bold' :
                        'normal')
                }
                divStyleTxt = {
                    fontSize: this.props.pAllData.fontSizeTxt + 'px',
                    color: this.props.pAllData.colorTxt,
                    fontWeight: (this.props.pAllData.isBoldTxt == true ?
                        'bold' :
                        'normal')
                }
            }
            // all the available layouts
            const components = {
                HorizontalTimer: HorizontalTimer,
                VerticalTimer: VerticalTimer,
                SeparateTimer: SeparateTimer,
                CalendarTimer: CalendarTimer
            };
            var tempDatesObj = {
                endDate: dataProps.endDate,
                timezoneOffset: dataProps.timezoneOffset,
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
                Years: dataProps.yearsTxt,
                Months: dataProps.monthsTxt,
                Weeks: dataProps.weeksTxt,
                Days: dataProps.daysTxt,
                Hours: dataProps.hoursTxt,
                Minutes: dataProps.minutesTxt,
                Seconds: dataProps.secondsTxt,
                EndedTxt: dataProps.customTxtEndedTxt,
                Styles: divStyleTxt
            }
            const DynamicComponentName = components[this.state.layoutType];
            return ( < DynamicComponentName numbers = {
                    timerNumbers
                }
                customTxt = {
                    timerCustomTxt
                }
                />);
            }
            render() {

                return ( <div className={'containerPreview ' + this.props.livePreviewOnly } > { this.dinamicComponent()} </div>);
            }
        }