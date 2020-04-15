import React, { Component } from "react";
import "./Canvas.css";

class Canvas extends Component {
    constructor() {
        super();
        this.state = {
            height: 15,
            width: 30,
            cellColor: null,
            cellBackground: "#fff",
        };
    }

    componentDidUpdate(prevProps) {
        if (this.props.cellColor !== prevProps.cellColor) {
            let newColor = "#" + String(this.props.cellColor);
            this.setState({ cellBackground: newColor });
        }
    }

    createTable = () => {
        let table = [];

        // this need to be handle by a component ??
        for (let i = 0; i < this.state.height; i++) {
            let children = [];
            for (let j = 0; j < this.state.width; j++) {
                children.push(<td></td>); // width
            }
            //this too ??
            table.push(<tr>{children}</tr>); // height
        }
        return table;
    };

    render() {
        return (
            <div>
                {this.props.cellColor}
                <div className="center">
                    <table
                        style={{ backgroundColor: this.state.cellBackground }}
                    >
                        {this.createTable()}
                    </table>
                </div>
                {this.state.cellBackground}
            </div>
        );
    }
}

export default Canvas;
