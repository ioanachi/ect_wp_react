import React from 'react';

export class LivePreview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      days: '',
      hours: '',
      minutes: '',
      seconds:''
    }
this.forceRerender =this.forceRerender.bind(this);
  };
  forceRerender() {
    this.forceUpdate();
  }
  diffDays1() {
    setTimeout(()=>{
      this.forceRerender();
    },1000);
    if (this.props.pDate !== '') {
      var oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
      var oneHour = 60 * 60 * 1000;
      var oneMinute = 60 * 1000;
      var endDate = new Date(this.props.pDate);
      const localDate = new Date();
      const localTimeMiliseconds = localDate.getTime();
      //  localTimeSeconds secundele trecute din 1 jan 1970 pana la ora locala (asta face .getTime() de data locala
      // obtinuta cu newDate() )
      var localOffset = (localDate.getTimezoneOffset())*oneMinute;

      var utc = localTimeMiliseconds + localOffset;

      var timezoneOffset = this.props.pTimezoneOffset;


      let hourToMiliseconds = this.props.pHour * oneHour;
      let minutesToMiliseconds = this.props.pMinutes * oneMinute;
      let date = new Date(this.props.pDate);

      var endTimeMiliseconds = date.getTime() + hourToMiliseconds + minutesToMiliseconds;

      // timezoneDateSeconds  timezone-ul ales in secunde (se inmulteste cu 3600000
      // pentru ca 1000 millseconds = 1 second, and 1 hour = 3600  seconds)
      // Therefore, converting hours to milliseconds involves multiplying by 3600 * 1000 = 3600000.
      var nowTimeMiliseconds = utc + parseInt(timezoneOffset) ;

      const timeToCount = endTimeMiliseconds - nowTimeMiliseconds;

      const daysToCount = Math.floor(timeToCount / oneDay);

      var milisecLeftWithoutDays = timeToCount - daysToCount * oneDay;

      const hoursToCount = Math.floor(milisecLeftWithoutDays / oneHour);

      var milisecLeftWithoutHours = milisecLeftWithoutDays - hoursToCount * oneHour;

      const minutesToCount = Math.floor(milisecLeftWithoutHours / oneMinute);

      var milisecLeftWithoutMinutes = milisecLeftWithoutHours - minutesToCount * oneMinute;
      const secondsToCount = Math.floor(milisecLeftWithoutMinutes / 1000);





      // Change the time value calculated in the previous step to a human-readable date/time string by
      // initializing a new Date() object with it, and calling the object's toLocaleString() method.
      if (endTimeMiliseconds < nowTimeMiliseconds) {
        return 0;
      }
      return daysToCount + " days  " + hoursToCount + 'hours  ' + minutesToCount + '  minutes   ' + secondsToCount + 'seconds left';

      // return Math.round(Math.abs((timezoneDateSeconds - endDate.getTime()) / (oneDay)) + 1);
      // diferenta dintre milisecundele din viitor (de la 1970) si milisecundele actuale
      // (de la anul 1970) impartite la o zi(care este egala cu 24h* 60 min si 60 sec* 1000milisecunde)
    }

  };

  // liveCountDown() {
  //
  //
  //     console.log(daysToCount);;
  //
  // }
  // timezoneRequired() {
  //   const localDate = new Date();
  //   const localTimeSeconds = localDate.getTime();
  //     localTimeSeconds secundele trecute din 1 jan 1970 pana la ora locala (asta face .getTime() de data locala
  //    obtinuta cu newDate() )
  //   console.log(localTimeSeconds, 'localUtc');
  //   var localOffset = localDate.getTimezoneOffset();
  //   console.log(localOffset * 3600000, 'localOffset');
  //
  //   var utc = localTimeSeconds + localOffset;
  //
  //   var timezoneOffset = this.props.pTimezoneOffset;
  //    timezoneDateSeconds  timezone-ul ales in secunde (se inmulteste cu 3600000
  //    pentru ca 1000 millseconds = 1 second, and 1 hour = 3600  seconds)
  //    Therefore, converting hours to milliseconds involves multiplying by 3600 * 1000 = 3600000.
  //   var timezoneDateSeconds = utc + (timezoneOffset * 3600000);
  //    Change the time value calculated in the previous step to a human-readable date/time string by
  //    initializing a new Date() object with it, and calling the object's toLocaleString() method.
  //   var timezoneDateH = JSON.stringify(new Date(timezoneDateSeconds));
  //   console.log(timezoneDateH, 'timezoneDateHtimezoneDateHtimezoneDateHtimezoneDateHtimezoneDateH');
  //
  //   var timeInZone = timezoneDateH.split('T')[1]
  //   console.log(timeInZone.split('.')[0], 'timezoneDateH');
  //   return timeInZone.split('.')[0];
  //
  // }
  render() {
    var divStyle = {
      fontSize: this.props.pFont + 'px',
      color: this.props.pColor,
      fontWeight: (
        this.props.pBold == true
        ? 'bold'
        : 'normal')
    };

    return (<div>
      <label className="containerLabels">Live preview</label>
      <div className="containerPreview">

        <h3>{this.props.pName}
        </h3>
        <h2 style={divStyle}>{this.diffDays1()}</h2>


      </div>
      <label className="containerLabels">Configuration</label>
    </div>);
  }
}
