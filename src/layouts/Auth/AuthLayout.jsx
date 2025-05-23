import React from "react";
import { Flex, Layout, Typography } from "antd";

const { Header, Footer, Content } = Layout;
const { Link, Text, Title } = Typography;

const AuthLayout = ({ children }) => {
  return (
    <Layout
      style={{ minHeight: "100vh", background: "rgba(255, 255, 255, 1)" }}
    >
      <Header style={{ backgroundColor: "white" }}>
        <Flex gap={8} align="center" justify="flex-end" style={{ padding: 20 }}>
          <Link style={{ color: "#D893BA", padding: "15px 6.4px" }} href="#">
            やさしい手ホームページ
          </Link>
          <Link style={{ color: "#D893BA", padding: "15px 6.4px" }} href="#">
            プライバシーポリシー
          </Link>
          <Link style={{ color: "#D893BA", padding: "15px 6.4px" }} href="#">
            ヘルプ
          </Link>
        </Flex>
      </Header>

      <Content
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Flex
          style={{
            background: "#fff",
            padding: 20,
            border: "2px solid rgba(0, 0, 0, 0.25)",
            borderRadius: 10,
            boxShadow: "-6px 6px 4px 0px rgba(0, 0, 0, 0.25)",
            maxWidth: 1000,
            width: "100%",
            gap: 40,
          }}
        >
          {children}
        </Flex>
      </Content>

      <Footer
        style={{
          textAlign: "center",
          background: "rgba(235, 201, 223, 1)",
          color: "#fff",
        }}
      >
        <Flex vertical gap={10} align="center" justify="center">
          <Text style={{ color: "white", font: "24" }}>株式会社やさしい手</Text>
          <Text style={{ color: "white", font: "20" }}>
            〒153-0044 東京都目黒区大橋2-24-3 中村ビル4階
          </Text>
          <Text style={{ color: "white", font: "20" }}>
            © 2006 YASASHIITE, Inc.
          </Text>
        </Flex>
      </Footer>
    </Layout>
  );
};

export default AuthLayout;
