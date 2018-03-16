import React from 'react';
import { gql, graphql } from 'react-apollo'
//import ReactDOM from 'react-dom';

const query = gql`
{
  currentUser {
    id
  }
}
`
class About extends React.Component {
  componentWillUpdate(nextProps) {
    if (!nextProps.data.loading && nextProps.data.currentUser === null) {
      window.location.replace('/login/')
    }
  }

 render() {
    let { data } = this.props
    if (data.loading) {
      return <div>Loading...</div>
    }
    return <div>CreateView</div>
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