import React, {Component} from "react";
import "./App.css";

// ***Import Components***
import Person from "./Person/Person";

const Katoi = () => {
    return (
        <section className={"Katoi"}>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci quas suscipit tempore. Eos itaque maxime modi molestiae nam porro quo quod reprehenderit ut. Quae, quia?</p>
        </section>
    );
};

class App extends Component {
    state = {
        dorms: [
            {_id: 4586, sect: "Mulwa"},
            {_id: 4258, sect: "Limboeno"},
            {_id: 7856, sect: "Shirikwa"}
        ]
    };

    onSwitchDorms = dm => {
        this.setState({
            dorms   : [
                {_id: 4586, sect: dm},
                {_id: 4258, sect: "Muroo"},
                {_id: 7856, sect: "Shirikwa"}
            ],
            toggling: false
        });
    };

    twowayBinding = e => {
        this.setState({
            dorms: [
                {_id: 4586, sect: "Mulwa"},
                {_id: 4258, sect: e.target.value},
                {_id: 7856, sect: "Shirikwa"}
            ]
        });
    };

    toggle = () => {
        const switcher = this.state.toggling;
        this.setState({
            toggling: !switcher
        });
    };

    render() {

        let people = null;

        if (this.state.toggling) {
            people = (
                <div>

                    <Person _id={this.state.dorms[0]._id} sect={this.state.dorms[0].sect} twoway={this.twowayBinding}/>
                    <Person _id={this.state.dorms[1]._id} sect={this.state.dorms[1].sect} clicked={this.onSwitchDorms.bind(this, "Tey-tey")}/>
                    <Person _id={this.state.dorms[2]._id} sect={this.state.dorms[2].sect}>
                        <Katoi/>
                    </Person>
                </div>
            );
        }
        return (
            <div>
                <button onClick={this.toggle}>Show</button>
                {people}
            </div>
        );
    }

}

export default App;
