import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyAwesomeReactComponent from './MyAwesomeReactComponent';
import TextField from 'material-ui/TextField';

export class UserName extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameValue: this.props.nameValue
    }
    this.inputName = this.inputName.bind(this);
  }
  inputName(e) {
    const nameVal = e.target.value;
    const Submitx = this.props.NameParent;
    this.setState({nameValue: nameVal});
    Submitx(nameVal);
  };
  render() {
    return (<MuiThemeProvider><TextField onChange={this.inputName} value={this.state.nameValue} hintText="Timer Name"/></MuiThemeProvider>)
    // <input className="username" type="text" onInput={this.inputName} value={this.state.nameValue}/>;
  }
}
