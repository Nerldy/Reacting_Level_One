import React, {Component} from "react";
import "./App.css";

// ***Import Components***
import Person from "./Person/Person";

const Katoi = () => {
    return (
        <section className={'Katoi'}>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci quas suscipit tempore. Eos itaque maxime modi molestiae nam porro quo quod reprehenderit ut. Quae, quia?</p>
        </section>
    );
};

class App extends Component {
    render() {
        let appName = "DORMS";
        return (
            <div>
                <Person _id={4586} sect={"Mulwa"}/>
                <Person _id={5214} sect={"Limbung'a"}/>
                <Person _id={8756} sect={"Shirikwa"}>
                    <Katoi/>
                </Person>
            </div>
        );
    }

}

export default App;
