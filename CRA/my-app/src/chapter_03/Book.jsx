import React from "react";

function Book(props) {
    return (
        <div>
            <h1>Here is a Book named {props.name}.</h1>
            <h2>With {props.numOfPage}pages.</h2>
        </div>
    );
}

export default Book;