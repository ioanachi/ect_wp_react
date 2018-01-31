import { render } from 'react-dom'
import React from 'react';
import { SketchPicker } from 'react-color'


export class PickColor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        background: '',
    };
    this.handleOnColorChange = this.handleOnColorChange.bind(this);

  }
  handleOnColorChange(color) {
    const colorChanged =  color.hex;
    this.setState({ background: color.hex });
   // this.setState({ color: evt.target.value });
    const Submitx = this.props.callbackChildPropColor;

    Submitx(colorChanged);
  }

  render() {
    return( <div>
    <label htmlFor="fontInput">Pick a color</label>

      <SketchPicker  color={ this.state.background } onChangeComplete={this.handleOnColorChange} />
    </div>)
  }
}
