import React from 'react';

export class EndTime extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      endHour:this.props.pEndHour,
      endMinute:this.props.pEndMinute
    }

    this.chooseHours = this.chooseHours.bind(this);
    this.chooseMinutes = this.chooseMinutes.bind(this);
  };
  setHour() {
    let optionsJsx = [];
    for (var i = 0; i <= 24; i++) {
      if (i < 10) {
        optionsJsx.push(<option key={i} value={i}>{'0' + i}</option>);
      } else {
        optionsJsx.push(<option key={i} value={i}>{i}</option>);
      }
    }
    return optionsJsx;
  };
setMinutes(){
  let optionsSeconds = [];
  for (var y = 0; y <= 60; y++) {
    if (y < 10) {
      optionsSeconds.push(<option key={y} value={y}>{'0' + y}</option>);
    } else {
      optionsSeconds.push(<option key={y} value={y}>{y}</option>);
    }
  }
  return optionsSeconds;

}

  chooseHours(evt) {
    const InputValue = evt.target.value;
    const Submitx = this.props.TimeEnd;
    this.setState({endHour:InputValue});
    Submitx(InputValue , this.state.endMinute);
  };
  chooseMinutes(evt) {
    const InputValue = evt.target.value;
    this.setState({endMinute:InputValue});
    const Submitx = this.props.TimeEnd;
    Submitx(this.state.endHour , InputValue);

  };

  render() {
    return (<div>
    Hours:  <select value={this.state.endHour} onChange={this.chooseHours}>{this.setHour()}</select>
    Minutes:  <select value={this.state.endMinute} onChange={this.chooseMinutes}>{this.setMinutes()}</select>

    </div>);
  }
}
