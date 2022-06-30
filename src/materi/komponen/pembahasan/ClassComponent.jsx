import React from "react";
import propsTypes from "prop-types";

class ClassComponent extends React.Component {
    state = {
        value: 0
    }

    handlePlus = () =>  {
        this.setState({
            value: this.state.value + 1
        });
    }

    handleMinus = () => {
        if(this.state.value > 0) {
            this.setState({
                value: this.state.value - 1
            });
        }
    }

    render() {
        return (
            <div>
                <h1>Heloo React - 19:59 30/06/2022</h1>
                <h6>Roni Eka Setiawan</h6>
                <h6>Props :  {this.props.nama}</h6>
                <hr />
                <p>Komponen ini dibuat dengan class component</p>
                <hr />
                <button onClick={this.handleMinus}>-</button>
                <span>{' '}{this.state.value}{' '}</span>
                <button onClick={this.handlePlus}>+</button>
            </div>
        )
    }

}

ClassComponent.propsType = {
    nama: propsTypes.string.isRequired
}

export default ClassComponent;