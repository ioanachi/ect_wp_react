import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Toggle from 'material-ui/Toggle';
import MyAwesomeReactComponent from './MyAwesomeReactComponent';

export class Bold extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isBold: this.props.pIsBold
    }
    this.changeBold = this.changeBold.bind(this);
  };
  changeBold(evt) {
    const isBold = evt.target.checked;
    this.setState({isBold: isBold});
    const SubmitB = this.props.callbackChildPropB;
    SubmitB(isBold);
  };
  render() {
    const styles = {
      toggle: {
        marginBottom: 16
      }
    };

    return (
      <MuiThemeProvider>
        <Toggle  onToggle={this.changeBold}  style={styles.toggle}/>
    </MuiThemeProvider>)
    // <input id="checkBox" checked={this.state.isBold} type="checkbox" onChange={this.changeBold}/>);
  }
}
