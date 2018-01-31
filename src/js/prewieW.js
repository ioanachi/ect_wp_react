import React from 'react';

export class Previews extends React.Component {
  constructor(props) {
    super(props);
  }
  selectAllText(e) {
    e.target.setSelectionRange(0, e.target.value.length);
    e.target.select();
  }
  render() {
    return (<div className="componentContainer">
      <p>
        <button type="submit" className="btn btn-success " name="button">Insert</button>
      </p>
      <p>
          [ect-EndDate name=&quot;{this.props.pName}&quot; date=&quot;{this.props.pDate}&quot; color=&quot;{this.props.pColor}&quot; font-size=&quot;{this.props.pFont}px&quot; ]
      </p>
    </div>)
  }
}
