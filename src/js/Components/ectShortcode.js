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
    const shortValue = '[ectShortcode name="' + this.props.pName + '"   endDate="' + this.props.pDate + '"  color= "' + this.props.pColor +
    '" fontSize="' + this.props.pFont + 'px"' + ' bold="' + this.props.chooseBold + '" timezone="' + this.props.pTimezoneOffset +
    '" endhour="' + this.props.pEndHour + '"  endminute= "' + this.props.pEndMinute + '" timeFormat="' + this.props.pTimeFormat  +
    '" yearsFormat=" ' + this.props.pYears + '"  monthsFormat="' + this.props.pMonths + '" weeksFormat="' + this.props.pWeeks +
    '" daysFormat="' + this.props.pDays + '" hoursFormat="' + this.props.pHoursFormat + '" minutesFormat="' + this.props.pMinutesFormat +
    '" secondsFormat="' + this.props.pSecondsFormat + '"]';

    return (<div className="ectSortcode">
      <label>Shortcode</label>
      <span>(click to automatically select all, then copy)</span>
      <div className="shortcode">
        <input id="ectSCInput" onClick={this.selectAllText} value={shortValue} />
        <h4>This interface helps you generate customly a shortcode for later use with a wordpress plugin, what you select in the fields will be given to the shortcode as attributes and used later.</h4>
      </div>
    </div>)
  }
}
