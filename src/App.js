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

        return (
            <div>
                <Dynamo/>
                <button onClick={this.onMakeList}>{this.state.makeList ? "Hide" : "Show"} List</button>

                {this.state.makeList ?
                    <ul>
                        <li>Item 1</li>
                        <li>Item 2</li>
                        <li>Item 3</li>
                        <li>Item 4</li>
                    </ul>
                    : null
                }
            </div>
        );
    }
}

export default App;
