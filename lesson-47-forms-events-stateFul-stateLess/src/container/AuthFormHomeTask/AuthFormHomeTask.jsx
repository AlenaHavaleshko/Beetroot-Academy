import React from "react";
import {
  Button,
  Form,
  Input,
  Select,
  Space,
  DatePicker,
  Radio,
  Tooltip,
  Typography,
  Col,
  Row
} from "antd";

import "../../assets/styles/containers/auth-form-home-task.scss";

const { Option } = Select;

const onFinish = (values) => {
  console.log("Received values of form: ", values);
};

function AuthFormHomeTask() {
  return (
    <Form
     className="registration-form"
      name="complex-form"
      layout="vertical"
      onFinish={onFinish}
      style={{ maxWidth: 600, margin: '0 auto' }}
    >
      <p>Registration Form</p>

      {/* First name/ Last name  */}
      <Form.Item style={{ marginBottom: 0 }}>
        <Form.Item
          label="First name"
          name="first-name"
          style={{ display: "inline-block", width: "calc(50% - 8px)" }}
        >
          <Input placeholder="Input first name" />
        </Form.Item>
        <Form.Item
          label="Last name"
          name="last-name"
          style={{
            display: "inline-block",
            width: "calc(50% - 8px)",
            margin: "0 8px",
          }}
        >
          <Input placeholder="Input last name" />
        </Form.Item>
      </Form.Item>
      {/* end First name/ Last name */}

      {/* Birth day / Gender */}
      <Form.Item style={{ marginBottom: 0 }}>
      <Row gutter={8}>
       <Col span={12}>
                 <Form.Item name="date-picker" label="Birth day"> 
                   <DatePicker />
                 </Form.Item>
        </Col>
        <Col span={12}>
                <Form.Item label="&nbsp;"> 
                  <Radio.Group label="Gender">
                    <Radio value="male"> Male </Radio>
                    <Radio value="female"> Female </Radio>
                  </Radio.Group>
                </Form.Item>
          </Col>
        </Row>
      </Form.Item>

      {/* end Birth day / Gender */}

      {/* Email / Phone number */}
      <Form.Item style={{ marginBottom: 0 }}>
        <Form.Item
          label="Email"
          name="email"
          style={{ display: "inline-block", width: "calc(50% - 8px)" }}
        >
          <Input placeholder="Input email" />
        </Form.Item>
        <Form.Item
          label="Phone number"
          name="phone-number"
          style={{
            display: "inline-block",
            width: "calc(50% - 8px)",
            margin: "0 8px",
          }}
        >
          <Input placeholder="Input phone number" />
        </Form.Item>
      </Form.Item>
      {/* end Email / Phone number */}

      {/* Select - Subject */}
    <Row gutter={8}>
     <Col span={24}>
         <Form.Item style={{ width: 0 }}label="Subject">
           <Space.Compact>
             <Form.Item>
               <Select placeholder="Chose option">
                 <Option value="subject-1">Subject 1</Option>
                 <Option value="subject-2">Subject 2</Option>
                 <Option value="subject-3">Subject 3</Option>
               </Select>
             </Form.Item>
           </Space.Compact>
         </Form.Item>
      </Col>
    </Row>
      {/* end Select - Subject */}

      <Form.Item label=" " colon={false}>
       <Button type="primary" htmlType="submit">
        Submit
       </Button>
      </Form.Item>
   </Form>
  );
}

export default AuthFormHomeTask;
