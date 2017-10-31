import React, {Component} from "react";
import "./App.css";

// ***Import Components***
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";


class App extends Component {
    state = {
        userName: "Anonymous"
    };

    onUserNameClick = event => {
        this.setState({
            userName: event.target.value
        });
    };

    render() {
        const style = {
            color: "red"
        };
        return (
            <div>
                <UserInput changed={this.onUserNameClick} currentName={this.state.userName}/>
                <UserOutput userName={"Armin"}/>
                <UserOutput style={style} userName={this.state.userName}/>
                <UserOutput style={style} userName={this.state.userName}/>
                <UserOutput changeUserName={this.onUserNameClick}/>
            </div>
        );
    }
}

export default App;
