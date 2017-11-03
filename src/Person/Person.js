import React from "react";
import "./Person.css";

const person = props => {
    return (
        <header className={"Person"}>
            <h3>ID: {props._id}</h3>
            <p onClick={props.clicked}><strong>Sect: <em>{props.sect}</em></strong></p>
            {props.children}

            <input type="text" onChange={props.twoway}/>
        </header>
    );
};

export default person;


