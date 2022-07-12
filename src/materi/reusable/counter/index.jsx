import react from "react";
import styled from "styled-components";

const CounterContainer = styled.div`
    box-shadow: 0px 4px 8px 0px black;
    max-width: 400px;
    margin: 0px auto;
`;

const Button = styled.button`
    background-color: lightblue;
    color: blue;
    padding: 10px;
    border: none;
    margin: 5px;
`;

const Input = styled.input`
    width: 320px;
    height: 45px;
`;

class Counter extends react.Component {
    render(){
        return(
            <CounterContainer>
                <Button>-</Button>
                <Input disabled></Input>
                <Button>+</Button>
            </CounterContainer>
        )
    }
}

export default Counter;