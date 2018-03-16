import Nav from './base/Nav';
import React, { Component } from 'react';

function errorLoading(error) {
  throw new Error(`Dynamic page loading failed: ${error}`);
}

function loadRoute(cb) {
  return module => cb(null, module.default);
}

const About = () =>(
    <div>
    About US
    </div>
);

export default{
    path:'/',
    Component:Nav,
    indexRoute:{        
        getComponent(location,cb){
            console.log("work here")
            import('./base/Main')
            .then(loadRoute(cb))
            .catch(errorLoading)
        },
    },
    childRoutes:
    [{
        path:'login',
        getComponent(location, cb) {
            import('./base/Login')
            .then(loadRoute(cb))
            .catch(errorLoading);
        },
    },
    {
        path:'registration',
        getComponent(location, cb) {
            import('./base/Registration')
            .then(loadRoute(cb))
            .catch(errorLoading);
        },        
    },
    {
        path:'*',
        getComponent(location, cb) {
            import('./base/Main')
            .then(loadRoute(cb))
            .catch(errorLoading);
        },        
    },

    ],
};