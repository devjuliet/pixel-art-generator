import React, { Component } from "react";

class Canvas extends Component {
    constructor() {
        super();
        this.state = {
            height: 30,
            width: 30,
        };
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    componentDidMount(){


    }

    render() {
        return (
            <div>
                <table class="table table-bordered">
                    <tbody>
                
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Canvas;
