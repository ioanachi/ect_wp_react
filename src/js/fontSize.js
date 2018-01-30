import React from 'react';

export class FontSize extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      fontSize: ''
    }
    this.inputfontSize = this.inputfontSize.bind(this);
  };
  inputfontSize(evt){
    const fontVal = evt.target.value;
    this.setState({fontSize: fontVal});
    const fontex = this.state.fontSize;
    const Submitx = this.props.aaa;
    Submitx(fontex);
  };

  render() {
    return (
      <form  className="fontdiv">
    <label htmlFor="fontInput">  Font Size</label>
    <input type="number" className="fontInput" value={this.state.fontSize} onChange={this.inputfontSize}/>
    </form>);
  }
}
