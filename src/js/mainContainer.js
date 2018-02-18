import React from 'react';
import ReactDOM from 'react-dom';
import { UserName } from './Components/nameInput';
import { EctSlider } from './Components/fontSize';
import { EctShortcode } from './Components/ectShortcode';
import { EndDate } from './Components/endDate.js';
import { CustomText } from './Components/customText.js';
import PickColor from './Components/colorReactPicker.js';
import { Bold } from './Components/bold.js';
import { Timezones } from './Components/timezonePicker.js';
import { LivePreview } from './Components/livePreview.js';
import { TimeFormat } from './Components/timeFormat.js';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import moment from 'moment';

class MainContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            endDate: moment(),
            isDisabled: false,
            naMeP: '',
            fontSize: 42,
            fontSizeTxt: 42,
            pColor: '#000',
            pColorTxt: '#000',
            pIsBold: false,
            pIsBoldTxt: false,
            timezoneOffset: -(new Date().getTimezoneOffset() * 60000),
            endHour: 0,
            endMinute: 0,
            utcTz: 'Etc/GMT+12',
            timeFormat: 'Y2S',
            yearsFormat: 'Years',
            monthsFormat: 'Months',
            weeksFormat: 'Weeks',
            daysFormat: 'Days',
            hoursFormat: 'Hours',
            minutesFormat: 'Minutes',
            secondsFormat: 'Seconds',
            customTxtEndedTxt: 'Timer Ended',
            firstView: true
        };
        this.onFontSubmit = this.onFontSubmit.bind(this);
        this.onFontSubmitTxt = this.onFontSubmitTxt.bind(this);
        this.returnChildDate = this.returnChildDate.bind(this);
        this.onNameSubmit = this.onNameSubmit.bind(this);
        this.returnChildColor = this.returnChildColor.bind(this);
        this.returnChildColorTxt = this.returnChildColorTxt.bind(this);
        this.isBold = this.isBold.bind(this);
        this.returnTimezone = this.returnTimezone.bind(this);
        this.returnFormat = this.returnFormat.bind(this);
        this.returnTextFormat = this.returnTextFormat.bind(this);
        this.isBoldTxt = this.isBoldTxt.bind(this);
    }

    isBold(childVal) {
        this.setState({ pIsBold: childVal })
    };

    isBoldTxt(childVal) {
        this.setState({ pIsBoldTxt: childVal })
    }
    onFontSubmit(childVal) {
        this.setState({ fontSize: childVal });
    }
    onFontSubmitTxt(childVal) {
        this.setState({ fontSizeTxt: childVal });
    }
    onNameSubmit(childVal) {
        this.setState({ naMeP: childVal });
    }
    returnChildDate(endDateChild, endHourChild, endMinuteChild, firstView) {

        this.setState({ endDate: moment(endDateChild), endHour: endHourChild, endMinute: endMinuteChild, firstView: firstView });
        this.state.firstView = firstView;
    }
    returnChildColor(childVal) {
        this.setState({ pColor: childVal })
    };
    returnChildColorTxt(childVal) {
        this.setState({ pColorTxt: childVal })
    };
    returnChildColorText(textColor) {
        this.setState({ pColorTxt: textColor })
    }
    returnTimezone(timezoneChosen, utcTz) {
        this.setState({ timezoneOffset: timezoneChosen, utcTz: utcTz });
    }

    returnFormat(formatType) {
        this.setState({ timeFormat: formatType });
    };
    returnTextFormat(Y, M, W, D, H, Minute, S) {
        this.setState({
            yearsFormat: Y,
            monthsFormat: M,
            weeksFormat: W,
            daysFormat: D,
            hoursFormat: H,
            minutesFormat: Minute,
            secondsFormat: S
        });
    };
    showOnlyLivePreview() {
        var returnAllData = [];
        var pData = {
            Years: this.state.yearsFormat,
            Months: this.state.monthsFormat,
            Weeks: this.state.weeksFormat,
            Days: this.state.daysFormat,
            Hours: this.state.hoursFormat,
            Minutes: this.state.minutesFormat,
            Seconds: this.state.secondsFormat,
            parentID: this.props.parentID,
            naMeP: this.state.naMeP,
            endDate: this.state.endDate,
            fontSize: this.state.fontSize,
            fontSizeTxt: this.state.fontSizeTxt,
            color: this.state.pColor,
            colorTxt: this.state.pColorTxt,
            isBold: this.state.pIsBold,
            isBoldTxt: this.state.pIsBoldTxt,
            timezoneOffset: this.state.timezoneOffset,
            endHour: this.state.endHour,
            endMinute: this.state.endMinute,
            timeFormat: this.state.timeFormat,
            customTxtEndedTxt: this.state.customTxtEndedTxt
        };
        var labelPreview = (
            <label key="labelLivePreview" htmlFor="tableStyles" className="containerLabels livePreviewBox">
                Preview</label>
        )
        const livePreviewOnly = (<LivePreview className="livePrewiewOnly" key="LivePreview" pAllData={pData} />);

        // the rest of the data
        var configurationComponentsJSX = (
            <div key="configurationComponentsJSX">

                <label htmlFor="tableStyles" className="containerLabels">Configuration</label>
                <Tabs className="tableStyles">
                    <TabList>
                        <Tab>General</Tab>
                        <Tab>Styles</Tab>
                        <Tab>Custom Text</Tab>
                    </TabList>

                    <TabPanel>
                        <table className="configTable">
                            <tbody>
                                <tr>
                                    <td className="componentContainer">
                                        <label htmlFor="datePicker">End Date</label>
                                    </td>
                                    <td className="componentContainer">
                                        <EndDate
                                            callbackChildProp={this.returnChildDate}
                                            pEndDate={this.state.endDate} />
                                    </td>
                                </tr>

                                <tr>
                                    <td className="componentContainer">
                                        <label>Timezone</label>
                                    </td>
                                    <td className="timezones">
                                        <Timezones
                                            pTimezoneOffset={this.state.timezoneOffset}
                                            callbackChildPropT={this.returnTimezone} /></td>
                                </tr>
                                <tr>
                                    <td className="componentContainer">
                                        <label htmlFor="username">Name</label>
                                    </td>
                                    <td className="componentContainer">
                                        <UserName NameParent={this.onNameSubmit} nameValue={this.state.naMeP} />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </TabPanel>
                    <TabPanel>
                        <table className="configTable">
                            <tbody>
                                <tr>
                                    <td className="componentContainer">
                                        <label>Color</label>
                                    </td>
                                    <td><PickColor
                                        callbackChildPropColor={this.returnChildColor}
                                        pColor={this.state.pColor} /></td>
                                </tr>
                                <tr>
                                    <td className="componentContainer">
                                        <label htmlFor="fontInput">Numbers Font Size</label>
                                    </td>
                                    <td className="componentContainer">
                                        <EctSlider
                                            pFontSize={this.state.fontSize}
                                            pFontSizeCallback={this.onFontSubmit} /></td>
                                </tr>
                                <tr>
                                    <td className="componentContainer">
                                        <label>Select to make text Bold</label>
                                    </td>
                                    <td className="componentContainer">
                                        <Bold callbackChildPropB={this.isBold} pIsBold={this.state.pIsBold} /></td>
                                </tr>
                            </tbody>
                        </table>
                    </TabPanel>
                    <TabPanel>
                        <CustomText
                            pYears={this.state.yearsFormat}
                            pMonths={this.state.monthsFormat}
                            pWeeks={this.state.weeksFormat}
                            pDays={this.state.daysFormat}
                            pHoursFormat={this.state.hoursFormat}
                            pMinutesFormat={this.state.minutesFormat}
                            pSecondsFormat={this.state.secondsFormat}
                            callbackChildPropFormatText={this.returnTextFormat} />
                        <table className="configTable">
                            <tbody>
                                <tr>
                                    <td className="componentContainer">
                                        <label>Custom Text Color</label>
                                    </td>
                                    <td className="componentContainer"><PickColor
                                        callbackChildPropColor={this.returnChildColorTxt}
                                        pColor={this.state.pColorTxt} /></td>
                                </tr>
                                <tr>
                                    <td className="componentContainer">
                                        <label>Custom Text Size</label>
                                    </td>
                                    <td className="componentContainer"><EctSlider
                                        pFontSize={this.state.fontSizeTxt}
                                        pFontSizeCallback={this.onFontSubmitTxt} /></td>
                                </tr>
                                <tr>
                                    <td className="componentContainer">
                                        <label>Select to make text Bold</label>
                                    </td>
                                    <td className="componentContainer">
                                        <Bold callbackChildPropB={this.isBoldTxt} pIsBold={this.state.pIsBoldTxt} /></td>
                                </tr>
                            </tbody>
                        </table>
                    </TabPanel>
                </Tabs>

                <EctShortcode
                    pYears={this.state.yearsFormat}
                    pMonths={this.state.monthsFormat}
                    pWeeks={this.state.weeksFormat}
                    pDays={this.state.daysFormat}
                    pHoursFormat={this.state.hoursFormat}
                    pMinutesFormat={this.state.minutesFormat}
                    pSecondsFormat={this.state.secondsFormat}
                    pName={this.state.naMeP}
                    pTimeFormat={this.state.timeFormat}
                    endDate={this.state.endDate}
                    pFont={this.state.fontSize}
                    pColor={this.state.pColor}
                    chooseBold={this.state.pIsBold}
                    chooseBoldTxt={this.state.pIsBoldTxt}
                    pUtcTz={this.state.utcTz}
                    pTimezoneOffset={this.state.timezoneOffset}
                    pEndHour={this.state.endHour}
                    pEndMinute={this.state.endMinute}
                    pFormat={this.state.timeFormat} />

                <button
                    type="button"
                    id="ectInsertSC"
                    className="insertButton button button-primary">Insert Shortcode</button>
                <button type="button" className="ectClosePopupButton" name="button">X Close</button>
            </div>
        );
        if (!isOnlyPreview) {
            returnAllData.push(labelPreview);
        };
        returnAllData.push(livePreviewOnly);
        if (!isOnlyPreview) {
            returnAllData.push(configurationComponentsJSX);
        }
        if (this.state.firstView && !devMode) {
            returnAllData = (
                <div className="endDateShow">
                    <div className="endDateShowSmallContainer">
                        <div>
                            <label htmlFor="datePicker">Select END Date</label>
                            <EndDate
                                className="endDateDiv"
                                callbackChildProp={this.returnChildDate}
                                pEndDate={this.state.endDate} />
                        </div>
                    </div>
                </div>
            );
        }
        return returnAllData;
    }
    render() {
        const { endDate, isDisabled } = this.state; //from the day picker
        //only the live preview section

        var renderReturn = (
            <div className="ContainerMain onlyPrewiew">
                {this.showOnlyLivePreview()}
            </div>
        );
        return renderReturn;
    }
};
ectProperties.forEach(function (eachTimer) {
    for (var key in eachTimer) {
        ReactDOM.render(
            <MainContainer id="ectInsertSC" parentID={key} />, document.getElementById(key));
    }
});
