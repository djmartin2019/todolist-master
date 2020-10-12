import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-info align-items-stretch">
            <a className="navbar-brand" href="/">David's Site</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <a className="nav-link" href="/">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/About">About</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Apps
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="/todo">Todo List</a>
                    <a className="dropdown-item" href="/productivity">Productivity</a>
                    <a className="dropdown-item" href="/weather">Weather App</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="/restaurants">Restaurants</a>
                    </div>
                </li>
                </ul>
                <form className="form-inline">
                        <a class="btn btn-info" href='/login' role='button'>Login</a>
                </form>
                <form className="form-inline my-2 my-lg-0 pl-3 pr-3">
                    <div className="input-group">
                        <input type="text" class="form-control" placeholder="Search"/>
                        <div className="input-group-append">
                            <button className="btn btn-dark" type="button">Search</button>
                        </div>
                    </div>
                </form>
            </div>
        </nav>
    );
}

export default Navbar;