import React from 'react';

export class LivePreview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      livePreview:  false
    }

  };

  render() {
      return (
        <div className="containerPreview">

        </div>
    );
  }
}
