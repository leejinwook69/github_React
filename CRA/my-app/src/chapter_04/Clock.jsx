import React from "react";

function Clock(props)
{
    return (
        <div>
            <h1>Hello, REACT ! </h1>
            <h2>Now it is : {new Date().toLocaleTimeString()}</h2>
        </div>

    );
}

export default Clock;