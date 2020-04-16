import React, { Component } from "react";
import "./Canvas.css";

class Canvas extends Component {
    constructor() {
        super();
        this.state = {
            height: 20,
            width: 20,
            cellColor: null,
            cellBackground: "#fff",
            backgroundColor: "#fff"
        };
    }

    componentDidUpdate(prevProps) {
        if (this.props.cellColor !== prevProps.cellColor) {
            let newColor = "#" + String(this.props.cellColor);
            this.setState({ cellBackground: newColor });
        }
    }

    handleCellColor = (event) => {
        event.target.style.backgroundColor = this.state.cellBackground;
        console.log(event.target.style.backgroundColor);
    };

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
            <div className="center">
                {this.props.cellColor}
                <div >
                    <table
                        style={{ backgroundColor: this.state.backgroundColor }}
                        onClick={this.handleCellColor}
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
