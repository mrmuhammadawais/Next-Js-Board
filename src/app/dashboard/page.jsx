
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
} from "antd";
import {
  BellOutlined,
  MessageOutlined,
  DownOutlined,
  DashboardOutlined,
  UserOutlined,
  HomeOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import DashboardCards from '../../components/app-components/dashboardCards/page'; 
import TodoList from '../../components/functional-components/todoList/page';
import { dashboardData } from '../../components/app-components/data/dashboardData';
import MyProfile from '../../components/functional-components/myProfile/myprofile'; // Correct import
import Link from "next/link";
import Settingprofile from "../../components/functional-components/setting/settingProfile"
import channel from '../../components/app-components/data/channel'; 
import chatList from '../../components/app-components/data/chatList'
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
  const [activeComponent, setActiveComponent] = useState('dashboard'); // To track which view to show

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider width={250} style={{ background: "#001529" }}>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.SubMenu
            key="sub1"
            icon={<DashboardOutlined />}
            title="Dashboard"
          >
          
            <Menu.Item key="1" onClick={() => setActiveComponent('eCommerce')}>
            eCommerce
          </Menu.Item>
          </Menu.SubMenu>
          
          <Menu.Item key="2" onClick={() => setActiveComponent('profile')}>
            <UserOutlined />Profile
          </Menu.Item>
          
          <Menu.SubMenu key="sub3" icon={<DashboardOutlined />} title="Task">
            <Menu.Item key="3" onClick={() => setActiveComponent('todoList')}>
              List
            </Menu.Item>
          </Menu.SubMenu>

          <Menu.SubMenu key="sub4" icon={<HomeOutlined />} title="Pages">
          <Menu.Item key="4" onClick={() => setActiveComponent('setting')}>
              <SettingOutlined/>Setting
            </Menu.Item>
         
          </Menu.SubMenu>
        </Menu>
      </Sider>

      <Layout>
        <Header style={{ background: "#fff", padding: 0 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0 20px",
              marginTop: "-24px",

            }}
          >
            <Input
              placeholder="Type to search..."
              style={{ width: 800, borderRadius: 24 }}
            />

            <Space size="middle" align="center">
              <Switch>
                <div
                  style={{
                    width: 40,
                    height: 24,
                    backgroundColor: "#F0F2F5",
                    borderRadius: 12,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <svg viewBox="0 0 24 24" style={{ width: 20, height: 20 }}>
                    <circle cx="12" cy="12" r="4" fill="#000" />
                  </svg>
                </div>
              </Switch>

              <Badge dot>
                <BellOutlined style={{ fontSize: 24 }} />
              </Badge>
              <Badge dot>
                <MessageOutlined style={{ fontSize: 24 }} />
              </Badge>

              <Dropdown overlay={userMenu} trigger={["click"]}>
                <Space>
                  <Avatar size={60} src="https://i.pravatar.cc/300" />
                  <div>
                    <div style={{ fontWeight: 600 }}>Muhammad</div>
                    <div style={{ fontSize: 12, color: "#888" }}>
                     Next js Developer
                    </div>
                  </div>
                  <DownOutlined />
                </Space>
              </Dropdown>
            </Space>
          </div>
        </Header>

        <Content style={{ margin: "16px" }}>
          <div style={{ padding: 24, background: "#fff", minHeight: "85vh" }}>
            {activeComponent === 'todoList' && <TodoList />}
            {activeComponent === 'profile' && <MyProfile />}
            {activeComponent === 'eCommerce' && <DashboardCards data={dashboardData} />}
            {/* {activeComponent === 'eCommerce' && <DashboardCards data={channel} />} */}
            {/* {activeComponent === 'eCommerce' && <DashboardCards data={chatList} />} */}
            
            {activeComponent === 'setting' && <Settingprofile />}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;



