import React from 'react';

export class CustomText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.chooseYears = this.chooseYears.bind(this);
    this.chooseMonths = this.chooseMonths.bind(this);
    this.chooseWeeks = this.chooseWeeks.bind(this);
    this.chooseDays = this.chooseDays.bind(this);
    this.chooseHours = this.chooseHours.bind(this);
    this.chooseMinutes = this.chooseMinutes.bind(this);
    this.chooseSeconds = this.chooseSeconds.bind(this);
  };
  chooseYears(evt) {
    const SubmitTF = this.props.callbackChildPropFormatText;
    SubmitTF(evt.target.value, this.refs.monthsFormat.value, this.refs.weeksFormat.value, this.refs.daysFormat.value, this.refs.hoursFormat.value, this.refs.minutesFormat.value, this.refs.secondsFormat.value);
  };
  //   chooseFormatText(evt) {})
  //
  // }
  chooseMonths(evt) {
    const SubmitTF = this.props.callbackChildPropFormatText;
    SubmitTF(this.refs.yearsFormat.value, evt.target.value, this.refs.weeksFormat.value, this.refs.daysFormat.value, this.refs.hoursFormat.value, this.refs.minutesFormat.value, this.refs.secondsFormat.value);
  };
  chooseWeeks(evt) {
    const SubmitTF = this.props.callbackChildPropFormatText;
    SubmitTF(this.refs.yearsFormat.value, this.refs.monthsFormat.value, evt.target.value, this.refs.daysFormat.value, this.refs.hoursFormat.value, this.refs.minutesFormat.value, this.refs.secondsFormat.value);

  };
  chooseDays(evt) {
    const SubmitTF = this.props.callbackChildPropFormatText;
    SubmitTF(this.refs.yearsFormat.value, this.refs.monthsFormat.value, this.refs.weeksFormat.value, evt.target.value, this.refs.hoursFormat.value, this.refs.minutesFormat.value, this.refs.secondsFormat.value);

  };
  chooseHours(evt) {
    const SubmitTF = this.props.callbackChildPropFormatText;
    SubmitTF(this.refs.yearsFormat.value, this.refs.monthsFormat.value, this.refs.weeksFormat.value, this.refs.daysFormat.value, evt.target.value, this.refs.minutesFormat.value, this.refs.secondsFormat.value);
  };
  chooseMinutes(evt) {
    const SubmitTF = this.props.callbackChildPropFormatText;
    SubmitTF(this.refs.yearsFormat.value, this.refs.monthsFormat.value, this.refs.weeksFormat.value, this.refs.daysFormat.value, this.refs.hoursFormat.value, evt.target.value, this.refs.secondsFormat.value);
  };
  chooseSeconds(evt) {
    const SubmitTF = this.props.callbackChildPropFormatText;
    SubmitTF(this.refs.yearsFormat.value, this.refs.monthsFormat.value, this.refs.weeksFormat.value, this.refs.daysFormat.value, this.refs.hoursFormat.value, this.refs.minutesFormat.value, evt.target.value,);
  };
  render() {
    // textArr = ['Years', 'Months', 'Weeks', 'Days', 'Hours', 'Minutes', 'Seconds'];
    return (<table>
      <tbody>
        <tr>
          <td className="componentContainer">
            <label>Years</label>
          </td>
          <td className="componentContainer">
            <input type="text" onChange={this.chooseYears} ref="yearsFormat"/>
          </td>
        </tr>
        <tr>
          <td className="componentContainer">
            <label>Months</label>
          </td>
          <td className="componentContainer">
            <input type="text" onChange={this.chooseMonths} ref="monthsFormat"/>
          </td>
        </tr>
        <tr>
          <td className="componentContainer">
            <label>Weeks</label>
          </td>
          <td className="componentContainer">
            <input type="text" onChange={this.chooseWeeks} ref="weeksFormat"/>

          </td>
        </tr>
        <tr>
          <td className="componentContainer">
            <label>Days</label>
          </td>
          <td className="componentContainer">
            <input type="text" onChange={this.chooseDays} ref="daysFormat"/>
          </td>
        </tr>
        <tr>
          <td className="componentContainer">
            <label>Hours</label>
          </td>
          <td className="componentContainer">
            <input type="text" onChange={this.chooseHours} ref="hoursFormat"/>
          </td>
        </tr>
        <tr>
          <td className="componentContainer">
            <label>Minutes</label>
          </td>
          <td className="componentContainer">
            <input type="text" onChange={this.chooseMinutes} ref="minutesFormat"/>
          </td>
        </tr>
        <tr>
          <td className="componentContainer">
            <label>Seconds</label>
          </td>
          <td className="componentContainer">
            <input type="text" onChange={this.chooseSeconds} ref="secondsFormat"/>
          </td>
        </tr>
      </tbody>
    </table>);
  }
}
