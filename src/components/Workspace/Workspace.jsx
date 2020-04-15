import React, { Component } from "react";
import { ColorPicker } from "primereact/colorpicker";
import Canvas from "../Canvas/Canvas";

import Eraser from "../Eraser/Eraser";
import Brush from "../Brush/Brush";

class Workspace extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: null,
        };
        this.handleChange = this.handleChange.bind(this);
        this.updateColor = this.updateColor.bind(this);
    }

    updateColor(e) {
        this.setState({ color: e.value });
    }

    handleChange() {
        this.setState(
            { eraser: !this.state.eraser },
            { brush: !this.state.brush }
        );
    }

    render() {
        return (
            <div>
            <div className="d-flex justify-content-start">
                <Eraser />
                <Brush />
                <div className="content-section implementation">
                    <h6>Choose color</h6>
                    <ColorPicker
                        inline="true"
                        value={this.state.color}
                        onChange={this.updateColor}
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
            <Canvas cellColor={this.state.color}/>
            </div>
        );
    }
}

export default Workspace;
