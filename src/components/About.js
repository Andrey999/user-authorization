import React, { Component } from 'react';
import {Link} from "react-router-dom";

class About extends Component {
    render() {
        return (
            <div>
                <h1>About</h1>
                <Link to="/">
                    <button onClick={this.signOut}>Sign out</button>
                </Link>
                <Link to="/about">
                    <button>Home</button>
                </Link>
                <Link to="/admin">
                    <button>Admin</button>
                </Link>
            </div>
        );
    }
}

export default About;
