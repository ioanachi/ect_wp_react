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
      timezoneOffset: -43200000,
      selectedH: 0,
      selectedM: 0,
      utcTz: 'Etc/GMT+12',
      timeFormat: 'D then H:M:S'
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

  render() {
    const {selectedDay, isDisabled} = this.state;
    return (<div className="ContainerMain">
      <LivePreview pName={this.state.naMeP} pDate={this.state.selectedDay} pFont={this.state.fontSizeP} pColor={this.state.pColor} pBold={this.state.ectIsBoldP} pTimezoneOffset={this.state.timezoneOffset} pHour={this.state.selectedH} pMinutes={this.state.selectedM}
       pFormat={this.state.timeFormat}/>
      <table className="tableStyles">
        <tbody>
          <tr>
          <td className="componentContainer">
            <label htmlFor="datePicker">End Date</label>
          </td>
          <td className="componentContainer"><EndDate callbackChildProp={this.returnChildDate}/>
          </td>
          <td className="componentContainer">
            <label >Time Format</label>
          </td>
          <td><TimeFormat pTimeFormat={this.state.formatType} callBackSelectFormat={this.returnFormat}/></td>
            <td className="componentContainer">
              <label htmlFor="username">Name</label>
            </td>
            <td className="componentContainer">
              <UserName NameParent={this.onNameSubmit}/>
            </td>


          </tr>
          <tr>
          <td className="componentContainer">
            <label htmlFor="datePicker">End Time</label>
          </td>
          <td className="componentContainer"><EndTime TimeEnd={this.returnChildTime}/>
          </td>
            <td className="componentContainer">
              <label>Color</label>
            </td>
            <td><PickColor callbackChildPropColor={this.returnChildColor}/></td>

            <td className="componentContainer">
              <label htmlFor="fontInput">Font Size</label>
            </td>
            <td>
              <FontSize pFont={this.state.fontSizeP} aaa={this.onFontSubmit}/></td>

            <td className="componentContainer">
              <label>Select to make text Bold</label>
            </td>
            <td>
              <Bold callbackChildPropB={this.isBold}/></td>
          </tr>
          <tr>
            <td className="componentContainer">
              <label>Timezone</label>
            </td>
            <td className="timezones">
              <Timezones callbackChildPropT={this.returnTimezone}/></td>


          </tr>
        </tbody>
      </table>

      <EctShortcode pName={this.state.naMeP} pTimeFormat={this.state.timeFormat} pDate={this.state.selectedDay} pFont={this.state.fontSizeP} pColor={this.state.pColor} pBold={this.state.ectIsBoldP} pUtcTz={this.state.utcTz} pHour={this.state.selectedH} pMinutes={this.state.selectedM}
       pFormat={this.state.timeFormat}/>
    </div>);
  }
};

ReactDOM.render(<MainContainer/>, document.getElementById('ectPopupContent'));
