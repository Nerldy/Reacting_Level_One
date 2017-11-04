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


    deleteDorm = index => {
        const dorm = [...this.state.dorms];
        dorm.splice(index, 1);
        this.setState({dorms: dorm});
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
                    {this.state.dorms.map((list, index) => {
                        return <Person deletePeep={() => this.deleteDorm(index)} _id={list._id} sect={list.sect} key={list._id}/>;
                    })}
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
