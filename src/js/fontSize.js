import React from 'react';

export class FontSize extends React.Component {
  render() {
    return (<div  className="fontdiv">
    <label htmlFor="fontInput">  Font Size</label>
    <input type="number" className="fontInput" value=""/>
    </div>);
  }
}
