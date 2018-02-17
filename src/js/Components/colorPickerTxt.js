'use strict'
import {render} from 'react-dom'
import React from 'react';
import reactCSS from 'reactcss'
import {SketchPicker} from 'react-color'

class PickColorTxT extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colorTxt: this.props.pcolorTxt,
      background: this.props.pcolorTxt,
      displaycolorTxtPicker: false
    };
    this.handleOncolorTxtChange = this
      .handleOncolorTxtChange
      .bind(this);
    this.handleClick = this
      .handleClick
      .bind(this);
    this.handleClose = this
      .handleClose
      .bind(this);
  };
  handleClick() {
    this.setState({
      displaycolorTxtPicker: !this.state.displaycolorTxtPicker
    })
  };
  handleClose() {
    this.setState({displaycolorTxtPicker: false})
  };
  handleOncolorTxtChange(color) {
    const colorTxtChanged = color.hex;
    this.setState({colorTxt: color.hex});
    // this.setState({ color: evt.target.value });
    const Submitx = this.props.callbackChildPropcolorTxt;
    Submitx(colorTxtChanged);
  }
  render() {
    const styles = reactCSS({
      'default': {
        colorTxt: {
          width: '36px',
          height: '14px',
          borderRadius: '2px',
          background: `${this.state.colorTxt}`
        },
        swatch: {
          padding: '5px',
          background: '#fff',
          borderRadius: '1px',
          boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
          display: 'inline-block',
          cursor: 'pointer'
        },
        popover: {
          position: 'absolute',
          zIndex: '2'
        },
        cover: {
          position: 'fixed',
          top: '0px',
          right: '0px',
          bottom: '0px',
          left: '0px'
        }
      }
    });
    return (
      <div className="componentContainer">

        <div style={styles.swatch} onClick={this.handleClick}>
          <div style={styles.colorTxt}></div>
        </div>
        {this.state.displaycolorTxtPicker
          ? (
            <div style={styles.popover}><div style={styles.cover} onClick={this.handleClose}/><SketchPicker
              colorTxt={this.state.colorTxt}
              onChange={this.handleOncolorTxtChange}/>
            </div>
          )
          : null}
      </div>
    )
  }
}
export default PickcolorTxT;
