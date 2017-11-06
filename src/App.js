import React, {Component} from "react";
import "./App.css";

// ***Import Components***
import ValidationComponent from "./ValidationComponent/ValidationComponent";

import CharComponent from "./CharComponent/CharComponent";

class App extends Component {

    state = {
        stringLength: ""
    };

    onCheckLength = e => {
        this.setState({stringLength: e.target.value});
    };
    removerCharacter = () => {
        this.setState({stringLength: ""});
    };

    render() {
        return (
            <div>
                <input type="text" onChange={this.onCheckLength} value={this.state.stringLength === 0 ? "" : this.state.stringLength}/>
                <p>Input Length: {this.state.stringLength.length}</p>
                <ValidationComponent textLength={this.state.stringLength}/>
                <CharComponent removeChar={this.removerCharacter} inputText={this.state.stringLength}/>
            </div>
        );
    }
}

export default App;
