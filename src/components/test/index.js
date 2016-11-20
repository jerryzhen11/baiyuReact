import React from 'react';
import {Carousel, Form, Icon, Input, Button, Select} from 'antd';
import classNames from 'classnames';

const FormItem = Form.Item;
const Option = Select.Option;
const InputGroup = Input.Group;

function handleChange(value) {
    console.log(`selected ${value}`);
}

const Test = Form.create()(React.createClass({
    handleSubmit(e) {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    },
    getInitialState() {
        return {
            value: '',
            focus: false,
        };
    },
    handleInputChange(e) {
        this.setState({
            value: e.target.value,
        });
    },
    handleFocusBlur(e) {
        this.setState({
            focus: e.target === document.activeElement,
        });
    },
    handleSearch() {
        if (this.props.onSearch) {
            this.props.onSearch(this.state.value);
        }
    },
    render() {
        const {getFieldDecorator} = this.props.form;

        return (
            <div>
                <p>test</p>
            </div>

        );
    },
}));

export default Test;