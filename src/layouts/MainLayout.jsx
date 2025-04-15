import React from "react";
import { Button, Flex, Layout, Menu, Space, Typography } from "antd";
import { Link, useLocation } from "react-router-dom";

const { Header, Footer, Content } = Layout;
const { Text } = Typography;
const MainLayout = ({ children }) => {
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

      <Content style={{ padding: "24px", minHeight: "80vh" }}>
        {children}
      </Content>

      <Footer style={{ textAlign: "center" }}>©2025 Created by Cody</Footer>
    </Layout>
  );
};

export default MainLayout;
