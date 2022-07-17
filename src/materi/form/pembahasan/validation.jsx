import React from "react";

const Input = ({type, nama, label, onChange}) =>  {
    return(
        <div>
            <label htmlFor={nama}>{label}</label><br /><br />
            <input type={type} name={nama} onChange={e => onChange(e.target.value)}></input>
            <br /><br />
        </div>
    )
}

const ShowErrors = ({errors}) => {
    return (
        <ul style={{color: 'red', marginleft: '-20px'}}>
            {
                errors.map((error, i) => <li key={i}>{error}</li>)
            }
        </ul>
    )
}
class Validation extends React.Component {
    state = {
        email: '',
        password: '',
        errors: []
    }

    handleSubmit = (e) => {
        e.preventDefault();
        
        let message = [];

        const {email, password} = this.state;
        
        if(email.length === 0 ) {
            message = [...message, 'Email Tidak boleh Kosong']
        }
        if(password.length === 0 ) {
            message = [...message, 'Password Tidak boleh Kosong']
        }
        if(message.length > 0 ){
            this.setState({
                errors: message
            });
        }
        console.log(this.state);
    }
    render(){
        const style = {
            width: '400px',
            margin: '100px auto 0',
            border: '1px solid red',
            padding: '10px'
        }
        return(
            <div style={style}>
                {
                    this.state.errors && <ShowErrors errors={this.state.errors} />
                }
                <h4>Login Kak</h4>
                <form onSubmit={this.handleSubmit}>
                <Input nama="username" type="text" label="Username : " onChange={value => this.setState({email: value})} />
                <Input nama="password" type="password" label="Password : " onChange={value => this.setState({password: value})} />
                <button type="submit">LOGGINN!</button>
                </form>
            </div>
        )
    }
}

export default Validation;