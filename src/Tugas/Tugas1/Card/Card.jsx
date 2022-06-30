import React from "react";

class Card extends React.Component {
    render(){
        return(
            <div className="container mt-3">
                <div className="row justify-content-md-center text-center">
                    <div className="card w-75" style={{width: "58rem"}}>
                    <img src="https://source.unsplash.com/random/820x200" className="card-img-top" alt="Img dari unsplash, Mohon untuk terhubung ke internet, untuk koneksi bootstrap juga"/>
                        <div className="card-body">
                            <h5 className="card-title">Breaking News - {this.props.berita}</h5>
                            <p className="card-text">Berita Terbaru dari Rons News.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card;