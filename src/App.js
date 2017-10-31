import React, {Component} from "react";
import "./App.css";

// ***Import Components***
import Dynamo from "./Dynamo/Dynamo";

class App extends Component {

    state = {
        makeList: false
    };

    onMakeList = () => {
        const myList = this.state.makeList;

        this.setState({makeList: !myList});
    };

    render() {

        let createList = null;

        if (this.state.makeList) {
            createList = (
                <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                    <li>Item 4</li>
                </ul>
            );
        }


        return (
            <div>
                <Dynamo/>
                <button onClick={this.onMakeList}>{this.state.makeList ? "Hide" : "Show"} List</button>

                {createList}
            </div>
        );
    }
}

export default App;
