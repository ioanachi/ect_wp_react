import React from 'react';
import Slider from 'rc-slider/lib/Slider';
import 'rc-slider/assets/index.css';

export class FontSize extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fontSize: this.props.pFontz

    }
    this.inputfontSize = this.inputfontSize.bind(this);
  };
  inputfontSize(evt) {
    const fontVal = evt;
    this.setState({fontSize:fontVal})
    const Submitx = this.props.aaa;
    Submitx(fontVal);
  };

  render() {
    return (<div>
      <Slider min={8} max={100} step={1} value={this.state.fontSize} onChange={this.inputfontSize} />

    </div>);
  }
}
// <input type="number" className="fontInput" value={this.state.fontSize} onChange={this.inputfontSize}/>
//
