import React from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

export class EndDate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {valDate:this.props.pEndDate};
    this.handleDayChange = this.handleDayChange.bind(this);
  }
  handleDayChange(date) {
    const returnDataToParent = this.props.callbackChildProp;
    var tempDate = new Date(date.toString());
    var mm = parseInt(tempDate.getMonth())+1;
    var dd = tempDate.getDate();
    var yyyy = tempDate.getFullYear();
    var finalDateString = yyyy+'/'+mm+'/'+dd;
    this.setState({valDate:finalDateString});
    returnDataToParent(finalDateString);
  }
  ectFormatDate(tempDate,dateString){
    var tempDate = new Date(tempDate.toString());
    var mm = parseInt(tempDate.getMonth())+1;
    var dd = tempDate.getDate();
    var yyyy = tempDate.getFullYear();
    var result = yyyy+'/'+mm+'/'+dd;
  };
  render() {
    return (
      <div className="componentContainer">
        <DayPickerInput format="M/D/YYY" formatDate={this.ectFormatDate} onDayChange={this.handleDayChange} placeholder="YYYY/M/D" value={this.state.valDate} />
      </div>
    );
  }
}
