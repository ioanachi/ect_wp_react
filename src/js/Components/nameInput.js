import React from 'react';
import ReactDOM from 'react-dom';

export class UserName extends React.Component {
  constructor(props) {
    super(props);
    this.inputName = this.inputName.bind(this);
  }
  inputName(e) {
    const nameVal = e.target.value;
    const Submitx = this.props.NameParent;
    Submitx(nameVal);
  };
  render() {
    return <input className="username" type="text" onInput={this.inputName}/>;
  }
}
