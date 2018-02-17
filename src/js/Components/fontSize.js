import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Slider from 'material-ui/Slider';
import MyAwesomeReactComponent from './MyAwesomeReactComponent';

export class NumbersFontSize extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fontSize: this.props.pFont

    }
    this.inputfontSize = this
      .inputfontSize
      .bind(this);
  };
  inputfontSize(evt, valx) {
    this.setState({fontSize: valx})
    const Submitx = this.props.aaa;
    Submitx(valx);
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <span>
            {this.state.fontSize} px
          </span>
          <Slider
            min={8}
            max={100}
            step={1}
            value={this.state.fontSize}
            onChange={this.inputfontSize}
            sliderStyle={{
            'height': '5px',
            marginTop: '5px'
          }}
            defaultValue={this.props.pFont}/>
        </div>
      </MuiThemeProvider>
    );
  }
}
