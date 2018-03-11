import React from 'react';

export class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      layoutType: '',
      layouts: [{
          type: 'HorizontalTimer',
          text: 'Horizontal',
          img: this.type + '.png',
          fontSize:39,
          fontSizeTxt:18,
          pColor:'red',
          pColorTxt:'blue'
        },
        {
          type: 'VerticalTimer',
          text: 'Vertical',
          img: this.type + '.png',
          fontSize:50,
          fontSizeTxt:22,
          pColor:'#417505',
          pColorTxt:'#F5A623'
        },
        {
          type: 'SeparateTimer',
          text: 'Separate',
          img: this.type + '.png',
          fontSize:50,
          fontSizeTxt:22,
          pColor:'#FFC2C2',
          pColorTxt:'#7ED321'
        },
        {
          type: 'CalendarTimer',
          text: 'Calendar',
          img: this.type + '.png',
          fontSize:39,
          fontSizeTxt:18,
          pColor:'#FFC2C2',
          pColorTxt:'#7ED321'
        }
      ]
    }
    this.ChangeLayout = this.ChangeLayout.bind(this);
    this.getLayouts = this.getLayouts.bind(this);
  };
  ChangeLayout(data) {
    const returnToPArent = this.props.callbackChildLayout;
    returnToPArent(data);
  };
  getLayouts() {
    const tThis = this;
    return this.state.layouts.map(function (item, i) {
      return ( <div key = {i} className = "smallBox" onClick = {() => tThis.ChangeLayout(item)} > { item.text} </div>
      );
    })
  }
  render() {

    return ( <div>
      <div className="layoutsBox"> {this.getLayouts()} </div> 
      </div>
    )
  }
}