import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './Nav.css';
//import Style from 'react-style-tag'
//import Main from './Main';
//import Login from './Login'
//import Registration from './Registration'
import Async from 'react-code-splitting'
import About from '../About'
//import img from './Images/'
import notify from  './Images/notify.png' 
import profile from  './Images/profile.png'
import msg from  './Images/msg.png'
import logout from  './Images/logout.png'
import Profile from './Profile'




const Main = () => <Async load={import('./Main')}/>

const Login = () => <Async load={import('./Login')}/>
const Registration = () => <Async load={import('./Registration')}/>


class Logout extends React.Component{
    render(){
        //localStorage.setItem('token','null')
        //localStorage.removeItem('token')
        localStorage.removeItem('token')
        return(
            window.location.replace('/')
        )
    }
}


class Nav extends React.Component{
    logout(){
        localStorage.removeItem('token')
        window.location.replace('/')
    }
    render(){
        var token=localStorage.getItem('token')
        const style={
            'height':'20px',
            'maxWidth':'20px',
            'minWidth':'20px'
        }
        return(
            <Router><span>  
            <nav className="nav">
            <div className="navdiv">
                <div className="brand">
                    <span className="header_font">
                    
                        <Link to="/"><span style={{color:'orange'}}>Fasigner</span></Link>
                    
                    </span>
                </div> 
                { token ? (
                    <div className="profile_info">                    
                    <span className="top_p"><Link to={localStorage.getItem('user')}><img className="logo" style={style} src={profile} alt="sdf"  /></Link></span>
                    <span className="top_p"><Link to="/upload"><img src={msg} alt="sdf" className="logo" style={style} /></Link></span>
                    <span className="top_p"><Link to="/profile/"><img src={notify} alt="sdf" className="logo" style={style} /></Link></span>
                    <span className="top_p"><Link to="#" onClick={this.logout} ><img src={logout} alt="sdf" className="logo" style={style} /></Link></span>
                    </div>
                    ): (
                        <div className="profile_info">                    
                        <span className="top_p"><Link to="/login">Login</Link></span>
                        </div>
                    )

                }
{/*                    <span className="top_p"><Link to="/logout">Logout</Link></span>
                    <span className="top_p"><Link to="/login">Login</Link></span>*/}
                </div>
            </nav>            
            <Route exact path="/" component={Main}/>
            <Route path="/login" component={Login}/>
            <Route path="/logout" component={Logout}/>
            <Route path="/:userName" component={Profile}/>
            <Route path="/auth" component={About}/>
            <Route path="/registration" component={Registration} />
        </span>   
        </Router>
        )
    }
}
export default Nav;