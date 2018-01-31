import React from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

export class EndDate extends React.Component {
  constructor(props) {
    super(props);
    this.handleDayChange = this.handleDayChange.bind(this);

  }
  handleDayChange(date) {
    const Submitx = this.props.callbackChildProp;
    var tempDate = new Date(date.toString());
    var mm = tempDate.getMonth()+1;
    var dd = tempDate.getDay();
    var yyyy = tempDate.getFullYear();

    var fiunalDateString = mm+'/'+dd+'/'+yyyy;
    Submitx(fiunalDateString);
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
