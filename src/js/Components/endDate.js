import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';


export class EndDate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: this.props.pEndDate,
      endDate: moment().date(),
      endHour: moment().hour(),
      endMinutes: moment().minutes()
    };

    this.handleChange = this.handleChange.bind(this);
    this.selectMinTime = this.selectMinTime.bind(this);
  }
  handleChange(date) {
    


var newDate = date.year()+'/'+(date.month()+1)+'/'+date.date();
var newHour = date.hour();
var newMinute = date.minute();


    this.setState({
      startDate: date,
      endDate: newDate,
      endHour: newHour,
      endMinutes: newMinute
    });
    
    const SubmitToParent = this.props.callbackChildProp;
    SubmitToParent(newDate, newHour, newMinute)
  };


  selectMinTime(data) {
    if (data == moment().date()) {
      return moment().hours(moment().hour()).minutes(moment().minutes())
    }
    return moment().hours(0).minutes(0)


  }
  render() {
    return (
      <div>
        <DatePicker placeholderText="Select a date"
          dateFormat="YYYY/MM/DD"
          selected={this.state.startDate}
          onChange={this.handleChange}
          showTimeSelect
          dateFormat="LLL"
          className="datePickerStyle"
          timeCaption="time"
          timeIntervals={15}
          timeFormat="HH:mm"
          minTime={this.selectMinTime(this.state.endDate)}
          maxTime={moment().hours(23).minutes(59)}
          minDate={moment()}
          maxDate={moment().add(1000, "years")} readonly />
      </div>
    );
  }
}


//  <DayPickerInput format="M/D/YYY" formatDate={this.ectFormatDate} onDayChange={this.handleDayChange} placeholder="YYYY/M/D" value={this.state.valDate} /> 
