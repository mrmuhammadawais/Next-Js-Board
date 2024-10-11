// "use client";
// import React, { useState } from "react";
// import {
//   Layout,
//   Menu,
//   Input,
//   Avatar,
//   Badge,
//   Space,
//   Dropdown,
//   Switch,
//   ConfigProvider,
// } from "antd";
// import {
//   BellOutlined,
//   MessageOutlined,
//   DownOutlined,
//   DashboardOutlined,
//   UserOutlined,
//   SettingOutlined,
//   CheckSquareOutlined,
// } from "@ant-design/icons";
// import { useSelector } from "react-redux";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import Logo from "../../../assets/logo.svg"
// const { Sider, Content, Header } = Layout;

// const userMenu = (
//   <Menu>
//     <Menu.Item key="1">
//       <SettingOutlined /><Link href="/setting">
//       Settings
//       </Link>
//     </Menu.Item>
//     <Menu.Item key="2">
//       <UserOutlined /><Link href="/profile">
//       Profile
//       </Link>
//     </Menu.Item>
//     <Menu.Item key="3">
//       <SettingOutlined /> Logout
//     </Menu.Item>
//   </Menu>
// );

// const MainLayout = ({ children }) => {
//   const [darkMode, setDarkMode] = useState(false);
//   const profile = useSelector((state) => state.tasks.profile);
//   const pathname = usePathname();

//   const menuItems = [
//     {
//       path: "/dashboardCards",
//       icon: <DashboardOutlined />,
//       label: "Dashboard",
//     },
//     {
//       path: "/profile",
//       icon: <UserOutlined />,
//       label: "Profile",
//     },
//     {
//       path: "/todoList",
//       icon: <CheckSquareOutlined />,
//       label: "Task",
//     },
//     {
//       path: "/setting",
//       icon: <SettingOutlined />,
//       label: "Setting",
//     },
//   ];

//   const activeKey = pathname;

//   const toggleDarkMode = (checked) => {
//     setDarkMode(checked);
//   };

//   return (
//     <ConfigProvider
//       theme={{
//         token: {
//           colorBgBase: darkMode ? "#000" : "#fff",
//           colorText: darkMode ? "#fff" : "#000",
//         },
//       }}
//     >
//       <Layout style={{ minHeight: "100vh" }}>
//         <Sider width={250} style={{ background: "#001529" }}>

//           <div style={{ padding: "16px", textAlign: "center" }}>
//             <img
//               src="/Logo"
//               alt="Logo1"
//               style={{ maxWidth: "100%", height: "auto" }}
//             />
//           </div>
//           <Menu theme="dark" mode="inline" selectedKeys={[activeKey]}>
//             {menuItems.map(({ path, icon, label }) => (
//               <Menu.Item key={path}>
//                 <Link href={path} style={{ display: 'flex', alignItems: 'center' }}>
//                   {icon}
//                   <span style={{ marginLeft: '8px' }}>{label}</span>
//                 </Link>
//               </Menu.Item>
//             ))}
//           </Menu>
//         </Sider>

//         <Layout>
//           <Header
//             style={{ background: darkMode ? "#001529" : "#fff", padding: 0 }}
//           >
//             <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
//               <Input
//                 placeholder="Type to search..."
//                 style={{ marginLeft: "2px", width: 600, border:'none'}}
//               />
//               <Space size="middle" align="center">
//                 <Switch
//                   checked={darkMode}
//                   onChange={toggleDarkMode}
//                   checkedChildren="Dark"
//                   unCheckedChildren="Light"
//                 />
//                 <Badge dot>
//                   <BellOutlined style={{ fontSize: 24 }} />
//                 </Badge>
//                 <Badge dot>
//                   <MessageOutlined style={{ fontSize: 24 }} />
//                 </Badge>
//                 <Dropdown overlay={userMenu} trigger={["click"]}>
//                   <Space align="center">
//                     <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
//                       <div style={{ display: "flex", flexDirection: "column", marginRight: 5 }}>
//                         <div style={{ fontWeight: 600 }}>
//                           {profile.name || "Front End"}
//                         </div>
//                         <div style={{ fontSize: 12, color: "#888", marginTop: "-42px" }}>
//                           {profile.profession || "Developer"}
//                         </div>
//                       </div>
//                     </div>
//                     {profile.imageUrl ? (
//                       <Avatar size={40} src={profile.imageUrl} />
//                     ) : (
//                       <Avatar size={40} icon={<UserOutlined />} />
//                     )}
//                     <DownOutlined />
//                   </Space>
//                 </Dropdown>
//               </Space>
//             </div>
//           </Header>

//           <Content style={{ margin: "16px" }}>
//             <div
//               style={{
//                 padding: 24,
//                 background: darkMode ? "#333" : "#fff",
//                 minHeight: "85vh",
//                 color: darkMode ? "#fff" : "#000",
//               }}
//             >
//               {children}
//             </div>
//           </Content>
//         </Layout>
//       </Layout>
//     </ConfigProvider>
//   );
// };

// export default MainLayout;





// "use client";
// import React, { useState, useEffect } from "react";
// import {
//   Layout,
//   Menu,
//   Input,
//   Avatar,
//   Badge,
//   Space,
//   Dropdown,
//   Switch,
//   ConfigProvider,
// } from "antd";
// import {
//   BellOutlined,
//   MessageOutlined,
//   DownOutlined,
//   DashboardOutlined,
//   UserOutlined,
//   SettingOutlined,
//   CheckSquareOutlined,
//   MenuOutlined,
// } from "@ant-design/icons";
// import { useSelector } from "react-redux";
// import Link from "next/link";
// import { usePathname, useRouter } from "next/navigation"; // Added useRouter

// const { Sider, Content, Header } = Layout;

// const userMenu = (
//   <Menu>
//     <Menu.Item key="1">
//       <SettingOutlined />
//       <Link href="/setting">Settings</Link>
//     </Menu.Item>
//     <Menu.Item key="2">
//       <UserOutlined />
//       <Link href="/profile">Profile</Link>
//     </Menu.Item>
//     <Menu.Item key="3">
//       <SettingOutlined /> Logout
//     </Menu.Item>
//   </Menu>
// );

// const MainLayout = ({ children }) => {
//   const [darkMode, setDarkMode] = useState(false);
//   const [collapsed, setCollapsed] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);

//   const profile = useSelector((state) => state.tasks.profile);
//   const pathname = usePathname();
//   const router = useRouter(); // For handling navigation

//   const menuItems = [
//     {
//       path: "/dashboardCards",
//       icon: <DashboardOutlined />,
//       label: "Dashboard",
//     },
//     {
//       path: "/profile",
//       icon: <UserOutlined />,
//       label: "Profile",
//     },
//     {
//       path: "/todoList",
//       icon: <CheckSquareOutlined />,
//       label: "Task",
//     },
//     {
//       path: "/setting",
//       icon: <SettingOutlined />,
//       label: "Setting",
//     },
//   ];

//   const activeKey = pathname;

//   const toggleDarkMode = (checked) => {
//     setDarkMode(checked);
//   };

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 1024);
//       setCollapsed(window.innerWidth < 1024);
//     };

//     handleResize();

//     window.addEventListener("resize", handleResize);

//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <ConfigProvider
//       theme={{
//         token: {
//           colorBgBase: darkMode ? "#24303F" : "#f0f2f5", 
//           colorText: darkMode ? "#fff" : "#000",
//         },
//       }}
//     >
//       <Layout
//         className="min-h-screen"
//         style={{ backgroundColor: darkMode ? "#24303F" : "#f0f2f5" }}
//       >
//         <Sider
//           width={250}
//           className="bg-[#1c2434]"
//           collapsible
//           collapsed={collapsed}
//           onCollapse={setCollapsed}
//           breakpoint="lg"
//           trigger={null}
//         >
//           <div className="p-4 text-center">
//             <img
//               // src={Logo}
//               // alt="Logo"
//               className={`max-w-full h-auto transition-all duration-300 ${
//                 collapsed ? "hidden" : ""
//               }`}
//             />
//           </div>
//           <Menu
//             theme="dark"
//             mode="inline"
//             selectedKeys={[activeKey]}
//             style={{ backgroundColor: "transparent" }}
//             items={menuItems.map(({ path, icon, label }) => ({
//               key: path,
//               icon,
//               label: !collapsed ? <Link href={path}>{label}</Link> : null,
//               style: {
//                 backgroundColor: "transparent",
//                 transition: "background-color 0.3s",
//               },
//               onClick: () => {
//                 router.push(path);
//               },
//               onMouseEnter: (e) => {
//                 e.domEvent.currentTarget.style.backgroundColor =
//                   "rgba(255, 255, 255, 0.1)";
//               },
//               onMouseLeave: (e) => {
//                 e.domEvent.currentTarget.style.backgroundColor = "transparent";
//               },
//             }))}
//           />
//           {isMobile && (
//             <div className="absolute top-4 left-4">
//               <MenuOutlined
//                 className="text-white cursor-pointer"
//                 onClick={() => setCollapsed(!collapsed)}
//                 style={{ fontSize: "24px" }}
//               />
//             </div>
//           )}
//         </Sider>

//         <Layout>
//           <Header
//             className={`${
//               darkMode ? "bg-[#24303F]" : "bg-[#f0f2f5]"
//             } p-0 flex justify-between items-center`}
//           >
//             <Input
//                 placeholder="Type to search..."
//                 style={{ marginLeft: "2px", width: 600, border:'none'}}
//               // placeholder="Type to search... "
//               // className={`ml-1 border-none h-[57px] w-[79%] ${
//                 // darkMode ? "bg-[#24303F] text-white" : "bg-white text-black"
//               // }`}
//             />

//             <Space size="middle" align="center">
//               <Switch
//                 checked={darkMode}
//                 onChange={toggleDarkMode}
//                 checkedChildren="Dark"
//                 unCheckedChildren="Light"
//               />
//               <Badge dot>
//                 <BellOutlined className="text-xl" />
//               </Badge>
//               <Badge dot>
//                 <MessageOutlined className="text-xl" />
//               </Badge>
//               <Dropdown overlay={userMenu} trigger={["click"]}>
//                 <Space align="center">
//                   <div className="flex flex-row items-center">
//                     <div className="flex flex-col mr-2">
//                       <div className="font-semibold">
//                         {profile.name || "Front End"}
//                       </div>
//                       <div className="text-xs text-gray-500 -mt-[-84px]">
//                         {profile.profession || "Developer"}
//                       </div>
//                     </div>
//                   </div>
//                   {profile.imageUrl ? (
//                     <Avatar size={40} src={profile.imageUrl} />
//                   ) : (
//                     <Avatar size={40} icon={<UserOutlined />} />
//                   )}
//                   <DownOutlined />
//                 </Space>
//               </Dropdown>
//             </Space>
//           </Header>

//           <Content className="m-4">
//             <div
//               className={`p-6 ${
//                 darkMode ? "bg-[#24303F]" : "bg-[#fff]"
//               } min-h-[85vh]`}
//             >
//               {children}
//             </div>
//           </Content>
//         </Layout>
//       </Layout>
//     </ConfigProvider>
//   );
// };

// export default MainLayout;




// "use client";
// import React, { useState, useEffect } from "react";
// import {
//   Layout,
//   Menu,
//   Input,
//   Avatar,
//   Badge,
//   Space,
//   Dropdown,
//   Switch,
//   ConfigProvider,
// } from "antd";
// import {
//   BellOutlined,
//   MessageOutlined,
//   DownOutlined,
//   DashboardOutlined,
//   UserOutlined,
//   SettingOutlined,
//   CheckSquareOutlined,
//   MenuOutlined,
// } from "@ant-design/icons";
// import { useSelector } from "react-redux";
// import Link from "next/link";
// import { usePathname, useRouter } from "next/navigation"; // Added useRouter

// const { Sider, Content, Header } = Layout;

// const userMenu = (
//   <Menu>
//     <Menu.Item key="1">
//       <SettingOutlined />
//       <Link href="/setting">Settings</Link>
//     </Menu.Item>
//     <Menu.Item key="2">
//       <UserOutlined />
//       <Link href="/profile">Profile</Link>
//     </Menu.Item>
//     <Menu.Item key="3">
//       <SettingOutlined /> Logout
//     </Menu.Item>
//   </Menu>
// );

// const MainLayout = ({ children }) => {
//   const [darkMode, setDarkMode] = useState(false);
//   const [collapsed, setCollapsed] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);

//   const profile = useSelector((state) => state.tasks.profile);
//   const pathname = usePathname();
//   const router = useRouter(); // For handling navigation

//   const menuItems = [
//     {
//       path: "/dashboardCards",
//       icon: <DashboardOutlined />,
//       label: "Dashboard",
//     },
//     {
//       path: "/profile",
//       icon: <UserOutlined />,
//       label: "Profile",
//     },
//     {
//       path: "/todoList",
//       icon: <CheckSquareOutlined />,
//       label: "Task",
//     },
//     {
//       path: "/setting",
//       icon: <SettingOutlined />,
//       label: "Setting",
//     },
//   ];

//   const activeKey = pathname;

//   const toggleDarkMode = (checked) => {
//     setDarkMode(checked);
//   };

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 1024);
//       setCollapsed(window.innerWidth < 1024);
//     };

//     handleResize();

//     window.addEventListener("resize", handleResize);

//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <ConfigProvider
//       theme={{
//         token: {
//           colorBgBase: darkMode ? "#1a222c" : "#f0f2f5", // Updated for body background
//           colorText: darkMode ? "#fff" : "#000", // Update text color for dark mode
//         },
//       }}
//     >
//       <Layout
//         className="min-h-screen"
//         style={{ backgroundColor: darkMode ? "#1a222c" : "#f0f2f5" }} // Body background color for dark mode
//       >
//         <Sider
//           width={250}
//           className={darkMode ? "bg-[#24303F]" : "bg-[#1c2434]"} // Sidebar color for dark mode
//           collapsible
//           collapsed={collapsed}
//           onCollapse={setCollapsed}
//           breakpoint="lg"
//           trigger={null}
//         >
//           <div className="p-4 text-center">
//             <img
             
//               className={`max-w-full h-auto transition-all duration-300 ${
//                 collapsed ? "hidden" : ""
//               }`}
//             />
//           </div>
//           <Menu
//             theme="dark"
//             mode="inline"
//             selectedKeys={[activeKey]}
//             style={{ backgroundColor: "transparent", color: darkMode ? "#fff" : "#000" }} // Text color in dark mode
//             items={menuItems.map(({ path, icon, label }) => ({
//               key: path,
//               icon,
//               label: !collapsed ? <Link href={path}>{label}</Link> : null,
//               style: {
//                 backgroundColor: "transparent",
//                 transition: "background-color 0.3s",
//                 color: darkMode ? "#fff" : "#fff", // Text color for menu items in dark mode
//               },
//               onClick: () => {
//                 router.push(path);
//               },
//               onMouseEnter: (e) => {
//                 e.domEvent.currentTarget.style.backgroundColor =
//                   "rgba(255, 255, 255, 0.1)";
//               },
//               onMouseLeave: (e) => {
//                 e.domEvent.currentTarget.style.backgroundColor = "transparent";
//               },
//             }))}
//           />
//           {isMobile && (
//             <div className="absolute top-4 left-4">
//               <MenuOutlined
//                 className="text-white cursor-pointer"
//                 onClick={() => setCollapsed(!collapsed)}
//                 style={{ fontSize: "24px" }}
//               />
//             </div>
//           )}
//         </Sider>

//         <Layout>
//           <Header
//             className={`${
//               darkMode ? "bg-[#24303F]" : "bg-[#f0f2f5]"
//             } p-0 flex justify-between items-center`}
//           >
//             <Input
//               placeholder="Type to search..."
//               style={{ marginLeft: "2px", width: 600, border: "none" }}
//             />

//             <Space size="middle" align="center">
//               <Switch
//                 checked={darkMode}
//                 onChange={toggleDarkMode}
//                 checkedChildren="Dark"
//                 unCheckedChildren="Light"
//               />
//               <Badge dot>
//                 <BellOutlined className="text-xl" style={{ color: darkMode ? "#fff" : "#000" }} />
//               </Badge>
//               <Badge dot>
//                 <MessageOutlined className="text-xl" style={{ color: darkMode ? "#fff" : "#000" }} />
//               </Badge>
//               <Dropdown overlay={userMenu} trigger={["click"]}>
//                 <Space align="center">
//                   <div className="flex flex-row items-center">
//                     <div className="flex flex-col mr-2">
//                       <div className="font-semibold" style={{ color: darkMode ? "#fff" : "#000" }}>
//                         {profile.name || "Front End"}
//                       </div>
//                       <div className="text-xs" style={{ color: darkMode ? "#cfcfcf" : "#000" }}>
//                         {profile.profession || "Developer"}
//                       </div>
//                     </div>
//                   </div>
//                   {profile.imageUrl ? (
//                     <Avatar size={40} src={profile.imageUrl} />
//                   ) : (
//                     <Avatar size={40} icon={<UserOutlined />} />
//                   )}
//                   <DownOutlined style={{ color: darkMode ? "#fff" : "#000" }} />
//                 </Space>
//               </Dropdown>
//             </Space>
//           </Header>

//           <Content className="m-4">
//             <div
//               className={`p-6 ${
//                 darkMode ? "bg-[#24303F]" : "bg-[#fff]"
//               } min-h-[85vh]`}
//             >
//               {children}
//             </div>
//           </Content>
//         </Layout>
//       </Layout>
//     </ConfigProvider>
//   );
// };

// export default MainLayout;





// "use client";
// import React, { useState, useEffect } from "react";
// import {
//   Layout,
//   Menu,
//   Input,
//   Avatar,
//   Badge,
//   Space,
//   Dropdown,
//   Switch,
//   ConfigProvider,
// } from "antd";
// import {
//   BellOutlined,
//   MessageOutlined,
//   DownOutlined,
//   DashboardOutlined,
//   UserOutlined,
//   SettingOutlined,
//   CheckSquareOutlined,
//   MenuOutlined,
// } from "@ant-design/icons";
// import { useSelector } from "react-redux";
// import Link from "next/link";
// import { usePathname, useRouter } from "next/navigation"; // Added useRouter

// const { Sider, Content, Header } = Layout;

// const userMenu = (
//   <Menu>
//     <Menu.Item key="1">
//       <SettingOutlined />
//       <Link href="/setting">Settings</Link>
//     </Menu.Item>
//     <Menu.Item key="2">
//       <UserOutlined />
//       <Link href="/profile">Profile</Link>
//     </Menu.Item>
//     <Menu.Item key="3">
//       <SettingOutlined /> Logout
//     </Menu.Item>
//   </Menu>
// );

// const MainLayout = ({ children }) => {
//   const [darkMode, setDarkMode] = useState(false);
//   const [collapsed, setCollapsed] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);

//   const profile = useSelector((state) => state.tasks.profile);
//   const pathname = usePathname();
//   const router = useRouter(); // For handling navigation

//   const menuItems = [
//     {
//       path: "/dashboardCards",
//       icon: <DashboardOutlined />,
//       label: "Dashboard",
//     },
//     {
//       path: "/profile",
//       icon: <UserOutlined />,
//       label: "Profile",
//     },
//     {
//       path: "/todoList",
//       icon: <CheckSquareOutlined />,
//       label: "Task",
//     },
//     {
//       path: "/setting",
//       icon: <SettingOutlined />,
//       label: "Setting",
//     },
//   ];

//   const activeKey = pathname;

//   const toggleDarkMode = (checked) => {
//     setDarkMode(checked);
//   };

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 1024);
//       setCollapsed(window.innerWidth < 1024);
//     };

//     handleResize();

//     window.addEventListener("resize", handleResize);

//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <ConfigProvider
//       theme={{
//         token: {
//           colorBgBase: darkMode ? "#1a222c" : "#f0f2f5", // Updated for body background
//           colorText: darkMode ? "#fff" : "#000", // Update text color for dark mode
//         },
//       }}
//     >
//       <Layout
//         className="min-h-screen"
//         style={{ backgroundColor: darkMode ? "#1a222c" : "#f0f2f5" }} // Body background color for dark mode
//       >
//         <Sider
//           width={250}
//           className={darkMode ? "bg-[#24303F]" : "bg-[#1c2434]"} // Sidebar color for dark mode
//           collapsible
//           collapsed={collapsed}
//           onCollapse={setCollapsed}
//           breakpoint="lg"
//           trigger={null}
//         >
//           <div className="p-4 text-center">
//             <img
//               className={`max-w-full h-auto transition-all duration-300 ${
//                 collapsed ? "hidden" : ""
//               }`}
//             />
//           </div>
//           <Menu
//             theme="dark"
//             mode="inline"
//             selectedKeys={[activeKey]}
//             style={{ backgroundColor: "transparent", color: darkMode ? "#fff" : "#000" }} // Text color in dark mode
//             items={menuItems.map(({ path, icon, label }) => ({
//               key: path,
//               icon,
//               label: !collapsed ? <Link href={path}>{label}</Link> : null,
//               style: {
//                 backgroundColor: "transparent",
//                 transition: "background-color 0.3s",
//                 color: darkMode ? "#fff" : "#fff", // Text color for menu items in dark mode
//               },
//               onClick: () => {
//                 router.push(path);
//               },
//               onMouseEnter: (e) => {
//                 e.domEvent.currentTarget.style.backgroundColor =
//                   "rgba(255, 255, 255, 0.1)";
//               },
//               onMouseLeave: (e) => {
//                 e.domEvent.currentTarget.style.backgroundColor = "transparent";
//               },
//             }))}
//           />
//           {isMobile && (
//             <div className="absolute top-4 left-4">
//               <MenuOutlined
//                 className="text-white cursor-pointer"
//                 onClick={() => setCollapsed(!collapsed)}
//                 style={{ fontSize: "24px" }}
//               />
//             </div>
//           )}
//         </Sider>

//         <Layout>
//           <Header
//             className={`${
//               darkMode ? "bg-[#24303F]" : "bg-[#f0f2f5]"
//             } p-0 flex justify-between items-center`}
//           >
//             <Input
//               placeholder="Type to search..."
//               style={{ marginLeft: "2px", width: 600, border: "none" }}
//             />

//             <Space size="middle" align="center">
//               <Switch
//                 checked={darkMode}
//                 onChange={toggleDarkMode}
//                 checkedChildren="Dark"
//                 unCheckedChildren="Light"
//               />
//               <Badge dot>
//                 <BellOutlined className="text-xl" style={{ color: darkMode ? "#fff" : "#000" }} />
//               </Badge>
//               <Badge dot>
//                 <MessageOutlined className="text-xl" style={{ color: darkMode ? "#fff" : "#000" }} />
//               </Badge>
//               <Dropdown overlay={userMenu} trigger={["click"]}>
//                 <Space align="center">
//                   <div className="flex flex-row items-center">
//                     <div className="flex flex-col mr-2">
//                       <div className="font-semibold" style={{ color: darkMode ? "#fff" : "#000" }}>
//                         {profile.name || "Front End"}
//                       </div>
//                       <div className="text-xs" style={{ color: darkMode ? "#cfcfcf" : "#000" }}>
//                         {profile.profession || "Developer"}
//                       </div>
//                     </div>
//                   </div>
//                   {profile.imageUrl ? (
//                     <Avatar size={40} src={profile.imageUrl} />
//                   ) : (
//                     <Avatar size={40} icon={<UserOutlined />} />
//                   )}
//                   <DownOutlined style={{ color: darkMode ? "#fff" : "#000" }} />
//                 </Space>
//               </Dropdown>
//             </Space>
//           </Header>

//           <Content className="m-4">
//             <div
//               className={`p-6 ${
//                 darkMode ? "bg-[#24303F]" : "bg-[#fff]"
//               } min-h-[85vh]`}
//             >
//               {React.cloneElement(children, { darkMode })} 
//             </div>
//           </Content>
//         </Layout>
//       </Layout>
//     </ConfigProvider>
//   );
// };

// export default MainLayout;





"use client";
import React, { useState, useEffect } from "react";
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
  SettingOutlined,
  CheckSquareOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux"; // Import useDispatch for Redux
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { updateDarkMode } from "../../../redux/taskSlice"; // Import the action for dark mode

const { Sider, Content, Header } = Layout;
// const inputBackgroundColor = darkMode ? "#24303f" : "#ffffff"; // Background color for input in dark mode

const userMenu = (
  <Menu>
    <Menu.Item key="1">
      <SettingOutlined />
      <Link href="/setting">Settings</Link>
    </Menu.Item>
    <Menu.Item key="2">
      <UserOutlined />
      <Link href="/profile">Profile</Link>
    </Menu.Item>
    <Menu.Item key="3">
      <SettingOutlined /> Logout
    </Menu.Item>
  </Menu>
);

const MainLayout = ({ children }) => {
  const dispatch = useDispatch();
  const [collapsed, setCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const profile = useSelector((state) => state.tasks.profile);
  const darkMode = useSelector((state) => state.tasks.darkMode); // Get dark mode from Redux
  const pathname = usePathname();
  const router = useRouter();

  const menuItems = [
    {
      path: "/dashboardCards",
      icon: <DashboardOutlined />,
      label: "Dashboard",
    },
    {
      path: "/profile",
      icon: <UserOutlined />,
      label: "Profile",
    },
    {
      path: "/todoList",
      icon: <CheckSquareOutlined />,
      label: "Task",
    },
    {
      path: "/setting",
      icon: <SettingOutlined />,
      label: "Setting",
    },
  ];

  const activeKey = pathname;

  const toggleDarkMode = (checked) => {
    dispatch(updateDarkMode(checked)); // Dispatch Redux action to toggle dark mode
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
      setCollapsed(window.innerWidth < 1024);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <ConfigProvider
      theme={{
        token: {
          colorBgBase: darkMode ? "#1a222c" : "#f0f2f5",
          colorText: darkMode ? "#fff" : "#000",
        },
      }}
    >
      <Layout
        className="min-h-screen"
        style={{ backgroundColor: darkMode ? "#1a222c" : "#f0f2f5" }}
      >
        <Sider
          width={250}
          className={darkMode ? "bg-[#24303F]" : "bg-[#1c2434]"}
          collapsible
          collapsed={collapsed}
          onCollapse={setCollapsed}
          breakpoint="lg"
          trigger={null}
        >
          <div className="p-4 text-center">
            <img
              className={`max-w-full h-auto transition-all duration-300 ${
                collapsed ? "hidden" : ""
              }`}
            />
          </div>
          <Menu
            theme="dark"
            mode="inline"
            selectedKeys={[activeKey]}
            style={{ backgroundColor: "transparent", color: darkMode ? "#fff" : "#000" }}
            items={menuItems.map(({ path, icon, label }) => ({
              key: path,
              icon,
              label: !collapsed ? <Link href={path}>{label}</Link> : null,
              style: {
                backgroundColor: "transparent",
                transition: "background-color 0.3s",
                color: darkMode ? "#fff" : "#fff",
              },
              onClick: () => {
                router.push(path);
              },
              onMouseEnter: (e) => {
                e.domEvent.currentTarget.style.backgroundColor =
                  "rgba(255, 255, 255, 0.1)";
              },
              onMouseLeave: (e) => {
                e.domEvent.currentTarget.style.backgroundColor = "transparent";
              },
            }))}
          />
          {isMobile && (
            <div className="absolute top-4 left-4">
              <MenuOutlined
                className="text-white cursor-pointer"
                onClick={() => setCollapsed(!collapsed)}
                style={{ fontSize: "24px" }}
              />
            </div>
          )}
        </Sider>

        <Layout>
          <Header
            className={`${
              darkMode ? "bg-[#24303F]" : "bg-[#f0f2f5]"
            } p-0 flex justify-between items-center`}
          >
          <Input
  placeholder="Type to search..."
  style={{
    marginLeft: "2px",
    width: 600,
    border: "none",
    // backgroundColor: '#ffffff', 
    color: darkMode ? "#ffffff" : "#000000", // Adjust text color for dark mode
  }}
/>
            {/* <Input
              placeholder="Type to search..."
              style={{ marginLeft: "2px", width: 600, border: "none" }}
            /> */}

            <Space size="middle" align="center">
              <Switch
                checked={darkMode}
                onChange={toggleDarkMode}
                checkedChildren="Dark"
                unCheckedChildren="Light"
              />
              <Badge dot>
                <BellOutlined className="text-xl" style={{ color: darkMode ? "#fff" : "#000" }} />
              </Badge>
              <Badge dot>
                <MessageOutlined className="text-xl" style={{ color: darkMode ? "#fff" : "#000" }} />
              </Badge>
              <Dropdown overlay={userMenu} trigger={["click"]}>
                <Space align="center">
                  <div className="flex flex-row items-center">
                    <div className="flex flex-col mr-2">
                      <div className="font-semibold" style={{ color: darkMode ? "#fff" : "#000" }}>
                        {profile.name || "Front End"}
                      </div>
                      <div className="text-xs" style={{ color: darkMode ? "#cfcfcf" : "#000" }}>
                        {profile.profession || "Developer"}
                      </div>
                    </div>
                  </div>
                  {profile.imageUrl ? (
                    <Avatar size={40} src={profile.imageUrl} />
                  ) : (
                    <Avatar size={40} icon={<UserOutlined />} />
                  )}
                  <DownOutlined style={{ color: darkMode ? "#fff" : "#000" }} />
                </Space>
              </Dropdown>
            </Space>
          </Header>

          <Content className="m-4">
            <div
              className={`p-6 ${
                darkMode ? "bg-[#1a222c]" : "bg-[#fff]"
              } min-h-[85vh]`}
            >
              {children}
            </div>
          </Content>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};

export default MainLayout;

