import React from 'react';
import style from './home.css';
import { Carousel, Form, Icon, Input, Button , Select} from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;

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
    render() {
        const { getFieldDecorator } = this.props.form;
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

            <div className={style.searchBar}>
                <Form inline onSubmit={this.handleSubmit}>
                    <FormItem>
                        <Select defaultValue="1" style={{ width: 145 }} onChange={handleChange}>
                            <Option value="1">类别</Option>
                            <Option value="2">Lucy</Option>
                            <Option value="3">Yiminghe</Option>
                        </Select>
                    </FormItem>
                    <FormItem>
                        <Select defaultValue="1" style={{ width: 145 }} onChange={handleChange}>
                            <Option value="1">城市</Option>
                            <Option value="2">Lucy</Option>
                            <Option value="3">Yiminghe</Option>
                        </Select>
                    </FormItem>
                    <FormItem>
                        <Input placeholder="Username" />
                    </FormItem>
                    <FormItem>
                        <Input placeholder="Username" />
                    </FormItem>
                    <FormItem>
                        <Button type="primary" htmlType="submit">搜索</Button>
                    </FormItem>
                </Form>
            </div>
        </div>

        );
    },
}));

export default Home;