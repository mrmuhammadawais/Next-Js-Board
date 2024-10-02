// "use client"

// import React from 'react';
// import { Layout, Menu, Input, Avatar, Badge, Space, Dropdown, Switch } from 'antd';
// import { BellOutlined, MessageOutlined, DownOutlined, DashboardOutlined, UserOutlined, HomeOutlined, SettingOutlined } from '@ant-design/icons';
// import DashboardCards from '../dashboardCards/page' // Update this path to match your file structure
// import TodoList from '../todoList/page';
// import { dashboardData } from '../data/dashboardData'
// import Link from 'next/link';
// const { Sider, Content, Header } = Layout;

// const userMenu = (
//   <Menu>

//     <Menu.Item key="1">
//       <SettingOutlined /> Settings
//     </Menu.Item>
//     <Menu.Item key="2">
//       <UserOutlined /> Profile
//     </Menu.Item>
//     <Menu.Item key="3">
//       <HomeOutlined /> Logout
//     </Menu.Item>
//   </Menu>

// );

// const Dashboard = () => {
//   return (
//     <Layout style={{ minHeight: '100vh' }}>
//       {/* Sidebar */}
//       <Sider width={250} style={{ background: '#001529' }}>
//         <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
//           <Menu.SubMenu key="sub1" icon={<DashboardOutlined />} title="Dashboard">
//             <Menu.Item key="1">e-Commerce</Menu.Item>
//           </Menu.SubMenu>
//           <Menu.Item key="2" icon={<UserOutlined />}>Profile</Menu.Item>
//           <Menu.SubMenu key="sub3" icon={<DashboardOutlined />} title="Task">
//             {/* <Menu.Item><Link key="3" >List</Link></Menu.Item> */}
//           <Menu.Item><Link key="3" href="/todoList">List</Link></Menu.Item>
//           </Menu.SubMenu>
//           <Menu.SubMenu key="sub4" icon={<HomeOutlined />} title="Pages">
//             <Menu.Item key="4" icon={<SettingOutlined />}>Settings</Menu.Item>
//           </Menu.SubMenu>
//         </Menu>
//       </Sider>

//       {/* Main Content Area */}
//       <Layout>
//         {/* Navbar */}
//         <Header style={{ background: '#fff', padding: 0 }}>
//           <div style={{
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'space-between',
//             padding: '0 20px',
//           }}>
//             {/* Search Bar */}
//             <Input
//               placeholder="Type to search..."
//               style={{ width: 800, borderRadius: 24 }}
//             />

//             {/* User Info */}
//             <Space size="middle" align="center">
//               <Switch>
//                 <div style={{
//                   width: 40,
//                   height: 24,
//                   backgroundColor: '#F0F2F5',
//                   borderRadius: 12,
//                   display: 'flex',
//                   justifyContent: 'center',
//                   alignItems: 'center',
//                 }}>
//                   <svg viewBox="0 0 24 24" style={{ width: 20, height: 20 }}><circle cx="12" cy="12" r="4" fill="#000" /></svg>
//                 </div>
//               </Switch>

//               {/* Notification Icons */}
//               <Badge dot>
//                 <BellOutlined style={{ fontSize: 24 }} />
//               </Badge>
//               <Badge dot>
//                 <MessageOutlined style={{ fontSize: 24 }} />
//               </Badge>

//               {/* User Dropdown */}
//               <Dropdown overlay={userMenu} trigger={['click']}>
//                 <Space>
//                   <Avatar size={60} src="https://i.pravatar.cc/300" />
//                   <div>
//                     <div style={{ fontWeight: 600 }}>Thomas Anree</div>
//                     <div style={{ fontSize: 12, color: '#888' }}>UX Designer</div>
//                   </div>
//                   <DownOutlined />
//                 </Space>
//               </Dropdown>
//             </Space>
//           </div>
//         </Header>

//         <Content style={{ margin: '16px' }}>
//           <div style={{ padding: 24, background: '#fff', minHeight: '85vh' }}>
//             <DashboardCards data={dashboardData} />
//             {/* <TodoList><Link to="/todolist"></Link></TodoList> */}
//           </div>
//         </Content>
//       </Layout>
//     </Layout>
//   );
// };

// export default Dashboard;

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
import DashboardCards from "../dashboardCards/page"; // Update this path to match your file structure
import TodoList from "../todoList/page";
import { dashboardData } from "../data/dashboardData";
import Link from "next/link";
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
  const [showTodoList, setShowTodoList] = useState(false);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* Sidebar */}
      <Sider width={250} style={{ background: "#001529" }}>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.SubMenu
            key="sub1"
            icon={<DashboardOutlined />}
            title="Dashboard"
          >
            {/* <Menu.Item key="1">e-Commerce</Menu.Item> */}

            <Menu.Item>
              <Link key="1" href="/">
                eCommerce
              </Link>
            </Menu.Item>
          </Menu.SubMenu>
          <Menu.Item key="2" icon={<UserOutlined />}>
            Profile
          </Menu.Item>
          <Menu.SubMenu key="sub3" icon={<DashboardOutlined />} title="Task">
            <Menu.Item key="3" onClick={() => setShowTodoList(true)}>
              List
            </Menu.Item>
          </Menu.SubMenu>
          <Menu.SubMenu key="sub4" icon={<HomeOutlined />} title="Pages">
            <Menu.Item key="4" icon={<SettingOutlined />}>
              Settings
            </Menu.Item>
          </Menu.SubMenu>
        </Menu>
      </Sider>

      {/* Main Content Area */}
      <Layout>
        {/* Navbar */}
        <Header style={{ background: "#fff", padding: 0 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0 20px",
            }}
          >
            {/* Search Bar */}
            <Input
              placeholder="Type to search..."
              style={{ width: 800, borderRadius: 24 }}
            />

            {/* User Info */}
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

              {/* Notification Icons */}
              <Badge dot>
                <BellOutlined style={{ fontSize: 24 }} />
              </Badge>
              <Badge dot>
                <MessageOutlined style={{ fontSize: 24 }} />
              </Badge>

              {/* User Dropdown */}
              <Dropdown overlay={userMenu} trigger={["click"]}>
                <Space>
                  <Avatar size={60} src="https://i.pravatar.cc/300" />
                  <div>
                    <div style={{ fontWeight: 600 }}>Thomas Anree</div>
                    <div style={{ fontSize: 12, color: "#888" }}>
                      UX Designer
                    </div>
                  </div>
                  <DownOutlined />
                </Space>
              </Dropdown>
            </Space>
          </div>
        </Header>

        {/* <Content style={{ margin: '16px' }}>
          <div style={{ padding: 24, background: '#fff', minHeight: '85vh' }}>
            <DashboardCards data={dashboardData} />
            {showTodoList && <TodoList />}
          </div>
        </Content> */}
        <Content style={{ margin: "16px" }}>
          <div style={{ padding: 24, background: "#fff", minHeight: "85vh" }}>
            {showTodoList ? (
              <TodoList />
            ) : (
              <DashboardCards data={dashboardData} />
            )}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
