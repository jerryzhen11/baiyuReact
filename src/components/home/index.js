import React from 'react';
import './home.css';
import { Carousel, Form, Icon, Input, Button } from 'antd';

const FormItem = Form.Item;
const Home = Form.create()(React.createClass({
    handleSubmit(e) {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    },
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
        <div>
            <Carousel autoplay dots={false}>
                <div>
                    <img src="http://temp.im/1280x300" alt=""/>
                </div>
                <div>
                    <img src="http://temp.im/1280x300/FF9500/000" alt=""/>
                </div>
                <div>
                    <img src="http://temp.im/1280x300/007AFF/fff" alt=""/>
                </div>
            </Carousel>

            <Form inline onSubmit={this.handleSubmit}>
                <FormItem>
                    {getFieldDecorator('userName', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input addonBefore={<Icon type="user" />} placeholder="Username" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input addonBefore={<Icon type="lock" />} type="password" placeholder="Password" />
                    )}
                </FormItem>
                <FormItem>
                    <Button type="primary" htmlType="submit">Log in</Button>
                </FormItem>
            </Form>
        </div>

        );
    },
}));

export default Home;