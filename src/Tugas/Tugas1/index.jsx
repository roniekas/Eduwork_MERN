// @ts-nocheck
import React, { Fragment } from "react";
import Card from "./Card/Card";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";

class Tugas1 extends React.Component {
    render(){
        return(
            <Fragment>
                <Navbar />
                <Card berita="Bencana Alam"/>
                <Card berita="Otomotif"/>
                <Footer />
            </Fragment>
        )
    }
}

export default Tugas1;