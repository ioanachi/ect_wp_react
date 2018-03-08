import React from 'react';
import EndDateContainer from '../containers/endDateContainer';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

export class EndDate extends React.Component {
  
  render() {
    return (
      <div> 
        <EndDateContainer />
      </div>
    );
  }
}
