export default class {
  static mathFunc(obj) {
    // var tempTimeout = obj.timeout;
    // if (!tempTimeout[0]) {
    //   tempTimeout.push(setTimeout(() => {
    //      obj.tThis.setState({timeout: []});
    //   }, 1000));
    // }
    if (obj.pDate !== '') {
      var oneSecond = 1000;
      var oneMinute = 60 * oneSecond;
      var oneHour = 60 * oneMinute;
      var oneDay = 24 * oneHour; // hours*minutes*seconds*milliseconds
      var oneWeek = 7 * oneDay;
      var oneMonth = 4 * oneWeek;
      var oneYear = 12 * oneMonth;

      var endDate = new Date(obj.pDate);
      const localDate = new Date();
      const localTimeMiliseconds = localDate.getTime();
      //  localTimeSeconds secundele trecute din 1 jan 1970 pana la ora locala (asta face .getTime() de data locala
      // obtinuta cu newDate() )
      var localOffset = (localDate.getTimezoneOffset()) * oneMinute;
      var utc = localTimeMiliseconds + localOffset;
      var timezoneOffset = obj.pTimezoneOffset;
      let hourToMiliseconds = obj.pHour * oneHour;
      let minutesToMiliseconds = obj.pMinutes * oneMinute;
      let date = new Date(obj.pDate);
      var endTimeMiliseconds = date.getTime() + hourToMiliseconds + minutesToMiliseconds;

      // timezoneDateSeconds  timezone-ul ales in secunde (se inmulteste cu 3600000
      // pentru ca 1000 millseconds = 1 second, and 1 hour = 3600  seconds)
      // Therefore, converting hours to milliseconds involves multiplying by 3600 * 1000 = 3600000.
      var nowTimeMiliseconds = utc + parseInt(timezoneOffset);

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

      var YearsMWDHMS = Math.floor(timeToCount / oneYear);
      var timeWithoutY = timeToCount - YearsMWDHMS * oneYear;

      var MonthsYWDHMS = Math.floor(timeWithoutY / oneMonth);
      var timeWithoutM = timeWithoutY - MonthsYWDHMS * oneMonth;

      var WeeksYMDHMS = Math.floor(timeWithoutM / oneWeek);
      var timeWithoutW = timeWithoutM - WeeksYMDHMS * oneWeek;

      var DaysYMWHMS = Math.floor(timeWithoutW / oneDay);
      var timeWithoutD = timeWithoutW - DaysYMWHMS * oneDay;

      var HoursYMWDMS = Math.floor(timeWithoutD / oneHour);
      var timeWithoutH = timeWithoutD - HoursYMWDMS * oneHour;

      var MinutesYMWDHS = Math.floor(timeWithoutH / oneMinute);
      var timeWithoutM = timeWithoutH - MinutesYMWDHS * oneMinute;

      var SecondsYMWDHM = Math.floor(timeWithoutM / oneSecond);

      var weeksOnly = Math.floor(timeToCount / oneWeek);
      var yearsOnly = Math.floor(timeToCount / oneYear);
      var monthsOnly = Math.floor(timeToCount / oneMonth);

      // Change the time value calculated in the previous step to a human-readable date/time string by
      // initializing a new Date() object with it, and calling the object's toLocaleString() method.
      if (endTimeMiliseconds < nowTimeMiliseconds) {
        return 0;
      }
      switch (obj.pFormat) {
        case 'D2S':
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
        case 'years':
          return onlySeconds;
          break;
        case 'months':
          return onlySeconds;
          break;
        case 'weeks':
          return weeksOnly;
          break;
        case 'Y2S':
          if (YearsMWDHMS == 0) {
            if (MonthsYWDHMS == 0) {
              if (WeeksYMDHMS == 0) {

                if (DaysYMWHMS == 0) {
                  if (HoursYMWDMS == 0) {
                    if (MinutesYMWDHS == 0) {
                      return SecondsYMWDHM + ' seconds left';
                    };
                    return MinutesYMWDHS + '  minutes   ' + SecondsYMWDHM + ' seconds left';
                  };
                  return HoursYMWDMS + ' hours  ' + MinutesYMWDHS + '  minutes   ' + SecondsYMWDHM + 'seconds left';
                };
                return DaysYMWHMS + " days  " + HoursYMWDMS + ' hours  ' + MinutesYMWDHS + '  minutes   ' + SecondsYMWDHM + 'seconds left';

              };
              return WeeksYMDHMS + ' weeks ' + DaysYMWHMS + " days  " + HoursYMWDMS + ' hours  ' + MinutesYMWDHS + '  minutes   ' + SecondsYMWDHM + ' seconds left';

            };
            return MonthsYWDHMS + ' months ' + WeeksYMDHMS + ' weeks ' + DaysYMWHMS + " days  " + HoursYMWDMS + ' hours  ' + MinutesYMWDHS + '  minutes   ' + SecondsYMWDHM + ' seconds left';

          };
          return YearsMWDHMS + ' years  ' + MonthsYWDHMS + ' months ' + WeeksYMDHMS + ' weeks ' + DaysYMWHMS + " days  " + HoursYMWDMS + ' hours  ' + MinutesYMWDHS + '  minutes   ' + SecondsYMWDHM + ' seconds left';
          break;

        case 'D then H2S':
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
          if (YearsMWDHMS == 0) {
            if (MonthsYWDHMS == 0) {
              if (WeeksYMDHMS == 0) {
                if (DaysYMWHMS == 0) {
                  if (HoursYMWDMS == 0) {
                    if (MinutesYMWDHS == 0) {
                      return SecondsYMWDHM + ' seconds left';
                    };
                    return MinutesYMWDHS + '  minutes   ' + SecondsYMWDHM + ' seconds left';
                  };
                  return HoursYMWDMS + ' hours  ' + MinutesYMWDHS + '  minutes   ' + SecondsYMWDHM + 'seconds left';
                };
                return DaysYMWHMS + " days  " + HoursYMWDMS + ' hours  ' + MinutesYMWDHS + '  minutes   ' + SecondsYMWDHM + 'seconds left';
              };
              return WeeksYMDHMS + ' weeks ' + DaysYMWHMS + " days  " + HoursYMWDMS + ' hours  ' + MinutesYMWDHS + '  minutes   ' + SecondsYMWDHM + ' seconds left';
            };
            return MonthsYWDHMS + ' months ' + WeeksYMDHMS + ' weeks ' + DaysYMWHMS + " days  " + HoursYMWDMS + ' hours  ' + MinutesYMWDHS + '  minutes   ' + SecondsYMWDHM + ' seconds left';
          };
          return YearsMWDHMS + ' years  ' + MonthsYWDHMS + ' months ' + WeeksYMDHMS + ' weeks ' + DaysYMWHMS + " days  " + HoursYMWDMS + ' hours  ' + MinutesYMWDHS + '  minutes   ' + SecondsYMWDHM + ' seconds left';
          break;
      }
      // return Math.round(Math.abs((timezoneDateSeconds - endDate.getTime()) / (oneDay)) + 1);
      // diferenta dintre milisecundele din viitor (de la 1970) si milisecundele actuale
      // (de la anul 1970) impartite la o zi(care este egala cu 24h* 60 min si 60 sec* 1000milisecunde)
    }
    return "Pick an End Date"
  };
}
