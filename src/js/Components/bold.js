import React from 'react';

export class Bold extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isBold:  this.props.pIsBold
    }
    this.changeBold = this.changeBold.bind(this);
  };
  changeBold(evt) {
    const isBold = evt.target.checked;
    this.setState({isBold:isBold});
    const SubmitB = this.props.callbackChildPropB;
    SubmitB(isBold);
  };
  render() {
      return (

        <input id="checkBox" checked={this.state.isBold} type="checkbox" onChange={this.changeBold}/>
    );
  }
}
