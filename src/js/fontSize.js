import React from 'react';

export class FontSize extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fontSize: ''
    }
    this.inputfontSize = this.inputfontSize.bind(this);
  };
  inputfontSize(evt) {
    const fontVal = evt.target.value;
    const Submitx = this.props.aaa;
    Submitx(fontVal);
  };

  render() {
    return (<div className="componentContainer">
      <label htmlFor="fontInput">Font Size</label>
      <input type="number" className="fontInput" onChange={this.inputfontSize}/>
    </div>);
  }
}
