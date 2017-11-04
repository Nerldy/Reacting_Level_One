import React, {Component} from "react";
import "./App.css";

// ***Import Components***
import ShoppingCart from "./ShoppingCart/shoppingCart";


class App extends Component {
    state = {
        myList: [
            {_id: 1, cart: "shoes"},
            {_id: 2, cart: "toy cars"},
            {_id: 3, cart: "make up"},
            {_id: 4, cart: "jewlery"}
        ]
    };

    render() {
        const mappedList = this.state.myList.map(shopping => <div className={'Cart'} key={shopping._id}>{shopping.cart}</div>);
        return (
            <div>
                <ShoppingCart listItems={mappedList}/>
            </div>
        );
    }
}

export default App;
