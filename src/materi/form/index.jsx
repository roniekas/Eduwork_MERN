import React from "react";
import styled from "styled-components";
import Validation from "./pembahasan/validation";

const Container = styled.div`
    margin: 10px auto 0;
    padding: 10px;
    border: 1px solid white;
`;


class Form extends React.Component {
    
    render(){
        return(
            <Container>
                <Validation />
            </Container>
        )
    }
}

export default Form;