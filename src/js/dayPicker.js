import React from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

export class EndDate extends React.Component {
  constructor(props) {
    super(props);
    this.handleDayChange = this.handleDayChange.bind(this);

  }
  handleDayChange(day) {
    const Submitx = this.props.callbackChildProp;
    Submitx(day.toString());
  }
  render() {
    return (
      <div className="componentContainer">
        <label htmlFor="fontInput"> End Date</label>
        <DayPickerInput onDayChange={this.handleDayChange}/>
      </div>
    );
  }
}
