import React from "react";
import "./shoppingCart.css";

const shoppingCart = props => {
    return (
        <div>
            {props.listItems}
        </div>
    );
};

export default shoppingCart;