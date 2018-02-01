import React from 'react';

export class Previews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayShortcode: false,
      shortcodeValue: this.props.pName
    };
    this.selectAllText = this.selectAllText.bind(this);
  }
  selectAllText(e) {
    console.log(e.target.value, "run");
    e.target.setSelectionRange(0, e.target.value.length);
    e.target.select();

  }
  showShortcode() {
    this.setState({
      displayShortcode: !this.state.displayShortcode
    })
  };

  render() {
    const shortValue = '[ect-EndDate name="' + this.props.pName + '" date="' + this.props.pDate + '"  color= "' + this.props.pColor + '" font-size="' + this.props.pFont + '"px]';

    return (<div className="componentContainer">
      <label>Shortcode</label>
      <span>(copy this)</span>
      <div className="shortcode">
        <input onClick={this.selectAllText} value={shortValue} readOnly="readOnly"/>
      </div>
    </div>)
  }
}
