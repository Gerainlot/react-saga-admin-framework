import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Spin } from 'antd';
import { setLoading } from "@/actions/root";
import './index.scss';

const mapStateToProps = state => {
    return {
        root: state.root
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setLoading: bindActionCreators(setLoading, dispatch),
    };
};

@withRouter
@connect(mapStateToProps, mapDispatchToProps)
class Loading extends Component {
    // componentDidUpdate() {
    //     console.log(this.props.root.loading)
    //     if (this.props.root.loading) {
    //         this.props.setLoading(false)
    //     }
    // }

    // componentWillReceiveProps(nextProps) {
    //     nextProps.setLoading()
    // }

    // shouldComponentUpdate(nextProps) {
    //     if (this.props.location.pathname !== nextProps.location.pathname) {
    //         nextProps.setLoading()
    //         return true
    //     }
    //     return false
    // }

    render() {
        return (
            <Spin tip='LOADING' wrapperClassName='Loading_wrap' spinning={this.props.loading}>
                {this.props.children}
            </Spin>
        )
    }
}

export default Loading
