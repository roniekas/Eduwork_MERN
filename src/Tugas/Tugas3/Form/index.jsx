import React from "react";
import styled from "styled-components";

const Validator = require('Validator');
const Wrapper = styled.div`
    max-width: 300px;
    padding: 10px;
    border: 1px solid grey;
    border-radius: 10px;
    box-shadow: 5px 5px 5px black;
    margin: 50px auto 0px;
    background: rgb(108,105,105);
    background: linear-gradient(346deg, rgba(108,105,105,1) 0%, rgba(119,119,119,0.8231464460784313) 74%, rgba(202,204,204,1) 100%);
`;

const Judul = styled.h5`
    text-align: center;
    font-weight: bold;
    font-size: 30px;
    text-decoration: wavy;
`;

const Btn = styled.button`
    margin: 15px auto;
    padding: 5px;
    width: 100px;
    color: gray;
    border-radius: 10px;
    border: none;
`;

const Input = styled.input`
    width: 100%;
    margin-top: 5px;
    border-radius: 5px;
    background-color: #d2cccc;
    border: 1px solid black;
    opacity: 0.6;
    height: 35px;
`;

const Lbl = styled.label`
    color: white;
    text-shadow: 1px 1px 1px black;
    margin-top: 10px;
`;
const ShowErrors = ({errors}) => {
    return (
        <ul style={{color: 'red', marginleft: '-20px'}}>
            {
                errors.map((error, i) => <li key={i}>{error}</li>)
            }
        </ul>
    )
}




class Formm extends React.Component {
    state = {
        nama: '',
        password: '',
        email: '',
        errors: []
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            name: this.state.nama,
            password: this.state.password,
            Email: this.state.email
        };
        
        const rules = {
            name: 'required|min:6|max:25|string',
            Email: 'required|email',
            password: 'required|string|min:6|max:25'
        };

        const v = new Validator(data, rules);
        if (v.passes()) {
            alert(`
            TERIMA KASIH TELAH MELAKUKAN REGISTRASI 
            =======================================
        
            Nama Anda : ${this.state.nama}
            Password Anda : ${this.state.password}
            Email Anda : ${this.state.email}
        
            ======================================`);
        } else if (v.fails()) {
            const errors = v.getErrors();
            console.log(errors)
            this.setState({
                errors: [
                    errors.name,
                    errors.password,
                    errors.Email
                ]
            })
        }

        // this.setState({
        //     nama: '',
        //     password: '',
        //     email: '',
        //     errors: []
        // })
    }

    handleOnChange = (e) => {
        if(e.target.name === "nama") {
            this.setState({nama: e.target.value})
        } else if (e.target.name === "password") {
            this.setState({password: e.target.value})
        } else if (e.target.name === "email") {
            this.setState({email: e.target.value})
        }
    }

    render(){
        return(
            <Wrapper> 
                <form onSubmit={this.handleSubmit}>
                {
                    this.state.errors && <ShowErrors errors={this.state.errors} />
                }
                    <Judul>Please Register</Judul>
                    <Lbl htmlFor="nama">Masukkan Nama</Lbl>
                    <Input type="text" name="nama" onChange={this.handleOnChange}/>
                    <Lbl htmlFor="password">Masukkan Password</Lbl>
                    <Input type="password" name="password" onChange={this.handleOnChange}/>
                    <Lbl htmlFor="email">Masukkan Email</Lbl>
                    <Input type="email" name="email" onChange={this.handleOnChange}/>
                    <Btn>DAFTAR </Btn>
                </form>
            </Wrapper>
        )
    }
}

export default Formm;