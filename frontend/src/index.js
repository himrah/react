
//import { Switch, Route,Router } from 'react-router'
import { BrowserRouter as  Router,Link,Route } from "react-router-dom";
//import {Link} from "react-router-dom"
//import './index.css';
/*import App from './App';
import Base from './Base';
import About from './About';
import Home from './Home'*/
//import Graph from './Graph'
//import Routes from './routes';
import App from './App'
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Async from 'react-code-splitting'
import { ApolloProvider } from 'react-apollo'
import client from './connection'
//import About from './About'
import About from './About'
import LoginView from './LoginView'
/*import ApolloClient, { createNetworkInterface } from 'apollo-client'

//import 'tachyons'
import { InMemoryCache } from 'apollo-cache-inmemory';*/

//import './base/jv.js'
//import Nav from './base/Nav';
import './base/in.css';


const Nav = () => <Async load={import('./base/Nav')}/>

//import { BrowserRouter as Router, Route, Link } from "react-router-dom";
//import Top from './base/Top';
//import './jv.js'
//import Root from './root'
//import CreateView from './base/CreateView';
//import { graphql } from 'react-apollo'
//import gql from 'graphql-tag'



/*
const networkinterface = createNetworkInterface({
    uri:'http://localhost:8000/graphql/',

})

const client = new ApolloClient({
    //link:networkinterface
    networkInterface:networkinterface,
    cache : new InMemoryCache(),
})

*/





/*

const About = () =>(
    <div>
    About US
    </div>
);

const Home = () =>(
    <div>
    Home page
    </div>
);

const Profile = () =>(
    <div>
    Profile
    </div>
);
*/
//const client = () => <Async load={import('./connection')}/>

class Form extends React.Component{
    render(){
        console.log(localStorage)
        return(
            <Router>
                <div>
                    <Link to="/">Home</Link>
                    <Link to="/login/">Login </Link>
                <Route exact path="/" component={About} />
                <Route path="/login/" component={LoginView} />
                </div>
            </Router>
        )
    }
}



ReactDOM.render((
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
    ),
    document.getElementById('root')
  )


//ReactDOM.render("sdfsdfd", document.getElementById('root'));
registerServiceWorker();
