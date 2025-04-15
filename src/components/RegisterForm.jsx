import React, { useState } from "react";
import { Form, Input, Button, Typography, Space, Flex, Image } from "antd";
import logo from "../assets/image/logo.png";
import {  EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

const { Text } = Typography;
const PasswordRules = () => (
  <div style={{ width: 448 }}>
    <Text style={{ color: "rgba(0, 0, 0, 0.45)", font: "14" }}>
      パスワードの設定ルール
    </Text>
    <div>
      <li style={{ color: "rgba(0, 0, 0, 0.65)", font: "14" }}>
        パスワードは8文字以上32文字以内で設定ください。
      </li>
      <li style={{ color: "rgba(0, 0, 0, 0.65)", font: "14" }}>
        パスワードは半角英数で設定ください。
      </li>
      <li style={{ color: "rgba(0, 0, 0, 0.65)", font: "14" }}>
        パスワードには数字と英字の2種を含めてください。
      </li>
      <li style={{ color: "rgba(0, 0, 0, 0.65)", font: "14" }}>
        パスワードにはスペースや記号は使用できません。
      </li>
    </div>
  </div>
);
const RegisterForm = () => {
  return (
    <Flex vertical align="center" style={{ flex: 1 }}>
      <Image height={80} width={220} preview={false} src={logo} />
      <div style={{ width: "100%" }}>
        <Typography.Title level={4}>アカウント情報</Typography.Title>

        <Flex
          style={{ width: "992", padding: "0 20px" }}
          align="start"
          justify="space-between"
        >
          <Form layout="vertical">
            <Form.Item
              label="ユーザー名"
              name="username"
              rules={[
                { required: true, message: "ユーザー名を入力してください" },
              ]}
            >
              <Input
                disabled
                style={{ width: 400, height: 40 }}
                placeholder="0354722031"
              />
            </Form.Item>
            <Form.Item
              label="パスワード"
              name="password"
              rules={[
                { required: true, message: "パスワードを入力してください" },
              ]}
            >
              <Input.Password
                style={{ width: 400, height: 40 }}
                iconRender={(visible) =>
                  visible ? (
                    <EyeTwoTone style={{ fontSize: 18 }} />
                  ) : (
                    <EyeInvisibleOutlined style={{ fontSize: 18 }} />
                  )
                }
              />
            </Form.Item>

            <Form.Item
              label="パスワード（確認用）"
              name="confirm"
              rules={[
                {
                  required: true,
                  message: "パスワード（確認用）を入力してください",
                },
              ]}
            >
              <Input.Password
                style={{ width: 400, height: 40 }}
                iconRender={(visible) =>
                  visible ? (
                    <EyeTwoTone style={{ fontSize: 18,background:"red" }} />
                  ) : (
                    <EyeInvisibleOutlined style={{ fontSize: 18 }} />
                  )
                }
              />
            </Form.Item>
          </Form>
          <PasswordRules />
        </Flex>
      </div>
      <Flex align="center" justify="center">
        <Button
          style={{ backgroundColor: "#D893BA", color: "white" }}
          htmlType="submit"
        >
          次へ
        </Button>
      </Flex>
    </Flex>
  );
};

export default RegisterForm;
