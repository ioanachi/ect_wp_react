import React from 'react';

export class FontSize extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fontSize: this.props.pFont

    }
    this.inputfontSize = this.inputfontSize.bind(this);
  };
  inputfontSize(evt) {
    const fontVal = evt.target.value;
    this.setState({fontSize:fontVal})
    const Submitx = this.props.aaa;
    Submitx(fontVal);
  };

  render() {
    return (<div>
      <input type="number" className="fontInput" value={this.state.fontSize} onChange={this.inputfontSize}/>
      px
    </div>);
  }
}
