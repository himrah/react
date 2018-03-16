import React from 'react';
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";
//import Article from './Article';

import Async from 'react-code-splitting'
//import Middle from './Middle';

const Article = () => <Async load={import('./Article')}/>

class Middle extends React.Component{
    render(){
        return(
            <div className="mid">
            <Article />
            </div>
        )
    }
}
export default Middle;