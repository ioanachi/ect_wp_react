import React from 'react';
import ReactDOM from 'react-dom';

export class UserName extends React.Component {
  render() {
    return (<div className="userDiv">
      <label htmlFor="username">Name</label>
      <input className="username"/>
    </div>);
  }
}
