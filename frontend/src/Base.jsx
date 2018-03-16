import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import Style from 'react-style-tag';
import './static/style.css';

//import { Switch, Route } from 'react-router'
import { BrowserRouter as Router, Link, Switch,Route } from "react-router-dom";


class Base extends React.Component{
    render(){
        return(
            <section className="top">
            <Nav />
            <main className="main">
            <Home />
            </main>
            
            </section>
        );
    }
}

class Nav extends React.Component{
    render(){
        return(
            <nav className="nav">

        <Style>{`

        .brands{
            padding: 3px;
        }
        .profile_info{
            width: 50%;
            text-align: right;
            display: flex;
            flex-flow: row nowrap;;        
        }
        .brand{
            width: 50%;
        }
        .navdiv{
            display: flex;
            flex-flow: row nowrap;;
        }
        .top_p{
            float: right;
            padding:12px;
            max-width: 90px;
        }`
        }
        </Style>



                <div className="navdiv">
                <Router>
                    <div className="brand">
                        <span className="header_font">
                            <Link to="#">Fasigner</Link>
                        </span>
                    </div>    
                </Router>    
                <Router>
                    <div className="profile_info" >
                        
                        <span className="top_p"><Link to="#">Home</Link></span>
                        <span className="top_p"><Link to="#">Upload</Link></span>
                            <span className="top_p"><Link to="#">Ajay</Link></span>
                            <span className="top_p"><Link to="/#">Logout</Link></span>
                        <span className="top_p"><Link to="#">Login</Link></span>
                    
                    </div>
                 </Router>   
                </div>
            </nav>            
        )
    }
}   
export default Base;