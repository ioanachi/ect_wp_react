import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Slider from 'material-ui/Slider';
import MyAwesomeReactComponent from './MyAwesomeReactComponent';

export class EctSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fontSize: this.props.pFontSize

    }
    this.inputfontSize = this
      .inputfontSize
      .bind(this);
  };
  inputfontSize(evt, sendValue) {
    this.setState({fontSize: sendValue})
    const SubmitCallback = this.props.pFontSizeCallback;
    SubmitCallback(sendValue);
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="ectSliderContainer">
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
            defaultValue={this.props.pFontSize}/>
        </div>
      </MuiThemeProvider>
    );
  }
}
