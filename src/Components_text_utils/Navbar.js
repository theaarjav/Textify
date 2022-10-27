import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Navbar(props) {

    return (
            <nav className={`navbar navbar-expand-lg navbar-${props.mode === 'light' ? 'dark' : 'light'} bg-${props.mode === 'light' ? 'dark' : 'light'}`}>
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/Textify">{props.title}</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/About">{props.about}</NavLink>
                            </li>
                        </ul>
                        <span className="navbar-text">
                            <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" onClick={props.toggleMode} id="flexSwitchCheckDefault" />
                                <label className="form-check-label" for="flexSwitchCheckDefault">Dark Mode</label>
                            </div>

                        </span>
                    </div>
                </div>
            </nav>
    );
}
