// @ts-nocheck
import React, { Fragment } from "react";
import Atas from "./Atas";
import Bio from "./Bio";
import Skill from "./Skill";
import Tech from "./Tech";
import Forem from "./Forem";
import Footer from "./Footer";


class Tugas2 extends React.Component {
    render(){
        return(
            <Fragment>
                <Atas></Atas>
                <Bio></Bio>
                <Skill></Skill>
                <Tech></Tech>
                <Forem></Forem>
                <Footer></Footer>
            </Fragment>
        )
    }
}

export default Tugas2;