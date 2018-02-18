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
    const finalEndDate = this.props.endDate.year() + '/' + (this.props.endDate.month() + 1) + '/' + this.props.endDate.date()
    const shortValue = '[ectShortcode timername="' + this.props.pName + '"   enddate="' + finalEndDate + '"  numbercolor= "' + this.props.pColor +
    '" colortxt="' + this.props.pColorTxt + '" numberfontsize="' + this.props.pFont + '"  fontsizetxt="' + this.props.pFontTxt + '"' + ' numberbold="' + this.props.chooseBold + '" numberboldtxt="' + this.props.pIsBoldTxt + '" enddatetimezone="' + this.props.pTimezoneOffset +
    '" endhour="' + this.props.pEndHour + '"  endminute= "' + this.props.pEndMinute + '" timeFormat="' + this.props.pTimeFormat  +
    '" customtxtyears=" ' + this.props.pYears + '"  customtxtmonths="' + this.props.pMonths + '" customtxtweeks="' + this.props.pWeeks +
    '" customtxtdays="' + this.props.pDays + '" customtxthours="' + this.props.pHoursFormat + '" customtxtminutes="' + this.props.pMinutesFormat +
    '" customtxtseconds="' + this.props.pSecondsFormat + '" customtimerendedtxt="' + this.props.pCustomTxtEndedTxt + '"]';

    return (<div className="ectSortcode">
      <div className="shortcode">
        <input id="ectSCInput" onClick={this.selectAllText} onChange={this.selectAllText} value={shortValue} />
      </div>
    </div>)
  }
}
