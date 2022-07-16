import React from "react";

class Conditional extends React.Component {
    state = {
        isLoading: true
    }
    render() {
        setTimeout(() => {
            this.setState({
                isLoading: false
            })
        }, 3000);
        return(
            <div>
                {this.state.isLoading ? <h1>Loading dulu ea</h1> : <h1>Welcome Brooo</h1>}
            </div>
        )
    }
}

export default Conditional;