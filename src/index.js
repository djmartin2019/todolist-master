import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/Navbar.jsx';
import App from './components/App.jsx';
import About from './components/About.jsx';
import Sidebar from './components/Sidebar.jsx';
import ProductivityTracker from './components/applications/ProductivityTracker.jsx';
import WeatherApp from './components/applications/WeatherApp.jsx';
import Todo from './components/applications/Todo.jsx';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <div>
      <div className="row">
        <div className="col-12">
          <Navbar/>
        </div>
      </div>
      <div className="row bg-dark text-white">
        <div className="col-2">
          <Sidebar/>
        </div>
        <div className="col-10 pt-3 pb-3">
          <Router>
            <Route exact path="/" component={App} />
            <Route path="/about" component={About} />
            <Route path="/todo" component={Todo} />
            <Route path="/weather" component={ProductivityTracker} />
            <Route path="/productivity" component={WeatherApp} />
          </Router>
        </div>
      </div>
    </div>
      
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
