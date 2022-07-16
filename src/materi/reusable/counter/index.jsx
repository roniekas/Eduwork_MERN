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
    text-align: center;
`;

class Counter extends react.Component {
    state = {
        value: 0
    }

    setStateUp = () => {
        this.setState({
            value : this.state.value + 1
        }, () => this.props.propsReceive(this.state.value))
    }

    setStateDown = () => {
        if(this.state.value > 0 ) {
            this.setState({
                value : this.state.value - 1
            }, () => this.props.propsReceive(this.state.value))
        }
    }
    render(){
        return(
            <CounterContainer>
                <Button onClick={this.setStateDown}>-</Button>
                <Input disabled value={this.state.value}></Input>
                <Button onClick={this.setStateUp}>+</Button>
            </CounterContainer>
        )
    }
}

export default Counter;