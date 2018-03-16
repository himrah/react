import React from 'react'
import { BrowserRouter as Router, Link } from "react-router-dom"
import './article.css'
import TimeAgo from 'javascript-time-ago'
import { graphql, compose } from 'react-apollo'
import gql from 'graphql-tag'
import en from 'javascript-time-ago/locale/en'
import './jv.js'
import appendReactDOM from 'append-react-dom';
//import Async from 'react-code-splitting'
//import Middle from './Middle';

//const Left = () => <Async load={import('./Left')}/>

// import image from './Images/IMG_20170325_131958207.jpg'
// TimeAgo.locale(en)
// "standard": "^11.0.0",

class Comments extends React.Component {
    render(){
        //console.log(this.props.cmt)
        TimeAgo.locale(en)
        //TimeAgo.locale(en)
        const timeAgo = new TimeAgo('en-US')
        
        //ctime = new TimeAgo('en-US')
        var ctime = this.props.cmt.node.commentTime
        //ctime = (new Date(ctime)).toDateString()// .toString();
        //timeAgo.format(new Date(de))
        return(
            <div className="_cmt_box">
                    <span className="_uname">
                        <Router>  
                        {                                
                            <Link to={this.props.cmt.node.commentBy.username} key={this.props.cmt.node.commentBy.id}><span style={{color:'black',fontWeight:'bold',marginRight:'3px'}}>{this.props.cmt.node.commentBy.username}</span></Link>

                        }
                        </Router>
                        <span className="_cmt" style={{fontweight:'normal'}}>
                            {this.props.cmt.node.comment} 
                        </span>
                        <span className="_cmt_time" style={{color:'rgb(83, 83, 83)',fontSize:'12px',fontStyle:'inherit',marginLeft:'2px'}}>
                        {/*:- {ctime.format(new Date(de))}*/}
                        <span>:- {timeAgo.format(new Date(ctime)-60*1000,'time')}</span>
                        </span>
                    </span>
            </div>
        )
    }
}




class CreateComment extends React.Component {
    render(){
        TimeAgo.locale(en)
        const timeAgo = new TimeAgo('en-US')
        var ctime = this.props.d.commentTime
        return(
            <div className="_cmt_box">
                    <span className="_uname">
                        <Router>  
                        {                                
                            <Link to={this.props.d.username} key={this.props.d.commentBy}><span style={{color:'black',fontWeight:'bold',marginRight:'3px'}}>{this.props.d.username}</span></Link>

                        }
                        </Router>
                        <span className="_cmt" style={{fontweight:'normal'}}>
                            {this.props.d.comment} 
                        </span>
                        <span className="_cmt_time" style={{color:'rgb(83, 83, 83)',fontSize:'12px',fontStyle:'inherit',marginLeft:'2px'}}>
                        {/*:- {ctime.format(new Date(de))}*/}
                        <span>:- {timeAgo.format(new Date(ctime)-60*1000,'time')}</span>
                        </span>
                    </span>
            </div>
        )
    }
}


const Ac =()=>{
    return(
    <div>sdfsdf</div>
    )
}



class Articles extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            inputcomment : '',
            keyset : '',
            //uid : localStorage.token
        }
        this.updateInput = this.updateInput.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleSubmit(e){
        e.preventDefault()
        console.log(this.props)
        let formData = new FormData(this.form)
        console.log(formData)
        let el = document.querySelector('.show_comments')
        //appendReactDOM.bind
        //console.log(el)
        var d = {comment:"this is comment",commentTime:"2018-01-28T17:05:56+00:00",username:'ajay',commentBy:1}
        console.log(d)
        el.append(<Ac/>)
        //el.appendChild("jlkjsdlkjlksdf")

       /* 
        this.props.m.mutate({variables:{comment:this.state.inputcomment,photoid:this.state.keyset,userid:localStorage.getItem('userid')}})
        
        .then(res=>{
            if (res.data.postComment.formErrors == null) {
                console.log("done")
                
                //window.location.replace("/")
            }
            else(
                console.log(res.data.createMessage.formErrors)
            )
        })
        .catch(err=>{
            console.log('Network error!')
        })


        */
    }


    handleClick(){
        //console.log("here");
        //console.log(this)
        console.log(this.state.keyset)
        console.log(this.state.inputcomment)
    }
    updateInput(e,key){
        this.setState({inputcomment: e.target.value,keyset:key})
    }
    render(){
        //console.log(this.props)
        var ctime = this.props.p.createdDate,
        cdate = (new Date(ctime)).toDateString()// .toString();
        let img = "http://localhost:8000/"+this.props.p.photo
        return(
            
            <article className="article">
                    
                    <header className="img_header">
                        <div className="img_header_title">
                        <Link to={this.props.p.uploadBy.username}><h4>{this.props.p.uploadBy.username}</h4></Link>
                        <p className="times">{cdate}</p>
                        </div>
                    </header>
                    <Router>        
                    <Link to="#">
                    <div className="img_content">
                    <div className="main_img">
                        <img alt="smile" src={img} className="m_img" />
                    </div>
                    </div>
                    </Link>
                    </Router> 
                    <div className="img_footer">
                    <div className="rating">
                    <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
                    </div>
                    <div className="show_comments">
                        {this.props.p.comments.edges.map(c=><Comments key={c.node.id} cmt={c}  />)}
                    </div>
                        <div className="comment_box">
                        <form ref={ref=>(this.this=ref)} onSubmit={e=>this.handleSubmit(e)}>

                                <textarea className="form-control" placeholder="Comment here" onChange={(e)=> this.updateInput(e,this.props.p.id)} key={this.props.p.id}  ></textarea>
                                <input type="submit" value="post"  className="pstbtn" />
                        </form>
                        </div>            
                    </div>
            </article>          
        )
    }
}
//export default Article;


class Article extends React.Component{
    render(){
        if(this.props.data.loading){
            return (<div>Loading...</div>)   
        }
        //console.log(localStorage)
        const photos = this.props.data.allPhotos;
        const mu = this.props;
        //console.log(photos)
        return(
                <div>{photos.map(p=><Articles key={p.id} p={p} m={mu} />)}</div>
        );
    }
}


//const PhotoQuery=gql `query {allPhotos{id,photo}}`
//const PhotoQuery = gql` query{allPhotos{ id photo } }`
/*const MY_QUERY = gql`query allPhotos{
    allPhotos {
      id
      photo
      comments{
          edges{
              node{
                  id
                  comment
                  commentTime
              }
          }
      }
    }
  }`
*/
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

const UpdateComment = gql`mutation create($comment:String!,$photoid:ID!,$userid:ID!){
    postComment(
      comment:$comment
      photoid:$photoid
      uid:$userid
    ) 
    {
        formErrors
        comment {
          id
          comment
          commentTime
          commentBy {
            id
            username
          }
        }
    }
  }`


/*const MY_QUERY = gql`
  query getWorkouts {
     workouts { title, date, time, location, author, contentSnippet, tags, day, image, avatar, id } 
  }
`;*/

//export default graphql(MY_QUERY)(Article)
export default compose(
    graphql(MY_QUERY),
    graphql(UpdateComment)
)(Article)