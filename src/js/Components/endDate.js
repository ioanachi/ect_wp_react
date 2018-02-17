import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';


export class EndDate extends React.Component {
  constructor(props) {
    super(props);
    this.state = { startDate: moment() };

    this.handleChange = this.handleChange.bind(this);

  }
  handleChange(date) {
    this.setState({
      startDate: date
    });
  };

  render() {
    return (
      <div>
        <DatePicker placeholderText="Select a date"
          dateFormat="YYYY/MM/DD"
          selected={this.state.startDate}
          onChange={this.handleChange}
          showTimeSelect
          dateFormat="LLL" className="datePickerStyle"
          timeCaption="time"
          timeIntervals={15}
          timeFormat="HH:mm" 
          minTime={moment().hours(moment().hour()).minutes(moment().minutes())}
          maxTime={moment().hours(23).minutes(59)}
          minDate={moment()}
          maxDate={moment().add(1000, "years")}readonly/>
         

      </div>
    );
  }
}


//  <DayPickerInput format="M/D/YYY" formatDate={this.ectFormatDate} onDayChange={this.handleDayChange} placeholder="YYYY/M/D" value={this.state.valDate} /> 
