import React from "react";

class Navbar extends React.Component {
    render(){
        return(
            <div className="container">
                <nav className="navbar navbar-dark navbar-expand-lg bg-primary">
                    <div className="container-fluid">
                        <p className="navbar-brand">Rons Aplication </p>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarScroll">
                        <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                            <li className="nav-item">
                            <p className="nav-link active" aria-current="page" >Home</p>
                            </li>
                            <li className="nav-item dropdown">
                            <p className="nav-link dropdown-toggle"  id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Pertemuan
                            </p>
                            <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                                <li><p className="dropdown-item" >Pertemuan 1</p></li>
                                <li><p className="dropdown-item" >Pertemuan 2</p></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><p className="dropdown-item" >Pertemuan 3</p></li>
                            </ul>
                            </li>
                        </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar;
