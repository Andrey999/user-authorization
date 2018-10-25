import React, { Component } from 'react';
import {Link} from "react-router-dom";

class Admin extends Component {
    render() {
        return (
            <div>
                <h1>Admin</h1>
                <Link to="/">
                    <button onClick={this.signOut}>Sign out</button>
                </Link>
                <Link to="/about">
                    <button>About</button>
                </Link>
                <Link to="/home">
                    <button>Home</button>
                </Link>
            </div>
        );
    }
}

export default Admin;
