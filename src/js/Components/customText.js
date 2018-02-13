import React from 'react';

export class CustomText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.chooseYears = this.chooseYears.bind(this);
    this.chooseMonths = this.chooseMonths.bind(this);
    this.chooseWeeks = this.chooseWeeks.bind(this);
    this.chooseDsys = this.chooseDsys.bind(this);
    this.chooseHours = this.chooseHours.bind(this);
    this.chooseMinutes = this.chooseMinutes.bind(this);
    this.chooseSeconds = this.chooseSeconds.bind(this);
  };
  chooseBold(evt) {
    this.setState({ectIsBold: evt.target.checked});
    const isBoldC = !this.state.ectIsBold;
    const SubmitB = this.props.callbackChildPropB;
    SubmitB(isBoldC);
  };
  //   chooseFormatText(evt) {})
  //
  // }
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
            <input type="text" onChange={this.chooseDsys} ref="daysFormat"/>
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
            <label>MInutes</label>
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
