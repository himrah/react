import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
//import {Router} from 'react-router';
//import browserHistory from 'react-router';
import routes from './routes';
const Root = () => <Router  routes={routes} />;
export default Root;