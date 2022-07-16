import React from "react";

class Varibale extends React.Component {
    state={
        a: null,
        b: true,
        c: ' ',
        d: 0
    }
    render(){
        return(
            <div>
                <h1>a : {this.state.a} # ga dirender - b : {this.state.b} # ga dirender - c : {this.state.c} # ga dirender - d : {this.state.d} # dirender - e : {this.state.e} #di render sebagai undefined</h1>
            </div>
        )
    }
}

export default Varibale;