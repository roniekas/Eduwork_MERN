import React from "react";
import ClassComponent from "./pembahasan/ClassComponent";
import FunctionalComponent from "./pembahasan/FunctionalComponent";

class Komponen extends React.Component {

    render() {
        return (
            <div>
                <ClassComponent nama={23} />
                <FunctionalComponent />
            </div>
        )
    }

}

export default Komponen;