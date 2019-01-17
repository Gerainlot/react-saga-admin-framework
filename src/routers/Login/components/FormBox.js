import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { Form, Input, Button } from 'antd';

@withRouter
class FormBox extends Component{
    handleSubmit = e => {
        e.preventDefault()
        let { form } = this.props;
        this.props.submit(form);
    }

    render(){
        const { getFieldDecorator } = this.props.form;
        const { loading } = this.props;
        return(
            <Form onSubmit={this.handleSubmit}>
                <Form.Item>
                    {getFieldDecorator('username', {
                        rules: [{ required: true, message: '输入admin' }]
                    })(
                        <Input prefix={<span className='font icon-user'></span>} placeholder='admin' />
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: '密码是123456' }]
                    })(
                        <Input prefix={<span className='font icon-mima'></span>} type='password' placeholder='123456' />
                    )}
                </Form.Item>
                <Form.Item>
                    <Button type='primary' htmlType='submit' loading={loading}>
                        登录
                    </Button>
                </Form.Item>
            </Form>
        )
    }
}

export default Form.create()(FormBox);