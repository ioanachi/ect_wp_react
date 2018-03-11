import React from 'react';

export class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      layoutType: '',
      layouts: [{
          type: 'HorizontalTimer',
          text: 'Horizontal Layout',
          img: this.type + '.png'
        },
        {
          type: 'VerticalTimer',
          text: 'Vertical Layout',
          img: this.type + '.png'
        },
        {
          type: 'SeparateTimer',
          text: 'Separate Layout',
          img: this.type + '.png'
        },
        {
          type: 'CalendarTimer',
          text: 'Calendar Layout',
          img: this.type + '.png'
        }
      ]
    }
    this.ChangeLayout = this.ChangeLayout.bind(this);
    this.getLayouts = this.getLayouts.bind(this);
  };
  ChangeLayout(type) {
    const returnToPArent = this.props.callbackChildLayout;
    returnToPArent(type);
  };
  getLayouts() {
    const tThis = this;
    return this.state.layouts.map(function (item, i) {
      return ( <div key = {i} className = "smallBox" onClick = {() => tThis.ChangeLayout(item.type)} > { item.text} </div>
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