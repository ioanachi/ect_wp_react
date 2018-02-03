import React from 'react';
import ReactDOM from 'react-dom';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import {UserName} from './Components/nameInput';
import {FontSize} from './Components/fontSize';
import {Styles} from './Components/styles';
import {Previews} from './Components/prewieW';
import {EndDate} from './Components/dayPicker.js';
import MomentLocaleUtils, {formatDate, parseDate} from 'react-day-picker/moment';
import PickColor from './Components/colorReactPicker.js';
import {Bold} from './Components/bold.js';
import {Timezones} from './Components/timezonePicker.js';
// import 'moment/locale/it';

class MainContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDay: '',
      isDisabled: false,
      endDate: '',
      naMeP: '',
      fontSizeP: '',
      pColor:'',
      ectIsBoldP:false,
      timezonep:''
    };
    this.onFontSubmit = this.onFontSubmit.bind(this);
    this.returnChildDate = this.returnChildDate.bind(this);
    this.onNameSubmit = this.onNameSubmit.bind(this);
    this.returnChildColor = this.returnChildColor.bind(this);
    this.isBold = this.isBold.bind(this);
    this.returnTimezone = this.returnTimezone.bind(this);
  }

  isBold(isBoldC){
    this.setState({ectIsBoldP:isBoldC})

  };
  onFontSubmit(fontSize) {
    this.setState({fontSizeP: fontSize});
  };
  onNameSubmit(naMe) {
    this.setState({naMeP: naMe});
  }
  returnChildDate(selectedDay) {
    this.setState({
      selectedDay: selectedDay
    });
  }
  returnChildColor(selectedColorChild){
    this.setState({pColor:selectedColorChild})
  }
returnTimezone (timezoneChosen){
  console.log(timezoneChosen);
  this.setState({timezonep:timezoneChosen})

}
  render() {
    const {selectedDay, isDisabled} = this.state;
    return (<div className="ContainerMain">
      <UserName NameParent={this.onNameSubmit}/>
      <EndDate callbackChildProp={this.returnChildDate}/>
      <PickColor callbackChildPropColor = {this.returnChildColor}/>
      <FontSize aaa={this.onFontSubmit}/>
      <Bold callbackChildPropB={this.isBold}/>
      <Timezones callbackChildPropT={this.returnTimezone}/>
      <Previews pName={this.state.naMeP} pDate={this.state.selectedDay} pFont={this.state.fontSizeP} pColor={this.state.pColor} pBold={this.state.ectIsBoldP} pTimezone={this.state.timezonep}/>
    </div>);
  }
};

ReactDOM.render(<MainContainer/>, document.getElementById('ectPopupContent'));
