'use strict'
import {render} from 'react-dom'
import React from 'react';
import {SketchPicker} from 'react-color'

class PickColor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      background: '',
      displayColorPicker: false
    };
    this.handleOnColorChange = this.handleOnColorChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
  };
  handleClick() {
    this.setState({
      displayColorPicker: !this.state.displayColorPicker
    })
  };
  handleClose() {
    this.setState({displayColorPicker: false})
  };
  handleOnColorChange(color) {
    const colorChanged = color.hex;
    this.setState({background: color.hex});
    // this.setState({ color: evt.target.value });
    const Submitx = this.props.callbackChildPropColor;
    Submitx(colorChanged);
  }
  render() {
    const popover = {
      position: 'absolute',
      zIndex: '2'
    };
    const cover = {
      position: 'fixed',
      top: '0px',
      right: '0px',
      bottom: '0px',
      left: '0px'
    };
    return (<div className="componentContainer">
      <label>Color</label>
      <button onClick={this.handleClick}>Pick Color</button>
      {this.state.displayColorPicker ? <div style={popover}> <div style={cover} onClick={this.handleClose}/>
              <SketchPicker color={this.state.background} onChangeComplete={this.handleOnColorChange}/>
            </div>:null}
    </div>)
  }
}
export default PickColor
