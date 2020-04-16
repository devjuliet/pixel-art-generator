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
            background: "#fff",
        };
        
    }

    componentDidUpdate(prevProps) {
        if (this.props.cellColor !== prevProps.cellColor) {
            let newColor = "#" + String(this.props.cellColor);
            this.setState({ cellBackground: newColor });
        }
    }

    handleCellColorOnClick = (event) => {
        event.target.style.cellBackground = this.props.cellColor;
        console.log(event.target.style.cellBackground);
    };

    createTable = () => {
        let table = [];

        // this need to be handle by a component ??
        for (let i = 0; i < this.state.height; i++) {
            let children = [];
            for (let j = 0; j < this.state.width; j++) {
                children.push(<td style={{'background-color': this.state.cellBackground}}></td>); // width
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
                        style={{ cellBackground: this.state.background }}
                        onClick={this.handleCellColorOnClick}
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
