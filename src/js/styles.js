import React from 'react';

export class Styles extends React.Component {
  render() {
    return (<div className="stylesDiv">
    <label htmlFor="stylesDrop">Style</label>
      <select className="stylesDrop">
        <option value="1">a</option>
        <option value="2">b</option>
        <option value="3">c</option>
        <option value="4">d</option>
      </select>
    </div>);
  }
}
