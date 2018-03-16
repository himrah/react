
import React from 'react';
import {  Link } from "react-router-dom";
//import '../static/logincss.css'
import './logincss.css'

import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import About from '../About'

const query = gql`query user{
    currentUser{
      id
      username
      firstName
      lastName
    }
  }`

class Login extends React.Component{
    componentWillUpdate(nextProps) {
        //console.log(localStorage)
        console.log(nextProps)
        if (!nextProps.data.loading && nextProps.data.currentUser === null) {
          localStorage.setItem("user",nextProps.data.currentUser)
          //window.location.replace('/login/')
        }
      }    

  handleSubmit(e) {
    e.preventDefault()
    let data = new FormData(this.form)
    fetch('http://localhost:8000/api-token-auth/', {
      method: 'POST',
      body: data,
    })
      .then(res => {
        res.json().then(res => {
          if (res.token) {
            localStorage.setItem('token', res.token)
            //localStorage.setItem('userid',)
            window.location.replace('/auth')
            //fetch('')
            //window.location.replace
            //console.log(res.token)
            
          }
          else{
              alert('Username or Password is wrong')
          }
        })
      })
      .catch(err => {
        console.log('Network error')
      })
    
      /*
      fetch('http://localhost:8000/gql',{
        method:'POST',
        body:query,
    })
    .then(res=>{
        res.json().then(res=>{
            console.log(res)
        })
    })
    */
    }

    render(){
        return(
        <main className="main-login">
            <section className="section-login">
            <div className="login_box">
                <form ref={ref => (this.form = ref)}  onSubmit={e => this.handleSubmit(e)}>
                        <div>
                            <input type="text" name="username" placeholder="Username" className="form-control" id="username"/>
                        </div>
                        <div>
                        <input type="password" name="password" placeholder="Password" className="form-control" id="password"/>
                        </div>
                        <input type="submit" className="btn" value="login"/>
                        
                        <div className="optional">
                            <div className="signup">
                                
                                <span className="_sup">
                                {/*}
                                <Link to="/registration">Sign Up</Link>*/}
                                </span>
                            </div>
                            <div className="forget">
                                <span className="_fgps">
                                {/*<Link to="#">Forget Password ?</Link>*/}
                                </span>
                            </div>
                        </div>
                    
                </form>
            </div>
            </section>
            
        </main>
        )
    }
}
Login = graphql(query)(Login)
export default Login
