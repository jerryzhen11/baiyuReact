import React from 'react';
import sty from './home.css';
import {Carousel, Form, Icon, Input, Button, Select} from 'antd';
import classNames from 'classnames';

const FormItem = Form.Item;
const Option = Select.Option;
const InputGroup = Input.Group;

function handleChange(value) {
    console.log(`selected ${value}`);
}

const Home = Form.create()(React.createClass({
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
                <Carousel autoplay dots={false}>
                    <div>
                        <img width={1280} height={400} src="http://temp.im/1280x400" alt=""/>
                    </div>
                    <div>
                        <img src="http://temp.im/1280x400/FF9500/000" alt=""/>
                    </div>
                    <div>
                        <img src="http://temp.im/1280x400/007AFF/fff" alt=""/>
                    </div>
                </Carousel>

                <div className={sty.searchBar}>
                    <Form inline onSubmit={this.handleSubmit}>
                        <FormItem>
                            <Select defaultValue="1" style={{width: 145}} onChange={handleChange}>
                                <Option value="1">类别</Option>
                                <Option value="2">Lucy</Option>
                                <Option value="3">Yiminghe</Option>
                            </Select>
                        </FormItem>
                        <FormItem>
                            <Select defaultValue="1" style={{width: 145}} onChange={handleChange}>
                                <Option value="1">城市</Option>
                                <Option value="2">Lucy</Option>
                                <Option value="3">Yiminghe</Option>
                            </Select>
                        </FormItem>
                        <FormItem>
                            <Input placeholder="日期"/>
                        </FormItem>
                        <FormItem>
                            <InputGroup>
                                <Input value={this.state.value} onPressEnter={this.handleSearch}
                                />
                                <div className="ant-input-group-wrap">
                                    <Button icon="search" onClick={this.handleSearch}/>
                                </div>
                            </InputGroup>
                        </FormItem>
                    </Form>
                </div>
            </div>

        );
    },
}));

export default Home;