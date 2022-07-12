import react, { Fragment } from "react";
import Counter from "./counter";
import Head from "./head";
import Product from "./product";

class Reusable extends react.Component {
    render(){
        return(
            <Fragment>
                <Head />
                <Product /> 
                <Counter />
            </Fragment>
        )
    }
}

export default Reusable;