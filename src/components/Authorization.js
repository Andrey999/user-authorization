import React, { Component } from 'react';
import {Link} from "react-router-dom";
import  './Authorization.css'

class Authorization extends Component {
    constructor(props) {
        super(props)
        this.state = {
            login: '',
            pass: ''
        }
    }

    handleChange = (e) => {
        let target = e.target.name
         if(target === 'login') this.setState({ login: e.target.value })
         if(target === 'pass') this.setState({ pass: e.target.value })
    }

    handleSubmit  = (e) => {
        e.preventDefault()
        let arrLogin = []
        let arrPassword = []
        let login = this.state.login
        let pass = this.state.pass
        if (localStorage.getItem('login') || localStorage.getItem('pass') == null) {
            arrLogin.push(login)
            arrPassword.push(pass)
            localStorage.setItem('login', JSON.stringify(arrLogin))
            localStorage.setItem('pass', JSON.stringify(arrPassword))
        }
        else {
            let arrLogin = JSON.parse(localStorage.getItem('login'))
            let arrPassword = JSON.parse(localStorage.getItem('pass'))
            arrLogin.push(login)
            arrPassword.push(pass)
            localStorage.setItem('login', JSON.stringify(arrLogin))
            localStorage.setItem('pass', JSON.stringify(arrPassword))
        }
    }


    render() {
        const { login, pass } = this.state
        return (
            <div>
                <form className="wrap-form">
                    <input type="text"
                           placeholder="Введите логин"
                           className=""
                           name="login"
                           value={login}
                           onChange={this.handleChange}
                    />
                    <input type="password"
                           placeholder="Введите пароль"
                           value={pass}
                           name="pass"
                           onChange={this.handleChange}
                    />

                    {login !== "" && pass !== "" ?
                        <Link to="/home">
                            <button type="submit" onChange={this.handleSubmit}>Send</button>
                        </Link> :
                        <Link to="/home">
                            <button type="submit" disabled>Send</button>
                        </Link>
                    }

                </form>
            </div>
        )
    }
}

export default Authorization
