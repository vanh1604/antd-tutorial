import React from "react";
import { Form, Input, Button, Typography, Flex, Image } from "antd";
import logo from "../assets/image/logo.png";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

const { Text } = Typography;
const PasswordRules = () => (
  <div style={{ flex: 1, padding: "0 24px" }}>
    <Text style={{ color: "rgba(0, 0, 0, 0.45)", font: "14" }}>
      パスワードの設定ルール
    </Text>
    <div>
      <li style={{ color: "rgba(0, 0, 0, 0.65)", font: "14", opacity: 0.65 }}>
        パスワードは8文字以上32文字以内で設定ください。
      </li>
      <li style={{ color: "rgba(0, 0, 0, 0.65)", font: "14", opacity: 0.65 }}>
        パスワードは半角英数で設定ください。
      </li>
      <li style={{ color: "rgba(0, 0, 0, 0.65)", font: "14", opacity: 0.65 }}>
        パスワードには数字と英字の2種を含めてください。
      </li>
      <li style={{ color: "rgba(0, 0, 0, 0.65)", font: "14", opacity: 0.65 }}>
        パスワードにはスペースや記号は使用できません。
      </li>
    </div>
  </div>
);
const RegisterForm = () => {
  return (
    <Flex vertical align="center" style={{ flex: 1 }}>
      <Image preview={false} src={logo} />
      <div style={{ width: "100%" }}>
        <Typography.Title level={4}>アカウント情報</Typography.Title>

        <Flex
          style={{ padding: "0 20px" }}
          align="start"
          justify="space-between"
        >
          <Form style={{ flex: 1, padding: "24" }} layout="vertical">
            <Form.Item
              label="ユーザー名"
              name="username"
              rules={[
                { required: true, message: "ユーザー名を入力してください" },
              ]}
            >
              <Input size="large" disabled placeholder="0354722031" />
            </Form.Item>
            <Form.Item
              label="パスワード"
              name="password"
              rules={[
                { required: true, message: "パスワードを入力してください" },
              ]}
            >
              <Input.Password
                style={{ position: "relative", overflow: "hidden" }}
                size="large"
                iconRender={(visible) => (
                  <div
                    style={{
                      display: "grid",
                      placeItems: "center",
                      paddingInline: 12,
                      fontSize: 14,
                      backgroundColor: "#FAFAFA",
                      border: "1px solid #D9D9D9",
                      position: "absolute",
                      inset: 0,
                      left: "unset",
                    }}
                  >
                    {visible ? (
                      <EyeTwoTone twoToneColor={"black"} />
                    ) : (
                      <EyeInvisibleOutlined />
                    )}
                  </div>
                )}
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
                style={{ position: "relative", overflow: "hidden" }}
                size="large"
                iconRender={(visible) => (
                  <div
                    style={{
                      display: "grid",
                      placeItems: "center",
                      paddingInline: 12,
                      fontSize: 14,
                      backgroundColor: "#FAFAFA",
                      border: "1px solid #D9D9D9",
                      position: "absolute",
                      inset: 0,
                      left: "unset",
                    }}
                  >
                    {visible ? (
                      <EyeTwoTone twoToneColor={"black"} />
                    ) : (
                      <EyeInvisibleOutlined />
                    )}
                  </div>
                )}
              />
            </Form.Item>
          </Form>
          <div style={{ flex: 1, padding: "0 24px" }}>
            <PasswordRules />
          </div>
        </Flex>
      </div>
      <Flex align="center" justify="center">
        <Button
          size="large"
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
