import React from "react";

const dorm = props => {
    return (
        <div className={"Person"} style={props.style}>
            <h1>Dorm: {props.dorm}</h1>
            <h3>Color: {props.color}</h3>
            {props.dorm === "Nyanza" ? <div><h2>
                About {props.dorm}
            </h2>
                <hr/>
            </div> : null}
            {props.children}
        </div>
    );
};

export default dorm;