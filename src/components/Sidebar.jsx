import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../styling/App.css';

function Sidebar(){
    return(
        <div className="bg-white text-dark">
            <nav className="sidebar-nav">
                <ul className="nav thumbnail">
                    <li className="nav-title">
                        <a className="nav-link text-dark" href="/">
                            Home
                        </a>
                    </li>
                </ul>
                <ul className="nav thumbnail">
                    <li className="nav-item">
                        <a className="nav-link text-dark" href="/about">
                            About
                        </a>
                    </li>
                </ul>
                <ul className="nav thumbnail">
                    <li className="nav-item">
                        <a className="nav-link text-dark" href="/todo">
                            To-Do List
                        </a>
                    </li>
                </ul>
                <ul className="nav thumbnail">
                    <li className="nav-item">
                        <a className="nav-link text-dark" href="/productivity">
                            Productivity Tracker
                        </a>
                    </li>
                </ul>
                <ul className="nav thumbnail">
                    <li className="nav-item">
                        <a className="nav-link text-dark" href="/weather">
                            Weather App
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Sidebar;