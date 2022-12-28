import React, { useEffect } from "react";

class App extends React.Component {
  constructor() {
    super();

    // Initial state
    this.state = { open: false };
  }

  toggle() {
    this.setState({
      open: !this.state.open,
    });
  }

  render() {
    return (
      <div className="collapseDiv">
        <button className="collapseButton" onClick={this.toggle.bind(this)}>
          {this.props.title}
        </button>
        <div id={"collapse" + (this.state.open ? " in" : "")}>
          <div className="collapseExpanded">{this.props.content}</div>
        </div>
      </div>
    );
  }
}
