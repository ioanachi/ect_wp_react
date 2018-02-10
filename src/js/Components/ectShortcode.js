import React from 'react';

export class EctShortcode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayShortcode: false
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
    const shortValue = '[ectShortcode   name="' + this.props.pName + '"   date="' + this.props.pDate + '"  color= "' + this.props.pColor + '"   fontSize="' + this.props.pFont + 'px"' + '    bold="' + this.props.pBold + '" timezone="' + this.props.pUtcTz +
    '" hour="' + this.props.pHour + '"  minutes= "' + this.props.pMinutes + ' timeFormat=' + this.props.pFormat + '"]';

    return (<div className="componentContainer">
      <label>Shortcode</label>
      <span>(click to automatically select all, then copy)</span>
      <div className="shortcode">
        <input onClick={this.selectAllText} value={shortValue} readOnly="readOnly"/>
        <h4>This interface helps you generate customly a shortcode for later use with a wordpress plugin, what you select in the fields will be given to the shortcode as attributes and used later.</h4>
      </div>
    </div>)
  }
}
