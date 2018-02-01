import React from 'react';

export class FontSize extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fontSize: '',
      ectIsBold:  false
    }
    this.inputfontSize = this.inputfontSize.bind(this);
  };
  inputfontSize(evt) {
    const fontVal = evt.target.value;
    this.setState({ectIsBold:!this.state.ectIsBold})
    const Submitx = this.props.aaa;
    Submitx(fontVal, ectIsBold);
  };

  render() {
    return (<div>
      <div className="componentContainer">
        <label htmlFor="fontInput">Font Size</label>
        <input type="number" className="fontInput" onChange={this.inputfontSize}/>
      </div>
      
    </div>);
  }
}
