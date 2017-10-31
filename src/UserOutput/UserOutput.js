import React from "react";
import './UserOutput.css'


const userOutput = props => {
    return (
        <div className={"UserOutput"}>
            <h1 style={props.style} onClick={props.changeUserName}>Username: {props.userName ? props.userName : "Anonymous"}</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aperiam architecto beatae, cum doloribus earum harum labore, libero maiores minus molestiae, non nostrum quibusdam voluptatum!</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam architecto dolor dolorem dolores eaque hic impedit necessitatibus officiis temporibus, voluptate! Dolores ea eum facere facilis fugit, iure iusto magnam perspiciatis porro quod ratione repellat similique tempora veniam.</p>
        </div>
    );
};

export default userOutput;