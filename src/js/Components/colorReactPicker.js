'use strict'
import {render} from 'react-dom'
import React from 'react';
import reactCSS from 'reactcss'
import {SketchPicker} from 'react-color'

class PickColor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: {
        r: '241',
        g: '112',
        b: '19',
        a: '1'
      },
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
    this.setState({color: color.hex});
    // this.setState({ color: evt.target.value });
    const Submitx = this.props.callbackChildPropColor;
    Submitx(colorChanged);
  }
  render() {
    const styles = reactCSS({
      'default': {
        color: {
          width: '36px',
          height: '14px',
          borderRadius: '2px',
          background: `rgba(${ this.state.color.r }, ${ this.state.color.g }, ${ this.state.color.b }, ${ this.state.color.a })`,
        },
        swatch: {
          padding: '5px',
          background: '#fff',
          borderRadius: '1px',
          boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
          display: 'inline-block',
          cursor: 'pointer',
        },
        popover: {
          position: 'absolute',
          zIndex: '2',
        },
        cover: {
          position: 'fixed',
          top: '0px',
          right: '0px',
          bottom: '0px',
          left: '0px',
        },
      },
    });
    return (<div className="componentContainer">

      <div style={ styles.swatch } onClick={ this.handleClick }>
          <div style={ styles.color } />
        </div>
        { this.state.displayColorPicker ? <div style={ styles.popover }>
          <div style={ styles.cover } onClick={ this.handleClose }/>
          <SketchPicker color={ this.state.color } onChange={ this.handleOnColorChange } />
        </div> : null }
    </div>)
  }
}
export default PickColor
