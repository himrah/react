import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './Nav.css';
import Style from 'react-style-tag'
import Main from './Main';
import Login from './Login'
import Registration from './Registration'


const Profile =() =>(
    <div>Welcome to profile
    </div>
)


class Nav extends Component{
    render(){
        return(
            <Router><span>
            
            <nav className="nav">
            <div className="navdiv">
                <div className="brand">
                    <span className="header_font">
                    
                        <Link to="/home"><span style={{color:'orange'}}>Fasigner</span></Link>
                    
                    </span>
                </div> 
                <div className="profile_info" >
                    <span className="top_p"><Link to="/">Home</Link></span>
                    <span className="top_p"><Link to="/upload">Upload</Link></span>
                    <span className="top_p"><Link to="/profile/">Ajay</Link></span>
                    <span className="top_p"><Link to="/logout">Logout</Link></span>
                    <span className="top_p"><Link to="/login">Login</Link></span>
                </div>
                
            </div>
            </nav>
            
            <Route exact path="/" component={Main}/>
            <Route path="/login" component={Login}/>
            <Route path="/profile" component={Profile}/>
            <Route path="/registration" component={Registration} />
        </span>   
        </Router>
        )
    }
}
export default Nav;