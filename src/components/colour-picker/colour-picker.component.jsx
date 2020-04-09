import React, { Component } from "react";
import { ColorPicker } from "primereact/colorpicker";

class ColourPicker extends Component {
  constructor() {
    super();
    this.state = {
      color: null,
    };
  }

  render() {
    return (
      <div>
        <div className="content-section implementation">
          <h6>Choose color</h6>
          <ColorPicker
            inline="true"
            value={this.state.color}
            onChange={(e) => this.setState({ color: e.value })}
          ></ColorPicker>
          <p style={{ marginTop: ".5em" }}>
            Selected Color:{" "}
            <span
              style={{
                display: "inline-block",
                width: "32px",
                height: "32px",
                verticalAlign: "middle",
                backgroundColor: "#" + this.state.color,
              }}
            ></span>{" "}
            {this.state.color}{" "}
          </p>
        </div>
      </div>
    );
  }
}

export default ColourPicker;
