import React from 'react';
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import $ from 'jquery'
class Left extends React.Component{
    render(){
        var flag
        var border_class = function(){
            var ww = document.body.clientWidth;
            if(ww<1100){
                flag=true
                //$('.home_section').addClass('home_section_small');
                //$('.left').hide()
                //$('.right').hide()
            }
                else{
                    flag=false
                    //$('.home_section').removeClass('home_section_small');
                    //$('.left').show()
                    //$('.right').show()
            }
        }

            $(window).resize(function(){
                border_class();
              });            
              border_class();        
        return(     
                <div className="left">
                    <div className="left-content">
                        left content
                    </div>
                </div>                
        )
    }
}
export default Left;