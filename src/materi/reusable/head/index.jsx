import react from "react";
import styled from "styled-components";

const Ndas = styled.h1`
    box-shadow: 0px 4px 8px 0px black;
    max-width: 400px;
    height: 50px;
    background-color: lightblue;
    color: white;
    padding-right: 10px;
    text-align: right;
    margin: 20px auto 0px;
`;

class Head extends react.Component {
    render(){
        return(
            <Ndas> {this.props.finalProps} </Ndas>
        )
    }
}

export default Head;