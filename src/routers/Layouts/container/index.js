import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import Left from "../components/left";
import Right from "../components/right";
import "../index.scss";

@withRouter
class Layouts extends Component{
    render(){
        return(
            <div className='Layouts_wrap clearFix'>
                <Left></Left>
                <Right></Right>
            </div>
        )
    }
}

export default Layouts;