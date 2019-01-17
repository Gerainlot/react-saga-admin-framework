import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
import FormBox from "../components/FormBox";
import { fetchLogin } from "@/actions/login.js";
import { message } from 'antd';
import "../index.scss";

@withRouter
class Login extends Component{
    submit = (form) => {
        form.validateFields((err, values) => {
            if (!err) {
                let { username, password } = values;
                if (username === 'admin' && password === '123456') {
                    this.props.fetchLogin(values)
                } else {
                    message.error('账号：admin ； 密码：123456')
                }              
            }
        })
    }
    componentWillReceiveProps (nextprops) {
        const { login, history } = nextprops
        if (login.data.username) {
            history.push("/")
        }
    }
    render(){
        const loading = this.props.login.loading;
        return(
            <div className='Login_wrap clearFix'>
                <div className='form P_auto'>
                    <span className='font icon-react'></span>
                    <FormBox submit={this.submit} loading={loading}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        login: state.login
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchLogin: bindActionCreators(fetchLogin, dispatch),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);