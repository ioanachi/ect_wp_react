import React from 'react';
import ReactDOM from 'react-dom';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import {UserName} from './nameInput';
import {FontSize} from './fontSize';
import {Styles} from './styles';
import {Previews} from './prewieW';
import {EndDate} from './dayPicker.js';
import MomentLocaleUtils, {formatDate, parseDate} from 'react-day-picker/moment';
import PickColor from './colorReactPicker.js';

// import 'moment/locale/it';

class MainContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDay: undefined,
      isDisabled: false,
      endDate: '',
      naMeP: '',
      fontSizeP: '',
      pColor:''
    };
    this.onFontSubmit = this.onFontSubmit.bind(this);
    this.returnChildDate = this.returnChildDate.bind(this);
    this.onNameSubmit = this.onNameSubmit.bind(this);
    this.returnChildColor = this.returnChildColor.bind(this);

  }
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
  render() {
    const {selectedDay, isDisabled} = this.state;
    return (<div className="ContainerMain">
      <UserName NameParent={this.onNameSubmit}/>
      <EndDate callbackChildProp={this.returnChildDate}/>
      <PickColor callbackChildPropColor = {this.returnChildColor}/>
      <FontSize aaa={this.onFontSubmit}/>
      <Previews pName={this.state.naMeP} pDate={this.state.selectedDay} pFont={this.state.fontSizeP} pColor={this.state.pColor}/>
    </div>);
  }
};

ReactDOM.render(<MainContainer/>, document.getElementById('ectPopupContent'));
