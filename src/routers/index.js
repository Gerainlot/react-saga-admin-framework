import React, { Component } from 'react';
import { Provider } from "react-redux";
import { Switch, Route, withRouter } from "react-router-dom";
import Login from "./Login";
import Layouts from "./Layouts";
import store from "../store";

@withRouter
class Routers extends Component{
    render(){
        return(
            <Provider store={store}>
                <Switch>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/" component={Layouts}></Route>
                </Switch>
            </Provider>
        )
    }
}

export default Routers;