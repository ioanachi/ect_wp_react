import React from 'react';

export class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      layoutType: '',
      layouts: [{
          type: 'horizontalTimer',
          text: 'Horizontal Layout',
          img: this.type + '.png'
        },
        {
          type: 'verticalTimer',
          text: 'Vertical Layout',
          img: this.type + '.png'
        }
      ]
    }
    this.ChangeLayout = this.ChangeLayout.bind(this);
    this.getLayouts = this.getLayouts.bind(this);
  };
  ChangeLayout(type) {
    const SubmitL = this.props.callbackChildLayout;
    SubmitL(type);
  };
  getLayouts() {
    const tThis = this;
    return this.state.layouts.map(function (item, i) {
      return ( <div key = {i} className = "smallBox" onClick = {() => tThis.ChangeLayout(item.type)} > { item.text} </div>
      );
    })
  }
  render() {

    return ( <
      div >
      <
      div className = "layoutsBox" > {
        this.getLayouts()
      } <
      /div> < /
      div >
    )
  }
}