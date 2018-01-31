import React from 'react';
import ReactDOM from 'react-dom';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import {UserName} from './nameInput';
import {FontSize} from './fontSize';
import {Styles} from './styles';
import {Previews} from './prewieW';
import {EndDate} from './dayPicker.js';
import MomentLocaleUtils, {formatDate, parseDate} from 'react-day-picker/moment';
// import 'moment/locale/it';

class MainContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleDayChange = this.handleDayChange.bind(this);
    this.state = {
      selectedDay: undefined,
      isDisabled: false,
      endDate: '',
      naMeP: '',
      fontSizeP: ''
    };
    this.onFontSubmit = this.onFontSubmit.bind(this);
    this.onNameSubmit = this.onNameSubmit.bind(this);

  }
  onFontSubmit(fontSize) {
    this.setState({fontSizeP: fontSize});
  };
  onNameSubmit(naMe) {
    this.setState({naMeP: naMe});
  }
  handleDayChange(selectedDay, modifiers) {
    this.setState({
      selectedDay,
      isDisabled: modifiers.disabled === true
    });
  }
  render() {
    const {selectedDay, isDisabled} = this.state;
    return (<div className="ContainerMain">
      <UserName NameParent={this.onNameSubmit}/>
      
      <EndDate NameParent={this.onDatePick}/>
      <FontSize aaa={this.onFontSubmit}/>

      <button type="submit" className="btn btn-success" name="button">Insert</button>
      <Previews name={this.state.naMeP} date={this.state.selectedDay}/>
    </div>);
  }
};

ReactDOM.render(<MainContainer/>, document.getElementById('ectPopupContent'));
