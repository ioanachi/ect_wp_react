import React from 'react';

export class TimerStyles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ectIsBold:  false
    }
    this.chooseBold = this.chooseBold.bind(this);
  };
  chooseBold(evt) {
    this.setState({ectIsBold:evt.target.checked});
    const isBoldC = !this.state.ectIsBold;
    const SubmitB = this.props.callbackChildPropB;
    SubmitB(isBoldC);
  };
  render() {
      return (

        <input id="checkBox" checked={this.state.ectIsBold} type="checkbox" onChange={this.chooseBold}/>
    );
  }
}