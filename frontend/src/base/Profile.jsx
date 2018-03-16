import React from 'react'
import { BrowserRouter as Router, Link } from "react-router-dom"
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import axios, { post } from 'axios';
//var a=this.props.match.params.userName

const query = gql`query{
    users(username:"ankit"){
      id,
      username
      firstName,
      lastName
      photosSet{
        edges{
          node{
            id,
            thumbs
            photo
            originalPhoto
          }
        }
      }
      profile{
        id
        birthDay
        profilePic{
          id
          profileThumbs
        }
      }
    }
  }
  `

/*
  const MY_QUERY = gql`query allPhotos{
    allPhotos {
        id
        photo
        createdDate
        comments {
          edges {
            node {
              id
              comment
              commentTime
              commentBy{
                username
                id
              }
            }
          }
        }
        uploadBy {
          id
          username
          
        }
      }
      }`
*/


class Profile extends React.Component{

  constructor(props) {
    super(props);
    this.state ={
      file:null
    }
    this.onSubmit = this.onSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
    this.fileUpload = this.fileUpload.bind(this)
}


  onSubmit(e){
    e.preventDefault()
    this.fileUpload(this.state.file).then((response)=>{
      console.log(response.data);
    })    
  }


  fileUpload(file){
    const url = 'http://example.com/file-upload';
    const formData = new FormData();
    formData.append('file',file)
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    }
    return  post(url, formData,config)
}
  onChange(e){
    this.setState({file:e.target.files[0]})
  }
  render(){
      
        let { data } = this.props
        console.log(data)
        if (data.loading || !data.users) {
          return <div>Loading...</div>
        }
        return(
          <main className="main">      
          <div>This is profile  {this.props.match.params.userName}</div>

            <section className="top">

              <div className="profile">
                Profile Pic
              <img src={ "http://localhost:8000/"+data.users.profile.profilePic.profileThumbs} />
              </div>

              <div className="info">
                <div className="personal">
                    <div>
                      username : {data.users.username}
                    </div>
                    <div>
                      Name : {data.users.firstName + " " +data.users.lastName}
                    </div>
                    <div>
                      Birthday : {data.users.profile.birthDay}
                    </div>                                
                </div>
                <div className="input">
                  <form onSubmit={this.onSubmit} id="formUpload">
                  <input type="file" name="in" onChange={this.onChange}/>
                  </form>
                </div>
              
              </div>
            </section>
          
          </main>
        )
    }
}


/*


const queryOptions = {
  options: props => ({
    variables: {
      id: props.match.params.id,
    },
  }),
}

DetailView = graphql(query, queryOptions)(DetailView)
export default DetailView

*/

Profile = graphql(query)(Profile)
export default Profile;