import React from 'react';
import ReactDOM from 'react-dom';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import {UserName} from './nameInput';
import {FontSize} from './fontSize';
import {Styles} from './styles';
import {Previews} from './prewieW';


class MainContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleDayChange = this.handleDayChange.bind(this);
    this.state = {
      selectedDay: undefined,
      isDisabled: false
    };
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
      <UserName/>
      <p className="dayPicker">
        {!selectedDay && 'End Date'}
        {selectedDay && isDisabled && '😡 This day is disabled'}
        {selectedDay && !isDisabled}
      </p>
      <DayPickerInput value={selectedDay} classonDayChange={this.handleDayChange} dayPickerProps={{
          selectedDays: selectedDay,
          disabledDays: {
            daysOfWeek: [0, 6]
          }
        }}/>
      <FontSize />
      <Styles />
      <button type="button" className="btnInsert" name="button">Insert</button>

    </div>);
  }
};

ReactDOM.render(<MainContainer/>, document.getElementById('ect'));
