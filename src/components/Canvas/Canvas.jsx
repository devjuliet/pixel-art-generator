import React, { Component } from "react";
import "./Canvas.css";

class Canvas extends Component {
    constructor() {
        super();
        this.state = {
            height: 15,
            width: 30,
        };
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    createTable = () => {
        let table = [];

        // this need to be handle by a component
        for (let i = 0; i < this.state.height; i++) { 
            let children = [];
            for (let j = 0; j < this.state.width; j++) {
                children.push(<td></td>); // width
            }
            //this too
            table.push(<tr>{children}</tr>); // height
        }
        return table;
    };

    render() {
        return (
            <div  className="center">
                <table >{this.createTable()}</table>
            </div>
        );
    }
}

export default Canvas;
