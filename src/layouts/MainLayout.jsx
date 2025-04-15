import React from "react";
import { Button, Flex, Layout, Menu, Space, Typography } from "antd";
import { Link, Outlet, useLocation } from "react-router-dom";


const { Header, Footer, Content } = Layout;
const { Text } = Typography;
const MainLayout = () => {
  const location = useLocation();

  const getSelectedKey = (path) => {
    switch (path) {
      case "/":
        return "1";
      case "/about":
        return "2";
      case "/contact":
        return "3";
      default:
        return "";
    }
  };
  const Logout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };
  return (
    <Layout>
      <Header>
        <Flex align="center" justify="space-between">
          <div style={{ float: "left", color: "white", fontWeight: "bold" }}>
            MyApp
          </div>
          <Menu
            theme="dark"
            mode="horizontal"
            selectedKeys={[getSelectedKey(location.pathname)]}
          >
            <Menu.Item key="1">
              <Link to="/">Trang chủ</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/about">Giới thiệu</Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/contact">Liên hệ</Link>
            </Menu.Item>
          </Menu>
          {localStorage.getItem("token") && (
            <Flex align="center">
              <Space size={10} split={<span style={{ color: "red" }}>|</span>}>
                <Text style={{ color: "green" }}>
                  {localStorage.getItem("token")}
                </Text>

                <Button type="primary" onClick={Logout}>
                  Logout
                </Button>
              </Space>
            </Flex>
          )}
        </Flex>
      </Header>

      <Content style={{ padding: "24px", minHeight: "100vh" }}>
        <Outlet />
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

export default MainLayout;
