import react from "react";
import styled from "styled-components";
import Counter from "../counter";

const ImgSrc = 'https://source.unsplash.com/collection/190727/400x200';

const Container = styled.div`
    box-shadow: 0px 4px 8px 0px black;
    max-width: 400px;
    margin: 0px auto;
`;

const Gambar = styled.img`
    max-width: 400px;
    height: 200px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
`;

const Price = styled.h1`
    color: gray;
    font-size: 35px;
    font-style: italic;
    font-weight: 200;
    text-align: center;
    margin-top: 5px;
`;

const Dev = styled.p`
    color: black;
    font-size: 15px;
    text-align: center;
    margin-top: 3px;
`;

const Judul = styled.h3`
    color: black;
    font-size: 25px;
    text-align: center;
    margin: 5px 0px;
`;


class Product extends react.Component {
    propsHandle = (data) => {
        this.props.receiveValue({data});
    }
    render(){
        return(
            <Container>
                <Gambar src={ImgSrc} alt="None"></Gambar>
                <Judul>Detailed Product</Judul>
                <Price>Rp. 123.000,-</Price>
                <Dev>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti, et?</Dev>
                <Counter propsReceive={this.propsHandle}/>
            </Container>
        )
    }
}

export default Product;