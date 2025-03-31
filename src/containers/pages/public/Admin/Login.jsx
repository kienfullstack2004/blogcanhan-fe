import React, { createContext } from "react";
import "./style.css";
import { Card, Form, Space } from "antd";
import { Input, Button } from "antd";
import useNotification from "antd/es/notification/useNotification";
import { useNavigate } from "react-router-dom";
import { login } from "@/store/action/login";
import { useDispatch } from "react-redux";
import { apiAuthLogin } from "@/services/apiAuth";

const Login = () => {
  const Context = createContext();
  const navigator = useNavigate();
  const [api, contextHolder] = useNotification();
  const dispatch = useDispatch();
  const onFinish = async (values) => {
     
    const responsive = await apiAuthLogin(values);
    responsive?.data?.success === 0 && dispatch(login(values));    

    responsive?.data?.success === 0 &&
      setTimeout(() => {
        responsive?.data.success === 0 && navigator("/admin");
      }, 1000);

    responsive?.data.success === 1 &&
      api.error({
        message: "Đăng nhập Admin không thành công",
        placement: "topRight",
      });
  };

  return (
    <div className="flex items-center h-[100vh] justify-center">
      <Context.Provider value={""}>
        {contextHolder}
        <Card className=" flex flex-col rounded-md shadow-2xl">
          <h1 className="font-bold text-[35px] text-center mb-4">Đăng nhập</h1>
          <Space.Compact>
            <Form
              name="Basic"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              initialValues={{ remember: true }}
              autoComplete="off"
              onFinish={onFinish}
            >
              <Form.Item
                label={"Username"}
                name={"username"}
                className="flex flex-col"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng không để trống username!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label={"Password"}
                name={"password"}
                className="flex flex-col"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng không để trống passwword",
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>
              <Form.Item label={null} className="mt-3">
                <Button type="primary" htmlType="submit">
                  Đăng nhập
                </Button>
              </Form.Item>
            </Form>
          </Space.Compact>
        </Card>
      </Context.Provider>
    </div>
  );
};

export default Login;
