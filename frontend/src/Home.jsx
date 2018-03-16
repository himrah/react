import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Home extends Component{
    render(){
        return(

    <section class="home_section">
        <div className="left">
            <div className="left-content">
                left content
            </div>

        </div>

        <div className="middle">
                <article className="article">
                        <header className="img_header">
                            <div className="img_header_title">
                            <h4>Uploaded By Admin</h4>
                            <p className="times"> 2010-9-2 at 9:35</p>
                            </div>
                        </header>
                    <Router>                        
                        <div className="img_content">
                            <Link to="#">
                                    <img src="#" className="m_img" />
                            </Link>
                        </div>
                    </Router>
                        <div className="img_footer">

                            <div className="show_comments">


                                <div className="_cmt_box">
                                        <span className="_uname">
                             <Router>
                                            <Link to="/{{ c.comment_by.username }}"><span ></span></Link> 
                                            </Router>
                                            <span className="_cmt">
                                                
                                            </span>
                                            <span className="_cmt_time" >
                                                
                                            </span>
                                        </span>
                                    </div>
                                
                            </div>    
                            
                            <div className="comment_box">
                                    
                                    <span id="{{p.id}}"></span>
                                    <input type="button" value="post" className="pstbtn" id="{{p.id}}" />
                            </div>            
                        </div>
                </article>
        </div>
        </section>
    )
    }
}

export default Home;