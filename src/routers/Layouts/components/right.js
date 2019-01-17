import React, { Component } from 'react';
import { withRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Tooltip } from "antd";
import routes from "@/config/routes";
import { fetchLogout } from "@/actions/login.js";

const mapStateToProps = state => {
    return {
        login: state.login
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchLogout: bindActionCreators(fetchLogout, dispatch),
    };
};

@withRouter
@connect(mapStateToProps, mapDispatchToProps)
class Right extends Component {
    titleNode = () => {
        return (
            <span
                style={{ fontSize: '14px', cursor: 'pointer' }}
                onClick={this.logout}
            >
                退出
            </span>
        )
    }
    logout = () => {
        this.props.fetchLogout()
    }

    componentWillReceiveProps (nextprops) {
        const { login, history } = nextprops
        if (!login.data.username) {
            history.push("/login")
        }
    }
    render(){
        return (
            <div className='right'>
                <div className='header clear clearFix'>
                    <div className='user'>
                        <span className='font icon-touxiang'></span>
                        <Tooltip title={this.titleNode()}>
                            <span className='name'>admin</span>
                        </Tooltip>
                    </div>
                </div>
                <div className='routeWrap'>
                    {routes.map((item, i) =>
                        <Route key={i} path={item.path} component={item.component} exact />
                    )}
                </div>
            </div>
        )
    }
}

export default Right;