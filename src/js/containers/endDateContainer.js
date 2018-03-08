import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { generalConfigChange } from "../actions/index";

import moment from "moment";

import DatePicker from "react-datepicker";

class EndDateContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      startDate: this.props.pEndDate,
      endDate: this.props.pEndDate,
      endHour: moment().hour(),
      endMinutes: moment().minutes()
    };

    this.handleChange = this.handleChange.bind(this);
    this.selectMinTime = this.selectMinTime.bind(this);
  }
  handleChange(date) {
    var newDatex = {
      endDate: date,
      timezoneOffset: this.props.generalConfigChange.timezoneOffset,
      timerName: ''
    };
    }
    return () => { this.props.generalConfigChange(newDatex);

    return moment(date);

    var newDate;
    if (date.month() + 1 < 10) {
      newDate = date.year() + "-0" + (date.month() + 1) + "-" + date.date();
    } else {
      newDate = date.year() + "-" + (date.month() + 1) + "-" + date.date();
    }
    var newHour = date.hour();
    var newMinute = date.minute();
    console.log(moment(newDate));

    this.setState({
      startDate: date,
      endDate: moment(newDate),
      endHour: newHour,
      endMinutes: newMinute
    });

    const SubmitToParent = this.props.callbackChildProp;
    SubmitToParent(newDate, newHour, newMinute);
  }

  selectMinTime(data) {
    console.log(data,'setmintime(date)');
    
    if (data.date() == moment().date()) {
      return moment()
        .hours(moment().hour())
        .minutes(moment().minutes());
    }
    return moment()
      .hours(0)
      .minutes(0);
  }
  render() {
    console.log(this.props.generalConfigChange);
    return (
      // <input type="text" value={()=>this.props.generalConfigChange.endDate} />
      <DatePicker
        placeholderText="Select a date"
        dateFormat="YYYY/MM/DD"
        selected={()=>this.props.generalConfigChange.endDate}
        onChange={this.handleChange}
        showTimeSelect
        dateFormat="LLL"
        className="datePickerStyle"
        timeCaption="time"
        timeIntervals={15}
        timeFormat="HH:mm"
        minTime={this.selectMinTime(this.props.generalConfigChange)}
        maxTime={moment()
        .hours(23)
        .minutes(59)}
        minDate={moment()}
        maxDate={moment().add(1000, "years")}
      />
    );
  }
}

function mapStateToProps(state) {
  return { generalConfig:  state.generalConfigChange };
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      generalConfigChange: generalConfigChange
    },
    dispatch
  );
}
export default connect(mapStateToProps, matchDispatchToProps)(EndDateContainer);

