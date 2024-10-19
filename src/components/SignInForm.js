"use client";

import { useState } from "react";
import { Form, Input, Button, Typography, message } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

const { Title, Text, Link } = Typography;

const SignInForm = () => {
  const [loading, setLoading] = useState(false);

  const defaultEmail = "myselfmuhammadawais@gmail.com";
  const defaultPassword = "12345";

  const onFinish = (values) => {
    setLoading(true);
    if (values.email === defaultEmail && values.password === defaultPassword) {
      message.success("Login successful!");
      setTimeout(() => {
        window.location.href = "/dashboardCards";
      }, 1000);
    } else {
      message.error("Invalid credentials!");
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-10 mt-[110px] bg-white shadow-lg rounded-lg">
      <Title level={2} className="text-center text-gray-800">
     TailAdmin
      </Title>

      <Form
        name="signin"
        onFinish={onFinish}
        initialValues={{
          email: defaultEmail,
          password: defaultPassword,
        }}
        className="mt-8"
      >
        <Form.Item
          label={
            <Text strong className="text-gray-600">
              Email:
            </Text>
          }
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
        >
          <Input className="w-full px-4 py-2 rounded-md border border-gray-300" />
        </Form.Item>

        <Form.Item
          label={
            <Text strong className="text-gray-600">
              Password:
            </Text>
          }
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
        >
          <Input.Password
            className="w-full px-4 py-2 rounded-md border border-gray-300"
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />
        </Form.Item>

        <div className="text-right mb-4">
          <Link href="#" className="text-purple-600">
            Forgot Password?
          </Link>
        </div>

        <Form.Item className="flex justify-center">
          <Button
            type="primary"
            htmlType="submit"
            loading={loading}
            className="bg-purple-600 hover:bg-purple-400 text-white py-2 rounded-md"
          >
            Sign In
          </Button>
        </Form.Item>
      </Form>

      <div className="text-center mt-6">
        <Text className="text-gray-600">Don’t have an account yet? </Text>
        <Link href="#" className="text-purple-600">
          Create an account
        </Link>
      </div>
    </div>
  );
};

export default SignInForm;
