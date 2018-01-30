import React from 'react';
import ReactDOM from 'react-dom';

export class UserName extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      naMe:""
    }
    this.inputName = this.inputName.bind(this);
  };
inputName(e){
    const nameVal = e.target.value;
    this.setState ({naMe: nameVal});
    const namex = this.state.naMe;
    const Submitx = this.props.NameParent;
    Submitx(NameParent);
  };
  render() {
    return (<div className="userDiv">
      <label htmlFor="username">Name</label>
      <input className="username" type="text" onInput={this.inputName}/>
    </div>);
  }
}
