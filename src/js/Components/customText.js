import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyAwesomeReactComponent from './MyAwesomeReactComponent';
import TextField from 'material-ui/TextField';

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
      secondsFormat: this.props.pSecondsFormat,
      customTxtEndedTxt: this.props.pcustomTxtEndedTxt
    }
    this.chooseYears = this.chooseYears.bind(this);
    this.chooseMonths = this.chooseMonths.bind(this);
    this.chooseWeeks = this.chooseWeeks.bind(this);
    this.chooseDays = this.chooseDays.bind(this);
    this.chooseHours = this.chooseHours.bind(this);
    this.chooseMinutes = this.chooseMinutes.bind(this);
    this.chooseSeconds = this.chooseSeconds.bind(this);
    this.sendValuesToParent = this.sendValuesToParent.bind(this);
    this.chooseEndText = this.chooseEndText.bind(this);
  };

  chooseYears(evt) {
    const FormatValue = evt.target.value;
    this.state.yearsFormat = FormatValue;
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
    this.sendValuesToParent();

  };
  chooseSeconds(evt) {
    const FormatValue = evt.target.value;
    this.state.secondsFormat = FormatValue;
    this.setState({secondsFormat: FormatValue});
    this.sendValuesToParent();
  };
  chooseEndText(evt) {
    
    const FormatValue = evt.target.value;
    this.state.customTxtEndedTxt = FormatValue;
    
    console.log(FormatValue, this.props.pcustomTxtEndedTxt, "FormatValue");
    
    this.setState({customTxtEndedTxt: FormatValue});
    this.sendValuesToParent();
  };



  
  sendValuesToParent() {
    const SubmitTF = this.props.callbackChildPropFormatText;
    SubmitTF(this.state.yearsFormat, this.state.monthsFormat, this.state.weeksFormat, this.state.daysFormat, this.state.hoursFormat, this.state.minutesFormat, this.state.secondsFormat, this.state.customTxtEndedTxt);

  }
  render() {
    return (<MuiThemeProvider >

      <table>
        <tbody>
          <tr>
            <td className="componentContainer">
              <TextField hintText="Hint Text" onChange={this.chooseYears} value={this.state.yearsFormat}/>
            </td>
            <td className="componentContainer">
            <TextField hintText="Hint Text" onChange={this.chooseMonths} value={this.state.monthsFormat}/>
            </td>
            <td className="componentContainer">
            <TextField hintText="Hint Text" onChange={this.chooseWeeks} value={this.state.weeksFormat}/>
            </td>
          </tr>
          <tr>
            <td className="componentContainer">
            <TextField hintText="Hint Text" onChange={this.chooseDays} value={this.state.daysFormat}/>
            </td>
            <td className="componentContainer">
            <TextField hintText="Hint Text" onChange={this.chooseHours} value={this.state.hoursFormat}/>
            </td>
            <td className="componentContainer">
            <TextField hintText="Hint Text" onChange={this.chooseMinutes} value={this.state.minutesFormat}/>
            </td>
          </tr>
          <tr>
            <td className="componentContainer">
            <TextField hintText="Hint Text" onChange={this.chooseSeconds} value={this.state.secondsFormat}/>
            </td>
            <td className="componentContainer">
            <TextField hintText="Hint Text" onChange={this.chooseEndText} value={this.state.customTxtEndedTxt}/>
            </td>
          </tr>
        </tbody>
      </table>
    </MuiThemeProvider>);
  }
}
