import React, { FC } from "react";
import { Form, Input, Button, Alert } from 'antd';

interface Props {
	handleSubmit: (values: { name: string, description: string}) => void,
	errorCode: string,
	errorMessage: string,
}

const ProjectForm: FC<Props> = ({ handleSubmit, errorCode, errorMessage }) => {
	const [form] = Form.useForm();
  
	const onFinish = (values: { name: string; description: string }) => {
	  console.log('Submitted values:', values);
	  handleSubmit(values);
	  form.resetFields();
	};
  
	return (
		<div>
		{ errorCode && (
		  <Alert message={errorMessage} type="error" showIcon style={{ marginBottom: '16px' }} />
		)}
	  	<Form form={form} onFinish={onFinish} className='form'>
			<Form.Item label="Project Name" name="name" rules={[{ required: true }]}>
		  		<Input placeholder="Enter project name" />
			</Form.Item>
			<Form.Item label="Project Description" name="description" rules={[{ required: true }]}>
		  		<Input.TextArea rows={4} placeholder="Enter project description" />
			</Form.Item>
			<Form.Item>
		  		<Button type="primary" htmlType="submit"> Submit </Button>
			</Form.Item>
	  	</Form>
	  </div>
	);
  };
  
  export default ProjectForm;