"use client";
import React, { useState } from "react";
import {
  Layout,
  Menu,
  Input,
  Avatar,
  Badge,
  Space,
  Dropdown,
  Switch,
  ConfigProvider,
} from "antd";
import {
  BellOutlined,
  MessageOutlined,
  DownOutlined,
  DashboardOutlined,
  UserOutlined,
  HomeOutlined,
  SettingOutlined,
  CheckSquareOutlined,
} from "@ant-design/icons";
import { useSelector } from "react-redux";
import DashboardCards from "../../components/app-components/dashboardCards/page";
import TodoList from "../../components/functional-components/todoList/page";
import { dashboardData } from "../../components/app-components/data/dashboardData";
import MyProfile from "../../components/functional-components/myProfile/myprofile";
import Settingprofile from "../../components/functional-components/setting/settingProfile";
import logo from '../../assets/logo.svg'

const { Sider, Content, Header } = Layout;

const userMenu = (
  <Menu>
    <Menu.Item key="1">
      <SettingOutlined /> Settings
    </Menu.Item>
    <Menu.Item key="2">
      <UserOutlined /> Profile
    </Menu.Item>
    <Menu.Item key="3">
      <HomeOutlined /> Logout
    </Menu.Item>
  </Menu>
);

const Dashboard = () => {
  const [activeComponent, setActiveComponent] = useState("dashboard");
  const [darkMode, setDarkMode] = useState(false);
  const profile = useSelector((state) => state.tasks.profile);
  const toggleDarkMode = (checked) => {
    setDarkMode(checked);
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          colorBgBase: darkMode ? "#000" : "#fff",
          colorText: darkMode ? "#fff" : "#000",
        },
      }}
    >
      <Layout style={{ minHeight: "100vh" }}>
        <Sider width={250} style={{ background: "#001529" }}>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          {/* <img src={logo} alt="logo"></img> */}
            <Menu.Item key="1" onClick={() => setActiveComponent("eCommerce")}>
              <DashboardOutlined />
              <span style={{ marginLeft: "8px" }}>Dashboard</span>
            </Menu.Item>

            <Menu.Item key="2" onClick={() => setActiveComponent("profile")}>
              <UserOutlined />{" "}
              <span style={{ marginLeft: "8px" }}>Profile</span>
            </Menu.Item>

            <Menu.Item key="3" onClick={() => setActiveComponent("todoList")}>
              <CheckSquareOutlined />{" "}
              <span style={{ marginLeft: "8px" }}>Task</span>
            </Menu.Item>

            <Menu.Item key="4" onClick={() => setActiveComponent("setting")}>
              <SettingOutlined />
              <span style={{ marginLeft: "8px" }}>Setting</span>
            </Menu.Item>
          </Menu>
        </Sider>

        <Layout>
          <Header
            style={{ background: darkMode ? "#001529" : "#fff", padding: 0 }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Input
                placeholder="Type to search..."
                style={{ marginLeft: "2px", width: 600, borderRadius: 24 }}
              />

              <Space size="middle" align="center">
                <Switch
                  checked={darkMode}
                  onChange={toggleDarkMode}
                  checkedChildren="Dark"
                  unCheckedChildren="Light"
                />

                <Badge dot>
                  <BellOutlined style={{ fontSize: 24 }} />
                </Badge>
                <Badge dot>
                  <MessageOutlined style={{ fontSize: 24 }} />
                </Badge>

                <Dropdown overlay={userMenu} trigger={["click"]}>
                  <Space align="center">
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          marginRight: 5,
                        }}
                      >
                        <div style={{ fontWeight: 600 }}>
                          {profile.name || "Front End"}
                        </div>
                        <div
                          style={{
                            fontSize: 12,
                            color: "#888",
                            marginTop: "-42px",
                          }}
                        >
                          {profile.profession || "Developer"}
                        </div>
                      </div>
                    </div>

                    {profile.imageUrl ? (
                      <Avatar size={40} src={profile.imageUrl} />
                    ) : (
                      <Avatar size={40} icon={<UserOutlined />} />
                    )}

                    <DownOutlined />
                  </Space>
                </Dropdown>
              </Space>
            </div>
          </Header>

          <Content style={{ margin: "16px" }}>
            <div
              style={{
                padding: 24,
                background: darkMode ? "#333" : "#fff",
                minHeight: "85vh",
                color: darkMode ? "#fff" : "#000",
              }}
            >
              {activeComponent === "todoList" && <TodoList />}
              {activeComponent === "profile" && <MyProfile />}
              {activeComponent === "eCommerce" && (
                <DashboardCards data={dashboardData} />
              )}
              {activeComponent === "setting" && <Settingprofile />}
            </div>
          </Content>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};

export default Dashboard;
