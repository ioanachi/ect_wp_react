import React from 'react';

export class EctShortcode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayShortcode: false
    };
    this.selectAllText = this.selectAllText.bind(this);
  }
  selectAllText(e) {
    e.target.setSelectionRange(0, e.target.value.length);
    e.target.select();

  }
  showShortcode() {
    this.setState({
      displayShortcode: !this.state.displayShortcode
    })
  };

  render() {
    const shortValue = '[ectShortcode timername="' + this.props.pName + '"   enddate="' + this.props.endDate + '"  numbercolor= "' + this.props.pColor +
    '" numberfontsize="' + this.props.pFont + 'px"' + ' numberbold="' + this.props.chooseBold + '" enddatetimezone="' + this.props.pTimezoneOffset +
    '" endhour="' + this.props.pEndHour + '"  endminute= "' + this.props.pEndMinute + '" timeFormat="' + this.props.pTimeFormat  +
    '" customTxtYears=" ' + this.props.pYears + '"  customTxtMonths="' + this.props.pMonths + '" customTxtWeeks="' + this.props.pWeeks +
    '" customTxtDays="' + this.props.pDays + '" customTxtHours="' + this.props.pHoursFormat + '" customTxtMinutes="' + this.props.pMinutesFormat +
    '" customTxtSeconds="' + this.props.pSecondsFormat + '"]';

    return (<div className="ectSortcode">
      <label>Shortcode</label>
      <span>(click to automatically select all, then copy)</span>
      <div className="shortcode">
        <input id="ectSCInput" onClick={this.selectAllText} onChange={this.selectAllText} value={shortValue} />
        <h4>This interface helps you generate customly a shortcode for later use with a wordpress plugin, what you select in the fields will be given to the shortcode as attributes and used later.</h4>
      </div>
    </div>)
  }
}
