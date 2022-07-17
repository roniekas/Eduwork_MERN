import React from "react";
import styled from "styled-components";

const Iput = styled.input`
    width: 100%;
    margin-top: 5px;
    border-radius: 5px;
    background-color: #d2cccc;
    border: 1px solid black;
    opacity: 0.6;
    height: 35px;
`;

const Lbl = styled.label`
    color: white;
    text-shadow: 1px 1px 1px black;
    margin-top: 10px;
`;

class Input extends React.Component {
    render(){
        return(
            <>
            <Lbl htmlFor={this.props.name}>{this.props.label}</Lbl>
            <Iput type={this.props.type} name={this.props.name} id={this.props.name} autoComplete="off" onChange={this.props.onChange}/>
            </>
        )
    }
}

export default Input;