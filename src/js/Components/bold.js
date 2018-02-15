import React from 'react';

export class Bold extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isBold:  this.props.pIsBold
    }
    this.chooseBold = this.chooseBold.bind(this);
  };
  chooseBold(evt) {
    this.setState({isBold:evt.target.checked});
    const isBoldC = !this.state.isBold;
    const SubmitB = this.props.callbackChildPropB;
    SubmitB(isBoldC);
  };
  render() {
      return (

        <input id="checkBox" checked={this.state.isBold} type="checkbox" onChange={this.chooseBold}/>
    );
  }
}
