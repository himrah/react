//import { ApolloProvider } from 'react-apollo';
import React, { Component } from 'react';
//import ApolloClient, { createNetworkInterface } from 'apollo-client'
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'


class Graph extends React.Component{
    render(){
        if(this.props.data.loading){
            return (<div>Loading...</div>)   
        }
        const photos = this.props.data.allPhotos;
        console.log(photos)
        return(
            <div>Loaded</div>
        );
    }
}


//const PhotoQuery=gql `query {allPhotos{id,photo}}`
//const PhotoQuery = gql` query{allPhotos{ id photo } }`
const MY_QUERY = gql`query allPhotos{
    allPhotos {
      id
      photo
    }
  }`

/*const MY_QUERY = gql`
  query getWorkouts {
     workouts { title, date, time, location, author, contentSnippet, tags, day, image, avatar, id } 
  }
`;*/

export default graphql(MY_QUERY)(Graph)