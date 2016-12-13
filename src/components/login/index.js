import React from 'react';
import { Form,Icon,Tabs,Input,Button,Row,Col,Select,Upload } from 'antd';
import sty from './login.css';
import classNames from 'classnames';
const TabPane = Tabs.TabPane;
const FormItem = Form.Item;
const Option = Select.Option;

function handleChange(value) {
    console.log(`selected ${value}`);
}

function callback(key) {
  console.log(key);
}

function handleIndividualSubmit(){
	  e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
}

{/*function handleBrandSubmit(){
	console.log(1);
}*/}

const Login  = Form.create()(React.createClass({
	getInitialState(){
		return{
			passwordConsistency:false
		}
	},
  checkMobile(rules,value,callback){
    const regexp=/^(?:13\d|15[89])-?\d{5}(\d{3}|\*{3})$/;
    if(!regexp.test(value)){
      callback('wrong');
    }else{
      callback();
    }
  },
	checkPassword(rules,value,callback){
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  },
	checkConfirm(rule, value,callback){
    const form = this.props.form;
    if (value && this.state.passwordConsistency) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
	},
  handlePasswordBlur(event){
    const value=event.target.value;
    console.log(value);
		this.setState({
			passwordConsistency:this.state.passwordConsistency||!!value
		});
	},
    render() {
    	const { getFieldDecorator } = this.props.form;
    	const formItemLayout = {
      		labelCol: { span: 4 },
      		wrapperCol: { span: 12 },
    	};
    	const tailFormItemLayout = {
      		wrapperCol: {
        	span: 14,
        	offset: 2,
      		},
   	 	};
    
        return (
            <div className={sty.container}>
				<Tabs defaultActiveKey="Individual" onChange={callback}>
    				<TabPane className={sty.tab} tab="个人用户注册" key="Individual">
              <div >
    					<Form className={sty.individualForm} horizontal onSubmit={handleIndividualSubmit}>
    						<FormItem {...formItemLayout} label="手机号">
    							<Row gutter={8}>
    								<Col span={12}>
    									{getFieldDecorator('phone', {
            								rules: [
                            { required: true, message: 'Please input your phone number!' },
                            { validator:this.checkMobile,message:'wrong pattern'}
                            ],
          								})(
            							<Input  />
          							)}
          							</Col>
          							<Col span={12}>
          								<Button size="large">获取验证码</Button>
          							</Col>
          						</Row>
          					</FormItem>
          					<FormItem {...formItemLayout} label="验证码">
          						{getFieldDecorator('captcha', {
            						rules: [{ required: true, message: 'Please input your captcha!' }],
          						})(
            						<Input  />
          						)}
          					</FormItem>
          					<FormItem {...formItemLayout} label="E-mail" hasFeedback>
          						{getFieldDecorator('E-mail', {
            						rules: [
            							{type:'email',message:'The input is not valid E-mail!'},
            							{ required: true, message: 'Please input your E-mail!' }
            							],
          						})(
            						<Input  />
          						)}
          					</FormItem>
          					<FormItem {...formItemLayout} label="昵称" hasFeedback>
          						{getFieldDecorator('nickname', {
            						rules: [{ required: true, message: 'Please input your captcha!' }],
          						})(
            						<Input  />
          						)}
          					</FormItem>	
          					<FormItem {...formItemLayout} label="密码" hasFeedback>
          						{getFieldDecorator('password', {
            						rules: [
                        { required: true, message: 'Please input your captcha!' },
                        {  validator: this.checkConfirm, }
                        ],
          						})(
            						<Input type='password' onBlur={this.handlePasswordBlur} />
          						)}
          					</FormItem>	
          					<FormItem {...formItemLayout} label="密码确认" hasFeedback>
          						{getFieldDecorator('confirm', {
            						rules: [
                        { required: true, message: 'Please input your captcha!' },
                        { validator: this.checkPassword, }
                        ],
          						})(
            						<Input type='password'  />
          						)}
          					</FormItem>
          					<FormItem {...tailFormItemLayout} style={{ marginBottom: 8 }}>
          						{getFieldDecorator('agreement')(
            						<Row gutter={8}>注册即表示同意百愚网的<a>服务条款</a>及<a>隐私政策</a></Row>
          						)}
        					</FormItem>
        					<FormItem {...tailFormItemLayout}>
          						<Button type="primary" htmlType="submit" size="large">注册</Button>
        					</FormItem>			
    					</Form>
               <div className={sty.quickAccess}>
                <p className={sty.quickTitle}>快速登录</p>
                  <section>
                   <div className={sty.wechat}>微信登录</div>
                  </section>
                </div>
              </div>
    				</TabPane>
    				{/*<TabPane tab="品牌用户注册" key="Brand">
    					<Form horizontal onSubmit={handleBrandSubmit}>
    						<FormItem {...formItemLayout} label="品牌名称">
    							<Row gutter={8}>
    								<Col span={12}>
    									{getFieldDecorator('brandName', {
            								rules: [{ required: true, message: 'Please input your phone number!' }],
          								})(
    										<Input  />
    									)}
    								</Col>
          							<Col span={12}>
    									<Upload name="logo" listType="picture" onChange={handleBrandSubmit}>
    										<Button type="ghost">
    											<Icon type="upload" />点击上传
    										</Button>
    									</Upload>
    								</Col>
    							</Row>
    						</FormItem>
    						<FormItem {...formItemLayout} label="手机号">
    							<Row gutter={8}>
    								<Col span={12}>
    									{getFieldDecorator('mobile', {
            								rules: [{ required: true, message: 'Please input your phone number!' }],
          								})(
            							<Input  />
          							)}
          							</Col>
          							<Col span={12}>
          								<Button>获取验证码</Button>
          							</Col>
          						</Row>
          					</FormItem>
          					<FormItem {...formItemLayout} label="验证码">
          						{getFieldDecorator('captcha', {
            						rules: [{ required: true, message: 'Please input your captcha!' }],
          						})(
            						<Input  />
          						)}
          					</FormItem>
          					<FormItem {...formItemLayout} label="E-mail">
          						{getFieldDecorator('E-mail', {
            						rules: [
            							{type:'email',message:'The input is not valid E-mail!'},
            							{ required: true, message: 'Please input your E-mail!' }
            							],
          						})(
            						<Input  />
          						)}
          					</FormItem>
          					<FormItem {...formItemLayout} label="城市">
          					<Row gutter={8}>
          						<Col span={12}>
                            		<Select defaultValue="1" style={{width: 145}} onChange={handleChange}>
                                		<Option value="1">类别</Option>
                                		<Option value="2">Lucy</Option>
                                		<Option value="3">Yiminghe</Option>
                            		</Select>
                            		</Col>
                            		<Col span={12}>
                        			<Select defaultValue="1" style={{width: 145}} onChange={handleChange}>
                                		<Option value="1">城市</Option>
                                		<Option value="2">Lucy</Option>
                                		<Option value="3">Yiminghe</Option>
                            		</Select>
                            	</Col>
                            </Row>
                        </FormItem>
    				</Form>
           
    			</TabPane>*/}
    		</Tabs>
    	</div>
		);
    }
}));
export default Login;