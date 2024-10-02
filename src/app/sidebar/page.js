
// "use client";
// import React, { useState } from 'react';
// import {
//   AppstoreOutlined,
//   SettingOutlined,
//   HomeOutlined,
//   UserOutlined,
//   DashboardOutlined,
//   UnorderedListOutlined,
//   ShoppingCartOutlined,
//   ProfileOutlined
// } from '@ant-design/icons';
// import { Menu } from 'antd';

// const items = [
//   {
//     key: 'sub1',
//     label: 'DashBoard',
//     icon: <DashboardOutlined />,
//     children: [
//       {
//         key: '1',
//         label: 'e-Commerce',
//         icon: <ShoppingCartOutlined />,
//       },
//     ],
//   },
//   {
//     key: 'sub2',
//     label: 'Profile',
//     icon: <UserOutlined />,
//     children: [
//       {
//         key: '2',
//         label: 'My Profile',
//         icon: <ProfileOutlined />,
//       },
//     ],
//   },
//   {
//     key: 'sub3',
//     label: 'Task',
//     icon: <UnorderedListOutlined />,
//     children: [
//       {
//         key: '3',
//         label: 'Task List',
//         icon: <AppstoreOutlined />,
//       },
//     ],
//   },
//   {
//     key: 'sub4',
//     label: 'Pages',
//     icon: <HomeOutlined />,
//     children: [
//       {
//         key: '4',
//         label: 'Settings',
//         icon: <SettingOutlined />,
//       },
//     ],
//   },
// ];

// const Sidebar = () => {
//   const [collapsed, setCollapsed] = useState(false);
//   const toggleCollapsed = () => {
//     setCollapsed(!collapsed);
//   };

//   return (
//     <div
//       style={{
//         width: 350,
//         height: 700,
//         overflowY: 'auto', // Add scrollbar for overflow
//       }}
//     >
//       <Menu
//         defaultSelectedKeys={['1']}
//         defaultOpenKeys={['sub1']}
//         mode="inline"
//         theme="dark"
//         inlineCollapsed={collapsed}
//         items={items}
//         style={{
//           height: '100%',
//           opacity:'1'
//         }}
//       />
//     </div>
//   );
// };

// export default Sidebar;
