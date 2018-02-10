import React from 'react';

export class CountFormat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ectIsBold:  false
    }
    this.chooseBold = this.chooseBold.bind(this);
  };
  chooseFormat(evt) {
    this.setState({ectIsBold:evt.target.checked});
    const isBoldC = !this.state.ectIsBold;
    const SubmitB = this.props.callbackChildPropB;
    SubmitB(isBoldC);
  };
  render() {
      return (

        <select>

        </select>
    );
  }
}
