import React from 'react';
import ReactDOM from 'react-dom';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import {UserName} from './Components/nameInput';
import {NumbersFontSize} from './Components/fontSize';
import {EctShortcode} from './Components/ectShortcode';
import {EndDate} from './Components/endDate.js';
import {CustomText} from './Components/customText.js';

import MomentLocaleUtils, {formatDate, parseDate} from 'react-day-picker/moment';
import PickColor from './Components/colorReactPicker.js';
import {Bold} from './Components/bold.js';
import {Timezones} from './Components/timezonePicker.js';
import {LivePreview} from './Components/livePreview.js';
import {EndTime} from './Components/endTime.js';
import {TimeFormat} from './Components/timeFormat.js';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';

class MainContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      endDate: '',
      isDisabled: false,
      endDate: '',
      naMeP: '',
      fontSizeP: 42,
      pColor: '#000',
      pIsBold: false,
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
      secondsFormat: 'Seconds'
    };
    this.onFontSubmit = this.onFontSubmit.bind(this);
    this.returnChildDate = this.returnChildDate.bind(this);
    this.onNameSubmit = this.onNameSubmit.bind(this);
    this.returnChildColor = this.returnChildColor.bind(this);
    this.isBold = this.isBold.bind(this);
    this.returnTimezone = this.returnTimezone.bind(this);
    this.returnChildTime = this.returnChildTime.bind(this);
    this.returnFormat = this.returnFormat.bind(this);
    this.returnTextFormat = this.returnTextFormat.bind(this);

  }

  isBold(childVal) {
    this.setState({pIsBold: childVal})
  };
  onFontSubmit(childVal) {
    this.setState({fontSizeP: childVal});
  };
  onNameSubmit(childVal) {
    this.setState({naMeP: childVal});
  }
  returnChildDate(childVal) {
    this.setState({endDate: childVal});
  }
  returnChildColor(childVal) {
    this.setState({pColor: childVal})
  }
  returnTimezone(timezoneChosen, utcTz) {
    this.setState({timezoneOffset: timezoneChosen, utcTz: utcTz});
  }
  returnChildTime(endHour, endMinute) {
    this.setState({endHour: endHour});
    this.setState({endMinute: endMinute});
  }
  returnFormat(formatType) {
    this.setState({timeFormat: formatType});
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
    var labelPreview = (<label key="labelLivePreview" htmlFor="tableStyles" className="containerLabels">
      Preview</label>)
    const livePreviewOnly = (<LivePreview key="LivePreview" pYears={this.state.yearsFormat} pMonths={this.state.monthsFormat} pWeeks={this.state.weeksFormat} pDays={this.state.daysFormat} pHoursFormat={this.state.hoursFormat} pMinutesFormat={this.state.minutesFormat} pSecondsFormat={this.state.secondsFormat}
     parentID={this.props.parentID} pName={this.state.naMeP} pDate={this.state.endDate} pFont={this.state.fontSizeP} pColor={this.state.pColor} pIsBold={this.state.pIsBold} pTimezoneOffset={this.state.timezoneOffset} pHourSelected={this.state.endHour} pMinutesSelected={this.state.endMinute} pFormat={this.state.timeFormat}/>);

    // the rest of the data
    var configurationComponentsJSX = (<div key="configurationComponentsJSX">

      <label htmlFor="tableStyles" className="containerLabels">Configuration</label>
      <Tabs>
        <TabList>
          <Tab>General</Tab>
          <Tab>Styles</Tab>
          <Tab>Custom Text</Tab>
        </TabList>

        <TabPanel>
          <table className="tableStyles">
            <tbody>
              <tr>
                <td className="componentContainer">
                  <label htmlFor="datePicker">End Date</label>
                </td>
                <td className="componentContainer"><EndDate callbackChildProp={this.returnChildDate} pEndDate={this.state.endDate}/>
                </td>
              </tr>
              <tr>

                <td className="componentContainer">
                  <label htmlFor="datePicker">End Time</label>
                </td>
                <td className="componentContainer"><EndTime TimeEnd={this.returnChildTime} pEndHour={this.state.endHour} pEndMinute={this.state.endMinute}/>
                </td>
              </tr>
              <tr>
                <td className="componentContainer">
                  <label>Timezone</label>
                </td>
                <td className="timezones">
                  <Timezones pTimezoneOffset={this.state.timezoneOffset} callbackChildPropT={this.returnTimezone}/></td>

              </tr>
              <tr>

                <td className="componentContainer">
                  <label >Time Format</label>
                </td>
                <td><TimeFormat pTimeFormat={this.state.timeFormat} callBackSelectFormat={this.returnFormat}/></td>
              </tr>

            </tbody>
          </table>
        </TabPanel>
        <TabPanel>
          <table className="tableStyles">
            <tbody>
              <tr>

                <td className="componentContainer">
                  <label htmlFor="username">Name</label>
                </td>
                <td className="componentContainer">
                  <UserName NameParent={this.onNameSubmit} nameValue={this.state.naMeP}/>
                </td>
              </tr>
              <tr>

                <td className="componentContainer">
                  <label>Color</label>
                </td>
                <td><PickColor callbackChildPropColor={this.returnChildColor} pColor={this.state.pColor}/></td>
              </tr>
              <tr>
                <td className="componentContainer">
                  <label htmlFor="fontInput">Numbers Font Size</label>
                </td>
                <td className="componentContainer">
                  <NumbersFontSize pFont={this.state.fontSizeP} aaa={this.onFontSubmit}/></td>
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
          <CustomText pYears={this.state.yearsFormat} pMonths={this.state.monthsFormat} pWeeks={this.state.weeksFormat} pDays={this.state.daysFormat} pHoursFormat={this.state.hoursFormat} pMinutesFormat={this.state.minutesFormat} pSecondsFormat={this.state.secondsFormat} callbackChildPropFormatText={this.returnTextFormat}/>
        </TabPanel>
      </Tabs>

      <EctShortcode pYears={this.state.yearsFormat} pMonths={this.state.monthsFormat} pWeeks={this.state.weeksFormat} pDays={this.state.daysFormat} pHoursFormat={this.state.hoursFormat} pMinutesFormat={this.state.minutesFormat} pSecondsFormat={this.state.secondsFormat} pName={this.state.naMeP}
       pTimeFormat={this.state.timeFormat} pDate={this.state.endDate} pFont={this.state.fontSizeP} pColor={this.state.pColor} chooseBold={this.state.pIsBold} pUtcTz={this.state.utcTz} pTimezoneOffset={this.state.timezoneOffset} pEndHour={this.state.endHour} pEndMinute={this.state.endMinute} pFormat={this.state.timeFormat}/>
    </div>);
    if (!isOnlyPreview) {
      returnAllData.push(labelPreview);
    };
    returnAllData.push(livePreviewOnly);
    if (!isOnlyPreview) {
      returnAllData.push(configurationComponentsJSX);
    }
    return returnAllData;
  }
  render() {
    const {endDate, isDisabled} = this.state; //from the day picker
    //only the live preview section

    var renderReturn = (<div className="ContainerMain">
      {this.showOnlyLivePreview()}
    </div>);
    return renderReturn;
  }
};
ectProperties.forEach(function(eachTimer) {
  for (var key in eachTimer) {
    // ectProperties.forEach(function(item){
    ReactDOM.render(<MainContainer parentID={key}/>, document.getElementById(key));
  };
})
