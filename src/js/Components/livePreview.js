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
timezoneRequired(){
const localDate = new Date();
const localTimeSeconds = localDate.getTime();
//  localTimeSeconds secundele trecute din 1 jan 1970 pana la ora locala (asta face .getTime() de data locala
// obtinuta cu newDate() )
console.log(localTimeSeconds, 'localUtc');
var localOffset = localDate.getTimezoneOffset() * 60000;
var utc = localTimeSeconds+ localOffset;
var timezoneOffset = this.props.pTimezoneOffset;
 // timezoneDateSeconds  timezone-ul ales in secunde (se inmulteste cu 3600000
// pentru ca 1000 millseconds = 1 second, and 1 hour = 3600  seconds)
// Therefore, converting hours to milliseconds involves multiplying by 3600 * 1000 = 3600000.
 var timezoneDateSeconds =  utc + timezoneOffset*3600000;
 // Change the time value calculated in the previous step to a human-readable date/time string by
 // initializing a new Date() object with it, and calling the object's toLocaleString() method.
 var timezoneDateH = new Date(timezoneDateSeconds);
console.log(timezoneDateH, 'timezoneDateH');
// return timezoneDateH;


}
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
        <h2 style={divStyle}>{this.diffDays1()}</h2>
        <h2 >{this.timezoneRequired()}</h2>
      </div>
      <label className="containerLabels">Configuration</label>
    </div>);
  }
}
