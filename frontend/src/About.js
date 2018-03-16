import React from 'react';
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
//import ReactDOM from 'react-dom';

/*const query = gql`query
{
  currentUser {
    id
  }
}
`*/

const query = gql`query user{
  currentUser{
    id
    username
    firstName
    lastName
  }
}`


//console.log(localStorage)

class About extends React.Component {
  componentWillUpdate(nextProps) {
    //console.log(localStorage)
    localStorage.setItem("user",nextProps.data.currentUser.username)
    localStorage.setItem("userid",nextProps.data.currentUser.id)
    localStorage.setItem('username',nextProps.data.currentUser.firstName+nextProps.data.currentUser.lastName)
    console.log(nextProps)
    //localStorage.setItem('user',nextProps.data.currentUser)
    //localStorage.setItem('userid',nextProps.data.currentUser)
    /*if (!nextProps.data.loading && nextProps.data.currentUser === null) {
      
      //window.location.replace('/login/')
    }*/
  }
  render() {
      //let { data } = this.props
      //console.log(data)
      //if (data.loading) {
      return <div></div>
      //}
      //return <div>CreateView</div>
    
    }
  }

About = graphql(query)(About)
export default About
/*class About extends React.Component{
    render(){
        return(
            <div>
            <h2>This is about us page from jsx</h2>
            <p>Hello this team is work for react/django application for you</p>
            </div>
        );
    }
}*/

//ReactDOM.render(<About />, document.getElementById('root'));

