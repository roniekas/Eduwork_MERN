import React from "react";

function FunctionalComponent(props) {
    return (
        <h1>Ini adalah dari functional komponen {props.nama}</h1>
    )
}

FunctionalComponent.defaultProps = {
    nama: "//defaultprops"
}

export default FunctionalComponent;