import React from 'react';
import ReactDOM from 'react-dom';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import {UserName} from './Components/nameInput';
import {FontSize} from './Components/fontSize';
import {EctShortcode} from './Components/ectShortcode';
import {EndDate} from './Components/dayPicker.js';
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
      selectedDay: '',
      isDisabled: false,
      endDate: '',
      naMeP: '',
      fontSizeP: 42,
      pColor: '',
      ectIsBoldP: false,
      timezoneOffset: -(new Date().getTimezoneOffset() * 60000),
      selectedH: 0,
      selectedM: 0,
      utcTz: 'Etc/GMT+12',
      timeFormat: 'Y2S'
    };
    this.onFontSubmit = this.onFontSubmit.bind(this);
    this.returnChildDate = this.returnChildDate.bind(this);
    this.onNameSubmit = this.onNameSubmit.bind(this);
    this.returnChildColor = this.returnChildColor.bind(this);
    this.isBold = this.isBold.bind(this);
    this.returnTimezone = this.returnTimezone.bind(this);
    this.returnChildTime = this.returnChildTime.bind(this);
    this.returnFormat = this.returnFormat.bind(this);
  }

  isBold(isBoldC) {
    this.setState({ectIsBoldP: isBoldC})
  };
  onFontSubmit(fontSize) {
    this.setState({fontSizeP: fontSize});
  };
  onNameSubmit(naMe) {
    this.setState({naMeP: naMe});
  }
  returnChildDate(selectedDay) {
    this.setState({selectedDay: selectedDay});
  }
  returnChildColor(selectedColorChild) {
    this.setState({pColor: selectedColorChild})
  }
  returnTimezone(timezoneChosen, utcTz) {
    this.setState({timezoneOffset: timezoneChosen, utcTz: utcTz});
  }
  returnChildTime(selectedHour, selectedMinutes) {
    this.setState({selectedH: selectedHour});
    this.setState({selectedM: selectedMinutes});
  }
  returnFormat(formatType) {
    this.setState({timeFormat: formatType});
  }
  showOnlyLivePreview() {
    var returnAllData = [];
    var labelPreview = (<label key="labelLivePreview" htmlFor="tableStyles" className="containerLabels">
      Preview</label>)
    const livePreviewOnly = (<LivePreview key="LivePreview" parentID={this.props.parentID} pName={this.state.naMeP} pDate={this.state.selectedDay} pFont={this.state.fontSizeP} pColor={this.state.pColor} pBold={this.state.ectIsBoldP} pTimezoneOffset={this.state.timezoneOffset} pHour={this.state.selectedH} pMinutes={this.state.selectedM} pFormat={this.state.timeFormat}/>);
    // the rest of the data
    var configurationComponentsJSX = (<div key="configurationComponentsJSX">

      <label htmlFor="tableStyles" className="containerLabels">Configuration</label>
      <Tabs>
        <TabList>
          <Tab>General</Tab>
          <Tab>Styles</Tab>
        </TabList>

        <TabPanel>
          <table className="tableStyles">
            <tbody>
              <tr>
                <td className="componentContainer">
                  <label htmlFor="datePicker">End Date</label>
                </td>
                <td className="componentContainer"><EndDate callbackChildProp={this.returnChildDate}/>
                </td>
              </tr>
              <tr>

                <td className="componentContainer">
                  <label htmlFor="datePicker">End Time</label>
                </td>
                <td className="componentContainer"><EndTime TimeEnd={this.returnChildTime}/>
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
                  <UserName NameParent={this.onNameSubmit}/>
                </td>
              </tr>
              <tr>

                <td className="componentContainer">
                  <label>Color</label>
                </td>
                <td><PickColor callbackChildPropColor={this.returnChildColor}/></td>
              </tr>
              <tr>
                <td className="componentContainer">
                  <label htmlFor="fontInput">Font Size</label>
                </td>
                <td className="componentContainer">
                  <FontSize pFont={this.state.fontSizeP} aaa={this.onFontSubmit}/></td>
              </tr>
              <tr>
                <td className="componentContainer">
                  <label>Select to make text Bold</label>
                </td>
                <td className="componentContainer">
                  <Bold callbackChildPropB={this.isBold}/></td>
              </tr>
              <tr></tr>
            </tbody>
          </table>
        </TabPanel>
      </Tabs>

      <EctShortcode pName={this.state.naMeP} pTimeFormat={this.state.timeFormat} pDate={this.state.selectedDay} pFont={this.state.fontSizeP} pColor={this.state.pColor} pBold={this.state.ectIsBoldP} pUtcTz={this.state.utcTz} pTimezoneOffset={this.state.timezoneOffset} pHour={this.state.selectedH} pMinutes={this.state.selectedM} pFormat={this.state.timeFormat}/>
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
    const {selectedDay, isDisabled} = this.state; //from the day picker
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
