import { render } from '@testing-library/react';
import React, {Component} from 'react';
import '../styling/Login.css';

class Login extends Component {
    render(){
        return(
            <React.Fragment>
                <div className="row text-center pt-3">
                    <div className="col-4"/>
                    <div className="col-4 bg-white p-5">
                        <img className="mb-4" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72"/>
                        <h1 className="h3 mb-3 font-weight-normal text-dark">Please Sign In</h1>
                        <input className="m-1 form-control" placeholder="Email"/><br/>
                        <input className="m-1 form-control" placeholder="Password"/><br/>
                        <label className="text-dark"><input type="checkbox" className="m-2"/>Remember Me</label><br/><br/>
                        <a type="submit" className="btn btn-info" href="/">Login</a>
                    </div>
                </div>
            </React.Fragment>  
        )
    }
}

export default Login;