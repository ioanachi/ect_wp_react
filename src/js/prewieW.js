import React from 'react';

export class Previews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayShortcode: false,
    };
    this.selectAllText = this.selectAllText.bind(this);
  }
  selectAllText(e) {
    e.target.setSelectionRange(0, e.target.value.length);
    e.target.select();

  }
  showShortcode() {
    this.setState({
      displayShortcode: !this.state.displayShortcode
    })
  };

  render() {
    const shortValue = '[ectShortcode   name="' + this.props.pName + '"   date="' + this.props.pDate + '"  color= "' + this.props.pColor + '"   fontSize="' + this.props.pFont + 'px"'+'    bold="'+this.props.pBold+'"]';

    return (<div className="componentContainer">
      <label>Shortcode</label>
      <span>(copy this)</span>
      <div className="shortcode">
        <input onClick={this.selectAllText} value={shortValue} readOnly="readOnly"/>
      </div>
    </div>)
  }
}
