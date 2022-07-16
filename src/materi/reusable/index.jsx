import react, { Fragment } from "react";
import Head from "./head";
import Product from "./product";

class Reusable extends react.Component {
    state = {
        value: 0
    }

    handleValue = (data) => {
        this.setState({value: data.data});
    }
    render(){
        return(
            <Fragment>
                <Head finalProps={this.state.value}/>
                <Product receiveValue={this.handleValue}/> 
            </Fragment>
        )
    }
}

export default Reusable;