import React from 'react';

export class CustomText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      yearsFormat: this.props.pYears,
      monthsFormat: this.props.pMonths,
      weeksFormat: this.props.pWeeks,
      daysFormat: this.props.pDays,
      hoursFormat: this.props.pHoursFormat,
      minutesFormat: this.props.pMinutesFormat,
      secondsFormat: this.props.pSecondsFormat
    }
    this.chooseYears = this.chooseYears.bind(this);
    this.chooseMonths = this.chooseMonths.bind(this);
    this.chooseWeeks = this.chooseWeeks.bind(this);
    this.chooseDays = this.chooseDays.bind(this);
    this.chooseHours = this.chooseHours.bind(this);
    this.chooseMinutes = this.chooseMinutes.bind(this);
    this.chooseSeconds = this.chooseSeconds.bind(this);
    this.sendValuesToParent = this.sendValuesToParent.bind(this);
    this.dateFormat = this.dateFormat.bind(this);


  };
  dateFormat(){
    return {
      hoursFormat: this.props.pHoursFormat
    }
  };

  chooseYears(evt) {
    const FormatValue = evt.target.value;
    this.state.hoursFormat = FormatValue;
    this.setState({yearsFormat: FormatValue});
    this.sendValuesToParent();
  };

  chooseMonths(evt) {
    const FormatValue = evt.target.value;
    this.state.monthsFormat = FormatValue;
    this.setState({monthsFormat: FormatValue});
    this.sendValuesToParent();
  };
  chooseWeeks(evt) {
    const FormatValue = evt.target.value;
    this.state.weeksFormat = FormatValue;
    this.setState({weeksFormat: FormatValue});
    this.sendValuesToParent();

  };
  chooseDays(evt) {
    const FormatValue = evt.target.value;
    this.state.daysFormat = FormatValue;
    this.setState({daysFormat: FormatValue});
    this.sendValuesToParent();

  };
  chooseHours(evt) {
    const FormatValue = evt.target.value;
    this.state.hoursFormat = FormatValue;
    this.setState({hoursFormat: FormatValue});
    this.sendValuesToParent();
  };
  chooseMinutes(evt) {
    const FormatValue = evt.target.value;
    this.state.minutesFormat = FormatValue;
    this.setState({minutesFormat: FormatValue});
    console.log(this.dateFormat());
    this.sendValuesToParent();

  };
  chooseSeconds(evt) {
    const FormatValue = evt.target.value;
    this.state.secondsFormat = FormatValue;
    this.setState({secondsFormat: FormatValue});
    this.sendValuesToParent();
  };
  sendValuesToParent() {
    const SubmitTF = this.props.callbackChildPropFormatText;
    SubmitTF(this.state.yearsFormat, this.state.monthsFormat, this.state.weeksFormat, this.state.daysFormat, this.state.hoursFormat, this.state.minutesFormat, this.state.secondsFormat);

  }
  render() {
    // textArr = ['Years', 'Months', 'Weeks', 'Days', 'Hours', 'Minutes', 'Seconds'];
    return (<table>
      <tbody>
        <tr>
          <td className="componentContainer">
            <label>Years</label>
          </td>
          <td className="componentContainer">
            <input type="text" onChange={this.chooseYears} value={this.state.yearsFormat}/>
          </td>
        </tr>
        <tr>
          <td className="componentContainer">
            <label>Months</label>
          </td>
          <td className="componentContainer">
            <input type="text" onChange={this.chooseMonths} value={this.state.monthsFormat}/>
          </td>
        </tr>
        <tr>
          <td className="componentContainer">
            <label>Weeks</label>
          </td>
          <td className="componentContainer">
            <input type="text" onChange={this.chooseWeeks} value={this.state.weeksFormat}/>

          </td>
        </tr>
        <tr>
          <td className="componentContainer">
            <label>Days</label>
          </td>
          <td className="componentContainer">
            <input type="text" onChange={this.chooseDays}  value={this.state.daysFormat}/>
          </td>
        </tr>
        <tr>
          <td className="componentContainer">
            <label>Hours</label>
          </td>
          <td className="componentContainer">
            <input type="text" onInput={this.chooseHours} value={this.state.hoursFormat}/>
          </td>
        </tr>
        <tr>
          <td className="componentContainer">
            <label>Minutes</label>
          </td>
          <td className="componentContainer">
            <input type="text" onChange={this.chooseMinutes}  value={this.state.minutesFormat}/>
          </td>
        </tr>
        <tr>
          <td className="componentContainer">
            <label>Seconds</label>
          </td>
          <td className="componentContainer">
            <input type="text" onChange={this.chooseSeconds}  value={this.state.secondsFormat}/>
          </td>
        </tr>
      </tbody>
    </table>);
  }
}
