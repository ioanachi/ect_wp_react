import React from 'react';

export class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        layoutType: ''
    }
    this.ChangeLayout = this.ChangeLayout.bind(this);
  };
  ChangeLayout(evt) {
    const selectedLayout = evt.target;
    this.setState({layoutType: selectedLayout});
    const SubmitL = this.props.callbackChildLayout;
    SubmitL(selectedLayout);
  };
  render() {

    return (
     <div className="layoutsBox">
        <div className="smallBox" onChange={this.ChangeLayout}><img src="../img/picture.jpg" alt="" /></div>
        <div className="smallBox" onChange={this.ChangeLayout}>Second Layout</div>
        <div className="smallBox" onChange={this.ChangeLayout}>Third Layout</div>
        <div className="smallBox" onChange={this.ChangeLayout}>Fourth Layout</div>
        <div className="smallBox" onChange={this.ChangeLayout}>Fifth Layout</div>
        <div className="smallBox"  onChange={this.ChangeLayout}>Sixth Layout</div>
        <div className="smallBox" onChange={this.ChangeLayout}>Seventh Layout</div>
        </div>
    )
  }
}