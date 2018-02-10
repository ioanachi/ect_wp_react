import React from 'react';

export class LivePreview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {timeout:[]};
    this.liveCountDown = this.liveCountDown.bind(this);
  };
  liveCountDown() {
    var tempTimeout = this.state.timeout;
    if(!tempTimeout[0]){
      tempTimeout.push(setTimeout(() => {
        this.setState({timeout: []});
      }, 1000));
    }

    if (this.props.pDate !== '') {
      var oneSecond = 1000;
      var oneMinute = 60 * oneSecond;
      var oneHour = 60 * oneMinute;
      var oneDay = 24 * oneHour; // hours*minutes*seconds*milliseconds
      var endDate = new Date(this.props.pDate);
      const localDate = new Date();
      const localTimeMiliseconds = localDate.getTime();
      //  localTimeSeconds secundele trecute din 1 jan 1970 pana la ora locala (asta face .getTime() de data locala
      // obtinuta cu newDate() )
      var localOffset = (localDate.getTimezoneOffset()) * oneMinute;
      var utc = localTimeMiliseconds + localOffset;
      var timezoneOffset = this.props.pTimezoneOffset;
      let hourToMiliseconds = this.props.pHour * oneHour;
      let minutesToMiliseconds = this.props.pMinutes * oneMinute;
      let date = new Date(this.props.pDate);
      var endTimeMiliseconds = date.getTime() + hourToMiliseconds + minutesToMiliseconds;

      // timezoneDateSeconds  timezone-ul ales in secunde (se inmulteste cu 3600000
      // pentru ca 1000 millseconds = 1 second, and 1 hour = 3600  seconds)
      // Therefore, converting hours to milliseconds involves multiplying by 3600 * 1000 = 3600000.
      var nowTimeMiliseconds = utc + parseInt(timezoneOffset);
      console.log(nowTimeMiliseconds/oneHour, ' parseInt(timezoneOffset) parseInt(timezoneOffset) parseInt(timezoneOffset)');

      const timeToCount = endTimeMiliseconds - nowTimeMiliseconds;

      const daysToCount = Math.floor(timeToCount / oneDay);

      var milisecLeftWithoutDays = timeToCount - daysToCount * oneDay;

      const hoursToCount = Math.floor(milisecLeftWithoutDays / oneHour);

      var milisecLeftWithoutHours = milisecLeftWithoutDays - hoursToCount * oneHour;

      const minutesToCount = Math.floor(milisecLeftWithoutHours / oneMinute);

      var milisecLeftWithoutMinutes = milisecLeftWithoutHours - minutesToCount * oneMinute;
      const secondsToCount = Math.floor(milisecLeftWithoutMinutes / 1000);

      var onlyHMS_Hours = Math.floor(timeToCount / oneHour);
      var onlyHMSNoHours = timeToCount - onlyHMS_Hours * oneHour;
      var onlyHMS_Minutes = Math.floor(onlyHMSNoHours / oneMinute);
      var onlyHMSNoHM = onlyHMSNoHours - onlyHMS_Minutes * oneMinute;
      var onlyHMS_Seconds = Math.floor(onlyHMSNoHM / oneSecond);

      var onlyMS_Min = Math.floor(timeToCount / oneMinute);
      var onlyMSNoMin = timeToCount - onlyMS_Min * oneMinute;
      var onlyMS_Sec = Math.floor(onlyMSNoMin / oneSecond);

      var onlySeconds = Math.floor(timeToCount / oneSecond);

      // Change the time value calculated in the previous step to a human-readable date/time string by
      // initializing a new Date() object with it, and calling the object's toLocaleString() method.
      if (endTimeMiliseconds < nowTimeMiliseconds) {
        return 0;
      }
      switch (this.props.pFormat) {
        case 'D:H:M:S':
          return daysToCount + " days  " + hoursToCount + 'hours  ' + minutesToCount + '  minutes   ' + secondsToCount + 'seconds left';
          break;
        case 'days':
          return daysToCount;
          break;
        case 'hours:minutes:seconds':
          return onlyHMS_Hours + ':' + onlyHMS_Minutes + ':' + onlyHMS_Seconds;
          break;
        case 'hours:minutes':
          return onlyHMS_Hours + ':' + onlyHMS_Minutes;
          break;
        case 'minutes:seconds':
          return onlyMS_Min + ':' + onlyMS_Sec;
          break;
        case 'seconds':
          return onlySeconds;
          break;
        case 'D then H:M:S':
          if (daysToCount == 0) {
            if (hoursToCount == 0) {
              if (minutesToCount == 0) {
                return secondsToCount + 'seconds left';
              }
              return minutesToCount + '  minutes   ' + secondsToCount + 'seconds left';
            }
            return hoursToCount + 'hours  ' + minutesToCount + '  minutes   ' + secondsToCount + 'seconds left'
          }
          return daysToCount + " days  " + hoursToCount + 'hours  ' + minutesToCount + '  minutes   ' + secondsToCount + 'seconds left';
          break;

        default:
          if (daysToCount == 0) {
            if (hoursToCount == 0) {
              if (minutesToCount == 0) {
                return secondsToCount + 'seconds left';
              }
              return minutesToCount + '  minutes   ' + secondsToCount + 'seconds left';
            }
            return hoursToCount + 'hours  ' + minutesToCount + '  minutes   ' + secondsToCount + 'seconds left'
          }
          return daysToCount + " days  " + hoursToCount + 'hours  ' + minutesToCount + '  minutes   ' + secondsToCount + 'seconds left';
          break;
      }

      // return Math.round(Math.abs((timezoneDateSeconds - endDate.getTime()) / (oneDay)) + 1);
      // diferenta dintre milisecundele din viitor (de la 1970) si milisecundele actuale
      // (de la anul 1970) impartite la o zi(care este egala cu 24h* 60 min si 60 sec* 1000milisecunde)
    }
    return "Pick an End Date"
  };

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
        <h2 style={divStyle}>{this.liveCountDown()}</h2>
      </div>
      <label className="containerLabels">Configuration</label>
    </div>);
  }
}
