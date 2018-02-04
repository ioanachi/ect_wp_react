// import React from 'react';
// import TimezonePicker from 'react-bootstrap-timezone-picker';
// import 'react-bootstrap-timezone-picker/dist/react-bootstrap-timezone-picker.min.css';
//
// export class Timezones extends React.Component {
//   constructor(props) {
//     super(props);
//     state = {
//       currentValue: '',
//       absolute: false
//     };
//     this.handleChange = this.handleChange.bind(this);
//     this.handleToggle = this.handleToggle.bind(this);
//   }
//   handleChange(newValue) {
//     this.setState({currentValue: newValue})
//   };
//
//   handleToggle() {
//     this.setState({
//       absolute: !this.state.absolute
//     });
//   }
//
//   render() {
//     return (<div>
//       <div>
//         Current list overflow layout option:
//         <button onClick={this.handleToggle} style={{
//             marginLeft: '10px'
//           }}>
//           {
//             this.state.absolute
//               ? 'Absolute'
//               : 'Relative'
//           }
//         </button>
//       </div>
//       <TimezonePicker placeholder="Select timezone..." onChange={this.handleChange} absolute={this.state.absolute} value={this.state.currentValue}/>
//       <div>Current Value:
//         <b>{this.state.currentValue}</b>
//       </div>
//     </div>);
//   }
// }
