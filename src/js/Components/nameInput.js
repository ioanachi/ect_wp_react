import React from 'react';
import ReactDOM from 'react-dom';

export class UserName extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      nameValue: this.props.nameValue
    }
    this.inputName = this.inputName.bind(this);
  }
  inputName(e) {
    const nameVal = e.target.value;
    const Submitx = this.props.NameParent;
    this.setState({nameValue:nameVal});
    Submitx(nameVal);
  };
  render() {
    return <input className="username" type="text" onInput={this.inputName} value={this.state.nameValue}/>;
  }
}
