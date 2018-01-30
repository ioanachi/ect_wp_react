import React from 'react';
import ReactDOM from 'react-dom';
import {UserName} from './nameInput';
import {FontSize} from './fontSize';
import {Styles} from './styles';
<<<<<<< HEAD
import {EndDate} from './dayPicker.js';
=======
import {Previews} from './prewieW';
import MomentLocaleUtils, {
  formatDate,
  parseDate,
} from 'react-day-picker/moment';
// import 'moment/locale/it';
>>>>>>> cc9a8c04bcea916d9e8df73ce682961175396aac

class MainContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDayP: '',
      isDisabled: false,
      naMeP: '',
      fontSizeP: ''
    };
    this.onFontSubmit = this.onFontSubmit.bind(this);
    this.onNameSubmit = this.onNameSubmit.bind(this);

  }
  onFontSubmit(fontSize) {
    this.setState({fontSizeP: fontSize});
  };
  onNameSubmit(naMe){
    this.setState({naMeP: naMe});
  }
  onDatePick(selectedDay){
    this.setState({selectedDayP: selectedDay});
  }

  render() {

    return (<div className="ContainerMain">
      <UserName NameParent={this.onNameSubmit}/>
      <EndDate dateEnd={this.onDatePick}/>
      <FontSize aaa={this.onFontSubmit}/>
      <button type="submit" className="btn btn-success" name="button">Insert</button>
    </div>);
  }
};

ReactDOM.render(<MainContainer/>, document.getElementById('ectPopupContent'));
