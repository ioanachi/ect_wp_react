import React from 'react';

export class LivePreview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      livePreview: false
    }
  };
  diffDays1() {
    console.log(this.props.pDate == '', "this.props.pDate");
    if (this.props.pDate !== '') {
      var oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
      var secondDate = new Date(this.props.pDate);
      var firstDate = new Date();
      if (secondDate.getTime() < firstDate.getTime()) {
        return 0;
      }
      return Math.round(Math.abs((firstDate.getTime() - secondDate.getTime()) / (oneDay))) + 1;
      // diferenta dintre milisecundele din viitor (de la 1970) si milisecundele actuale
      // (de la anul 1970) impartite la o zi(care este egala cu 24h* 60 min si 60 sec* 1000milisecunde)
    }
    return this.props.pDate;
  };

  render() {

    var divStyle = {
      fontSize: this.props.pFont + 'px',
      color: this.props.pColor,
      fontWeight: (
        this.props.pBold == true ? 'bold' : 'normal')
    };

    return (<div>
      <label className="containerLabels">Live preview</label>
      <div className="containerPreview">

        <h3>{this.props.pName}
        </h3>
        <h2 style={divStyle}>{this.diffDays1()}
        </h2>
      </div>
      <label className="containerLabels">Configuration</label>
    </div>);
  }
}
