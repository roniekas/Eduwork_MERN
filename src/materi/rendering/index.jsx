import React, { Fragment } from "react";
import Varibale from "./pembahasan/variable";
import Conditional from "./pembahasan/conditional";
import List from "./pembahasan/list";

class Rendering extends React.Component {
    render(){
        return(
            <Fragment>
                <Varibale />
                <Conditional />
                <List />
            </Fragment>
        )
    }
}

export default Rendering;