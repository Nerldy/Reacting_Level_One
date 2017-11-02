import React, {Component} from "react";
import "./App.css";

// ***Import Components***
import Dorm from "./Dorms/dorms";

const NyanzaDetails = props => {
    return (
        <section>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus assumenda at culpa distinctio error esse fugit libero maxime minima mollitia nam necessitatibus nemo nesciunt officiis perferendis perspiciatis placeat quaerat quo rerum sed tempora, temporibus tenetur voluptate.</p>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam animi, aperiam aspernatur, consequatur dolorem enim expedita fugit ipsa ipsam minima nam, necessitatibus nemo nisi non nostrum odit officiis omnis possimus quis repudiandae tenetur voluptas voluptatibus. Dolorem laboriosam perferendis quidem sint! Doloremque ducimus illum in nobis numquam saepe.</p>
        </section>
    );
};

class App extends Component {

    render() {
        const style = {
            border   : "solid red thin",
            textAlign: "center",
            margin   : "10px auto",
            padding  : "20px",
            width    : "65%"
        };
        return (
            <div>
                <Dorm style={style} dorm={"Elgon"} color={"Green"}/>
                <Dorm style={style} dorm={"Mt. Kenya"} color={"Red"}/>
                <Dorm style={style} dorm={"Nyanza"} color={"Blue"}>
                    <NyanzaDetails/>
                </Dorm>
            </div>
        );
    }
}


export default App;

