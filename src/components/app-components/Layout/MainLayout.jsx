// "use client";
// import React, { useState, useEffect } from "react";
// import {
//   Layout,
//   Menu,
//   Avatar,
//   Badge,
//   Space,
//   Dropdown,
//   Switch,
//   ConfigProvider,
//   Input,
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
//   SearchOutlined,
// } from "@ant-design/icons";

// import { useDispatch, useSelector } from "react-redux";
// import Link from "next/link";
// import { usePathname, useRouter } from "next/navigation";
// import { updateDarkMode } from "../../../redux/taskSlice";
// import Logo from "../../../assets/logo.svg";

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
//   const dispatch = useDispatch();
//   const [collapsed, setCollapsed] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);
//   const [sidebarVisible, setSidebarVisible] = useState(true);

//   const profile = useSelector((state) => state.tasks.profile);
//   const darkMode = useSelector((state) => state.tasks.darkMode);
//   const pathname = usePathname();
//   const router = useRouter();

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
//     dispatch(updateDarkMode(checked));
//   };

//   useEffect(() => {
//     const handleResize = () => {
//       const isMobile = window.innerWidth < 1024;
//       setIsMobile(isMobile);
//       setCollapsed(isMobile);
//       setSidebarVisible(!isMobile);
//     };

//     handleResize();

//     window.addEventListener("resize", handleResize);

//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <ConfigProvider
//       theme={{
//         token: {
//           colorBgBase: darkMode ? "#1a222c" : "#f0f2f5",
//           colorText: darkMode ? "#fff" : "#000",
//         },
//       }}
//     >
//       <Layout
//         className="min-h-screen"
//         style={{ backgroundColor: darkMode ? "#1a222c" : "#f0f2f5" }}
//       >
//         {sidebarVisible && (
//           <Sider
//             width={240}
//             collapsedWidth={80}
//             className={darkMode ? "bg-[#24303F]" : "bg-[#1c2434]"}
//             collapsible
//             collapsed={collapsed}
//             onCollapse={setCollapsed}
//             breakpoint="lg"
//             trigger={null}
//             style={{
//               position: isMobile ? "fixed" : "relative",
//               zIndex: 1000,
//             }}
//           >
//             <div className="p-4 text-center">
//               <img
//                 src={Logo.src}
//                 alt="Logo"
//                 className={`max-w-full h-auto transition-all duration-300 ${
//                   collapsed ? "hidden" : "block"
//                 }`}
//                 style={{ maxHeight: "60px", margin: "auto" }}
//               />
//             </div>

//             <Menu
//               theme="dark"
//               mode="inline"
//               selectedKeys={[activeKey]}
//               style={{
//                 backgroundColor: "transparent",
//                 color: darkMode ? "#fff" : "#000",
//               }}
//               items={menuItems.map(({ path, icon, label }) => ({
//                 key: path,
//                 icon: collapsed ? null : icon,
//                 label: !collapsed ? <Link href={path}>{label}</Link> : null,
//                 style: {
//                   backgroundColor: "transparent",
//                   transition: "background-color 0.3s",
//                   color: darkMode ? "#fff" : "#fff",
//                 },
//                 onClick: () => {
//                   router.push(path);
//                   if (isMobile) setSidebarVisible(false);
//                 },
//                 onMouseEnter: (e) => {
//                   e.domEvent.currentTarget.style.backgroundColor =
//                     "rgba(255, 255, 255, 0.1)";
//                 },
//                 onMouseLeave: (e) => {
//                   e.domEvent.currentTarget.style.backgroundColor =
//                     "transparent";
//                 },
//               }))}
//             />
//           </Sider>
//         )}

//         <Layout>
//           <Header
//             className={`${
//               darkMode ? "bg-[#24303F]" : "bg-[#ffffff]"
//             } p-0 flex justify-between items-center w-full shadow-2`}
//             style={{ maxWidth: "100vw", padding: "0 20px" }}
//           >
//             <Input
//               placeholder="Type to search..."
//               prefix={<SearchOutlined />}
//               style={{
//                 marginLeft: "2px",
//                 width: 600,
//                 border: "none",
//                 backgroundColor: darkMode ? "#24303f" : "#ffffff",
//                 color: darkMode ? "#7a8390" : "#000000",
//                 outline: "none",
//                 boxShadow: "none",
//               }}
//               onFocus={(e) => {
//                 e.target.style.outline = "none";
//                 e.target.style.boxShadow = "none";
//               }}
//               onBlur={(e) => {
//                 e.target.style.outline = "none";
//                 e.target.style.boxShadow = "none";
//               }}
//               onKeyDown={(e) => {
//                 if (e.key === "Tab") {
//                   e.target.style.outline = "none";
//                   e.target.style.boxShadow = "none";
//                 }
//               }}
//             />
//             <div className="flex items-center">
//               {isMobile && (
//                 <>
//                   <MenuOutlined
//                     className="text-xl cursor-pointer"
//                     onClick={() => setSidebarVisible(!sidebarVisible)}
//                     style={{
//                       color: darkMode ? "#fff" : "#000",
//                       marginRight: "10px",
//                     }}
//                   />
//                   <img
//                     src={Logo.src}
//                     alt="Logo"
//                     className="h-8"
//                     style={{ display: "block" }}
//                   />
//                 </>
//               )}
//             </div>

//             <Space size="middle" align="center">
//               <Switch
//                 checked={darkMode}
//                 onChange={toggleDarkMode}
//                 checkedChildren="Dark"
//                 unCheckedChildren="Light"
//               />

//               <Badge
//                 dot
//                 className={`relative flex h-8 w-8 items-center justify-center rounded-full border-[1px] border-stroke ${
//                   darkMode ? "bg-[#313d4a]" : "bg-[#eff4fb]"
//                 } hover:text-primary dark:border-strokedark`}
//               >
//                 <BellOutlined
//                   className="text-xl"
//                   style={{
//                     fontSize: "18px",
//                     color: darkMode ? "#ffffff" : "#000000",
//                     backgroundColor: darkMode ? "#313d4a" : "#eff4fb",
//                   }}
//                 />
//               </Badge>
//               <Badge
//                 dot
//                 className={`relative flex h-8 w-8 items-center justify-center rounded-full border-[1px] border-stroke ${
//                   darkMode ? "bg-[#313d4a]" : "bg-[#eff4fb]"
//                 } hover:text-primary dark:border-strokedark`}
//               >
//                 <MessageOutlined
//                   className="text-xl"
//                   style={{
//                     fontSize: "18px",
//                     color: darkMode ? "#ffffff" : "#000000",
//                     backgroundColor: darkMode ? "#313d4a" : "#eff4fb",
//                   }}
//                 />
//               </Badge>

//               <Dropdown overlay={userMenu} trigger={["click"]}>
//                 <Space align="center">
//                   <div className="flex flex-row items-center">
//                     <div className="flex flex-col">
//                       <div
//                         // className="font-semibold "

//                         style={{
//                           color: darkMode ? "#fff" : "#000",
//                           marginTop: "-50px",
//                         }}
//                       >
//                         {profile.name || "Front End"}
//                       </div>
//                       <div
//                         className="text-xs"
//                         style={{
//                           color: darkMode ? "#cfcfcf" : "#000",
//                           marginTop: ["-22px"],
//                         }}
//                       >
//                         {profile.profession || "Developer"}
//                       </div>
//                     </div>
//                   </div>
//                   {profile.imageUrl ? (
//                     <Avatar
//                       size={40}
//                       src={profile.imageUrl}
//                       style={{ marginTop: "-40px" }}
//                     />
//                   ) : (
//                     <Avatar size={40} icon={<UserOutlined />} />
//                   )}
//                   <DownOutlined
//                     style={{
//                       position: "relative",
//                       top: "-15px",
//                       color: darkMode ? "#fff" : "#000",
//                     }}
//                   />
//                 </Space>
//               </Dropdown>
//             </Space>
//           </Header>

//           <Content className="p-0">
//             <div
//               className={`p-6 ${
//                 darkMode ? "bg-[#1a222c]" : "bg-[#f1f5f9]"
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
//   Avatar,
//   Badge,
//   Space,
//   Dropdown,
//   Switch,
//   ConfigProvider,
//   Input,
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
//   SearchOutlined,
// } from "@ant-design/icons";
// import { useDispatch, useSelector } from "react-redux";
// import Link from "next/link";
// import { usePathname, useRouter } from "next/navigation";
// import { updateDarkMode } from "../../../redux/taskSlice";
// import Logo from "../../../assets/logo.svg";

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
//   const dispatch = useDispatch();
//   const [collapsed, setCollapsed] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);
//   const [sidebarVisible, setSidebarVisible] = useState(false);

//   const profile = useSelector((state) => state.tasks.profile);
//   const darkMode = useSelector((state) => state.tasks.darkMode);
//   const pathname = usePathname();
//   const router = useRouter();

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
//     dispatch(updateDarkMode(checked));
//   };

//   useEffect(() => {
//     const handleResize = () => {
//       const isMobile = window.innerWidth < 1024;
//       setIsMobile(isMobile);
//       setCollapsed(isMobile);
//       if (isMobile) setSidebarVisible(false); // Hide sidebar on mobile
//     };

//     handleResize();

//     window.addEventListener("resize", handleResize);

//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const handleMenuClick = () => {
//     setSidebarVisible(!sidebarVisible);
//   };

//   return (
//     <ConfigProvider
//       theme={{
//         token: {
//           colorBgBase: darkMode ? "#1a222c" : "#f0f2f5",
//           colorText: darkMode ? "#fff" : "#000",
//         },
//       }}
//     >
//       <Layout
//         className="min-h-screen"
//         style={{ backgroundColor: darkMode ? "#1a222c" : "#f0f2f5" }}
//       >
//         <Sider
//           width={240}
//           className={darkMode ? "bg-[#24303F]" : "bg-[#1c2434]"}
//           collapsed={isMobile ? !sidebarVisible : collapsed}
//           onCollapse={setCollapsed}
//           trigger={null}
//           style={{
//             height: "100vh",
//             position: "fixed",
//             left: 0,
//             transition: "transform 0.3s ease-in-out",
//             transform: isMobile ? (sidebarVisible ? "translateX(0)" : "translateX(-100%)") : "translateX(0)", // Handle sidebar visibility
//             zIndex: 1000,
//           }}
//         >
//           <div className="p-4 text-center">
//             <img
//               src={Logo.src}
//               alt="Logo"
//               className={`max-w-full h-auto transition-all duration-300 ${collapsed ? "hidden" : "block"}`}
//               style={{ maxHeight: "60px", margin: "auto" }}
//             />
//           </div>

//           <Menu
//             theme="dark"
//             mode="inline"
//             selectedKeys={[activeKey]}
//             style={{
//               backgroundColor: "transparent",
//               color: darkMode ? "#fff" : "#000",
//             }}
//             items={menuItems.map(({ path, icon, label }) => ({
//               key: path,
//               icon: icon,
//               label: <Link href={path}>{label}</Link>,
//               style: {
//                 backgroundColor: "transparent",
//                 color: darkMode ? "#fff" : "#fff",
//               },
//               onClick: () => {
//                 router.push(path);
//                 if (isMobile) setSidebarVisible(false); // Hide sidebar on mobile after click
//               },
//             }))}
//           />
//         </Sider>

//         <Layout
//           className={`min-h-screen ${isMobile ? "ml-0" : "ml-[240px]"}`} // Change margin based on mobile view
//         >
//           <Header
//             className={`${darkMode ? "bg-[#24303F]" : "bg-[#ffffff]"} p-0 flex justify-between items-center w-full`}
//             style={{
//               maxWidth: "100vw",
//               padding: "0 20px",
//               backgroundColor: darkMode ? "#24303F" : "#ffffff", // Full width background
//             }}
//           >
//             {isMobile && (
//               <MenuOutlined
//                 className="text-xl cursor-pointer"
//                 onClick={handleMenuClick}
//                 style={{ color: darkMode ? "#fff" : "#000" }}
//               />
//             )}

//             {/* Conditional rendering for search input */}
//             {!(isMobile && window.innerWidth <= 425) && (
//               <Input
//                 placeholder="Type to search..."
//                 prefix={<SearchOutlined />}
//                 style={{
//                   width: 600,
//                   border: "none",
//                   backgroundColor: darkMode ? "#24303f" : "#ffffff",
//                   color: darkMode ? "#7a8390" : "#000000",
//                   outline: "none",
//                   boxShadow: "none",
//                 }}
//               />
//             )}

//             <Space size="middle" align="center">
//               <Switch
//                 checked={darkMode}
//                 onChange={toggleDarkMode}
//                 checkedChildren="Dark"
//                 unCheckedChildren="Light"
//               />

//               <Badge
//                 dot
//                 className={`relative flex h-8 w-8 items-center justify-center rounded-full border-[1px] border-stroke ${darkMode ? "bg-[#313d4a]" : "bg-[#eff4fb]"}`}
//               >
//                 <BellOutlined className="text-xl" />
//               </Badge>

//               <Badge
//                 dot
//                 className={`relative flex h-8 w-8 items-center justify-center rounded-full border-[1px] border-stroke ${darkMode ? "bg-[#313d4a]" : "bg-[#eff4fb]"}`}
//               >
//                 <MessageOutlined className="text-xl" />
//               </Badge>

//               <Dropdown overlay={userMenu} trigger={["click"]}>
//                 <Space align="center">
//                   <div className="flex flex-col" style={{ maxWidth: "100px" }}>
//                     {/* Conditional rendering for profession display */}
//                     {!(isMobile && window.innerWidth <= 425) && (
//                       <>
//                         <div
//                           style={{
//                             color: darkMode ? "#fff" : "#000",
//                             overflow: "hidden",
//                             textOverflow: "ellipsis",
//                             whiteSpace: "nowrap",
//                           }}
//                         >
//                           {profile.name || "Front End"}
//                         </div>
//                         <div
//                           style={{
//                             color: darkMode ? "#cfcfcf" : "#000",
//                             overflow: "hidden",
//                             textOverflow: "ellipsis",
//                             whiteSpace: "nowrap",
//                           }}
//                         >
//                           {profile.profession || "Developer"}
//                         </div>
//                       </>
//                     )}
//                   </div>
//                   <Avatar size={40} src={profile.imageUrl || undefined} />
//                   <DownOutlined style={{ color: darkMode ? "#fff" : "#000" }} />
//                 </Space>
//               </Dropdown>
//             </Space>
//           </Header>

//           <Content className="p-0">
//             <div
//               className={`p-6 ${darkMode ? "bg-[#1a222c]" : "bg-[#f1f5f9]"}`}
//               style={{ minHeight: "calc(100vh - 64px)" }} // Adjust height to account for the header
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






// "use client"

// import React, { useState, useEffect } from "react";
// import {
//   Layout,
//   Menu,
//   Avatar,
//   Badge,
//   Space,
//   Dropdown,
//   Switch,
//   ConfigProvider,
//   Input,
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
//   SearchOutlined,
// } from "@ant-design/icons";
// import { useDispatch, useSelector } from "react-redux";
// import Link from "next/link";
// import { usePathname, useRouter } from "next/navigation";
// import { updateDarkMode } from "../../../redux/taskSlice";
// import Logo from "../../../assets/logo.svg";

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
//   const dispatch = useDispatch();
//   const [collapsed, setCollapsed] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);
//   const [sidebarVisible, setSidebarVisible] = useState(false);

//   const profile = useSelector((state) => state.tasks.profile);
//   const darkMode = useSelector((state) => state.tasks.darkMode);
//   const pathname = usePathname();
//   const router = useRouter();

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
//     dispatch(updateDarkMode(checked));
//   };

//   useEffect(() => {
//     const handleResize = () => {
//       const isMobile = window.innerWidth < 1024;
//       setIsMobile(isMobile);
//       setCollapsed(isMobile);
//       if (isMobile) setSidebarVisible(false); // Hide sidebar on mobile
//     };

//     handleResize();

//     window.addEventListener("resize", handleResize);

//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const handleMenuClick = () => {
//     setSidebarVisible(!sidebarVisible);
//   };

//   return (
//     <ConfigProvider
//       theme={{
//         token: {
//           colorBgBase: darkMode ? "#1a222c" : "#f0f2f5",
//           colorText: darkMode ? "#fff" : "#000",
//         },
//       }}
//     >
//       <Layout
//         className="min-h-screen"
//         style={{ backgroundColor: darkMode ? "#1a222c" : "#f0f2f5" }}
//       >
//         <Sider
//           width={240}
//           className={darkMode ? "bg-[#24303F]" : "bg-[#1c2434]"}
//           collapsed={isMobile ? !sidebarVisible : collapsed}
//           onCollapse={setCollapsed}
//           trigger={null}
//           style={{
//             height: "100vh",
//             position: "fixed",
//             left: 0,
//             transition: "transform 0.3s ease-in-out",
//             transform: isMobile ? (sidebarVisible ? "translateX(0)" : "translateX(-100%)") : "translateX(0)",
//             zIndex: 1000,
//           }}
//         >
//           <div className="p-4 text-center">
//             <img
//               src={Logo.src }
//               alt="Logo"
//               className={`max-w-full h-auto transition-all duration-300 ${collapsed ? "hidden" : "block"}`}
//               style={{ maxHeight: "60px", margin: "auto" }}
//             />
//           </div>

//           <Menu
//             theme="dark"
//             mode="inline"
//             selectedKeys={[activeKey]}
//             style={{
//               backgroundColor: "transparent",
//               color: darkMode ? "#fff" : "#000",
//             }}
//             items={menuItems.map(({ path, icon, label }) => ({
//               key: path,
//               icon: icon,
//               label: <Link href={path}>{label}</Link>,
//               style: {
//                 backgroundColor: "transparent",
//                 color: darkMode ? "#fff" : "#fff",
//               },
//               onClick: () => {
//                 router.push(path);
//                 if (isMobile) setSidebarVisible(false); // Hide sidebar on mobile after click
//               },
//             }))}
//           />
//         </Sider>

//         <Layout
//           className={`min-h-screen ${isMobile ? "ml-0" : "ml-[240px]"}`}
//         >
//           <Header
//             className={`${darkMode ? "bg-[#24303F]" : "bg-[#ffffff]"} p-0 flex justify-between items-center w-full`}
//             style={{
//               maxWidth: "100vw",
//               padding: "0 20px",
//               backgroundColor: darkMode ? "#24303F" : "#ffffff",
//             }}
//           >
//             {isMobile && (
//               <MenuOutlined
//                 className="text-xl cursor-pointer"
//                 onClick={handleMenuClick}
//                 style={{ color: darkMode ? "#fff" : "#000" }}
//               />
//             )}

//             {/* Always render search input and profession details */}
//             <Input
//               placeholder="Type to search..."
//               prefix={<SearchOutlined />}
//               style={{
//                 width: 600,
//                 border: "none",
//                 backgroundColor: darkMode ? "#24303f" : "#ffffff",
//                 color: darkMode ? "#7a8390" : "#000000",
//                 outline: "none",
//                 boxShadow: "none",
//               }}
//             />

//             <div className="flex flex-col" style={{ maxWidth: "100px" }}>
//               <div
//                 style={{
//                   color: darkMode ? "#fff" : "#000",
//                   overflow: "hidden",
//                   textOverflow: "ellipsis",
//                   whiteSpace: "nowrap",
//                 }}
//               >
//                 {profile.name || "Front End"}
//               </div>
//               <div
//                 style={{
//                   color: darkMode ? "#cfcfcf" : "#000",
//                   overflow: "hidden",
//                   textOverflow: "ellipsis",
//                   whiteSpace: "nowrap",
//                 }}
//               >
//                 {profile.profession || "Developer"}
//               </div>
//             </div>

//             <Avatar size={40} src={profile.imageUrl || undefined} />

//             <Space size="middle" align="center">
//               <Switch
//                 checked={darkMode}
//                 onChange={toggleDarkMode}
//                 checkedChildren="Dark"
//                 unCheckedChildren="Light"
//               />

//               <Badge
//                 dot
//                 className={`relative flex h-8 w-8 items-center justify-center rounded-full border-[1px] border-stroke ${darkMode ? "bg-[#313d4a]" : "bg-[#eff4fb]"}`}
//               >
//                 <BellOutlined className="text-xl" />
//               </Badge>

//               <Badge
//                 dot
//                 className={`relative flex h-8 w-8 items-center justify-center rounded-full border-[1px] border-stroke ${darkMode ? "bg-[#313d4a]" : "bg-[#eff4fb]"}`}
//               >
//                 <MessageOutlined className="text-xl" />
//               </Badge>

//               <Dropdown overlay={userMenu} trigger={["click"]}>
//                 <Space align="center">
//                   <DownOutlined style={{ color: darkMode ? "#fff" : "#000" }} />
//                 </Space>
//               </Dropdown>
//             </Space>
//           </Header>

//           <Content className="p-0">
//             <div
//               className={`p-6 ${darkMode ? "bg-[#1a222c]" : "bg-[#f1f5f9]"}`}
//               style={{ minHeight: "calc(100vh - 64px)" }}
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








// "use client"
// import React, { useState, useEffect } from "react";
// import {
//   Layout,
//   Menu,
//   Avatar,
//   Badge,
//   Space,
//   Dropdown,
//   Switch,
//   ConfigProvider,
//   Input,
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
//   SearchOutlined,
// } from "@ant-design/icons";
// import { useDispatch, useSelector } from "react-redux";
// import Link from "next/link";
// import { usePathname, useRouter } from "next/navigation";
// import { updateDarkMode } from "../../../redux/taskSlice";
// import Logo from "../../../assets/logo.svg";

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
//   const dispatch = useDispatch();
//   const [collapsed, setCollapsed] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);
//   const [sidebarVisible, setSidebarVisible] = useState(false);

//   const profile = useSelector((state) => state.tasks.profile);
//   const darkMode = useSelector((state) => state.tasks.darkMode);
//   const pathname = usePathname();
//   const router = useRouter();

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
//     dispatch(updateDarkMode(checked));
//   };

//   useEffect(() => {
//     const handleResize = () => {
//       const isMobile = window.innerWidth < 1024;
//       setIsMobile(isMobile);
//       setCollapsed(isMobile);
//       if (isMobile) setSidebarVisible(false); // Hide sidebar on mobile
//     };

//     handleResize();
//     window.addEventListener("resize", handleResize);

//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const handleMenuClick = () => {
//     setSidebarVisible(!sidebarVisible);
//   };

//   return (
//     <ConfigProvider
//       theme={{
//         token: {
//           colorBgBase: darkMode ? "#1a222c" : "#f0f2f5",
//           colorText: darkMode ? "#fff" : "#000",
//         },
//       }}
//     >
//       <Layout
//         className="min-h-screen"
//         style={{ backgroundColor: darkMode ? "#1a222c" : "#f0f2f5" }}
//       >
//         <Sider
//           width={240}
//           className={darkMode ? "bg-[#24303F]" : "bg-[#1c2434]"}
//           collapsed={isMobile ? !sidebarVisible : collapsed}
//           onCollapse={setCollapsed}
//           trigger={null}
//           style={{
//             height: "100vh",
//             position: "fixed",
//             left: 0,
//             transition: "transform 0.3s ease-in-out",
//             transform: isMobile ? (sidebarVisible ? "translateX(0)" : "translateX(-100%)") : "translateX(0)",
//             zIndex: 1000,
//           }}
//         >
//           <div className="p-4 text-center">
//             <img
//               src={Logo.src}
//               alt="Logo"
//               className={`max-w-full h-auto transition-all duration-300 ${collapsed ? "hidden" : "block"}`}
//               style={{ maxHeight: "60px", margin: " auto" }}
//             />
//           </div>

//           <Menu
//             theme="dark"
//             mode="inline"
//             selectedKeys={[activeKey]}
//             style={{
//               backgroundColor: "transparent",
//               color: darkMode ? "#fff" : "#000",
//             }}
//             items={menuItems.map(({ path, icon, label }) => ({
//               key: path,
//               icon: icon,
//               label: <Link href={path}>{label}</Link>,
//               style: {
//                 backgroundColor: "transparent",
//                 color: darkMode ? "#fff" : "#fff",
//               },
//               onClick: () => {
//                 router.push(path);
//                 if (isMobile) setSidebarVisible(false); // Hide sidebar on mobile after click
//               },
//             }))}
//           />
//         </Sider>

//         <Layout
//           className={`min-h-screen ${isMobile ? "ml-0" : "ml-[240px]"}`}
//         >
//           <Header
//             className={`${darkMode ? "bg-[#24303F]" : "bg-[#ffffff]"} p-0 flex justify-between items-center w-full`}
//             style={{
//               maxWidth: "100vw",
//               padding: "0 20px",
//               backgroundColor: darkMode ? "#24303F" : "#ffffff",
//             }}
//           >
//             {isMobile && (
//               <MenuOutlined
//                 className="text-xl cursor-pointer"
//                 onClick={handleMenuClick}
//                 style={{ color: darkMode ? "#fff" : "#000" }}
//               />
//             )}

//             {/* Conditional rendering for search input */}
//             {(isMobile && window.innerWidth > 425) || !isMobile ? (
//               <Input
//                 placeholder="Type to search..."
//                 prefix={<SearchOutlined />}
//                 style={{
//                   width: 600,
//                   border: "none",
//                   backgroundColor: darkMode ? "#24303f" : "#ffffff",
//                   color: darkMode ? "#7a8390" : "#000000",
//                   outline: "none",
//                   boxShadow: "none",
//                 }}
//               />
//             ) : null}

//             {/* Conditional rendering for profession display */}
//             {(isMobile && window.innerWidth > 425) || !isMobile ? (
//               <div className="flex flex-col" style={{ maxWidth: "100px" }}>
//                 <div
//                   style={{
//                     color: darkMode ? "#fff" : "#000",
//                     overflow: "hidden",
//                     textOverflow: "ellipsis",
//                     whiteSpace: "nowrap",
//                   }}
//                 >
//                   {profile.name || "Front End"}
//                 </div>
//                 <div
//                   style={{
//                     color: darkMode ? "#cfcfcf" : "#000",
//                     overflow: "hidden",
//                     textOverflow: "ellipsis",
//                     whiteSpace: "nowrap",
//                   }}
//                 >
//                   {profile.profession || "Developer"}
//                 </div>
//               </div>
//             ) : null}

//             <Avatar size={40} src={profile.imageUrl || undefined} />

//             <Space size="middle" align="center">
//               <Switch
//                 checked={darkMode}
//                 onChange={toggleDarkMode}
//                 checkedChildren="Dark"
//                 unCheckedChildren="Light"
//               />

//               <Badge
//                 dot
//                 className={`relative flex h-8 w-8 items-center justify-center rounded-full border-[1px] border-stroke ${darkMode ? "bg-[#313d4a]" : "bg-[#eff4fb]"}`}
//               >
//                 <BellOutlined className="text-xl" />
//               </Badge>

//               <Badge
//                 dot
//                 className={`relative flex h-8 w-8 items-center justify-center rounded-full border-[1px] border-stroke ${darkMode ? "bg-[#313d4a]" : "bg-[#eff4fb]"}`}
//               >
//                 <MessageOutlined className="text-xl" />
//               </Badge>

//               <Dropdown overlay={userMenu} trigger={["click"]}>
//                 <Space align="center">
//                   <DownOutlined style={{ color: darkMode ? "#fff" : "#000" }} />
//                 </Space>
//               </Dropdown>
//             </Space>
//           </Header>

//           <Content className="p-0">
//             <div
//               className={`p-6 ${darkMode ? "bg-[#1a222c]" : "bg-[#f1f5f9]"}`}
//               style={{ minHeight: "calc(100vh - 64px)" }}
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
//   Avatar,
//   Badge,
//   Space,
//   Dropdown,
//   Switch,
//   ConfigProvider,
//   Input,
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
//   SearchOutlined,
// } from "@ant-design/icons";
// import { useDispatch, useSelector } from "react-redux";
// import Link from "next/link";
// import { usePathname, useRouter } from "next/navigation";
// import { updateDarkMode } from "../../../redux/taskSlice";
// import Logo from "../../../assets/logo.svg";

// const { Sider, Content, Header } = Layout;

// const userMenuItems = [
//   {
//     key: "1",
//     icon: <SettingOutlined />,
//     label: <Link href="/setting">Settings</Link>,
//   },
//   {
//     key: "2",
//     icon: <UserOutlined />,
//     label: <Link href="/profile">Profile</Link>,
//   },
//   {
//     key: "3",
//     icon: <SettingOutlined />,
//     label: "Logout",
//   },
// ];

// const MainLayout = ({ children }) => {
//   const dispatch = useDispatch();
//   const [collapsed, setCollapsed] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);
//   const [sidebarVisible, setSidebarVisible] = useState(false);

//   const profile = useSelector((state) => state.tasks.profile);
//   const darkMode = useSelector((state) => state.tasks.darkMode);
//   const pathname = usePathname();
//   const router = useRouter();

//   const menuItems = [
//     {
//       key: "/dashboardCards",
//       icon: <DashboardOutlined />,
//       label: "Dashboard",
//     },
//     {
//       key: "/profile",
//       icon: <UserOutlined />,
//       label: "Profile",
//     },
//     {
//       key: "/todoList",
//       icon: <CheckSquareOutlined />,
//       label: "Task",
//     },
//     {
//       key: "/setting",
//       icon: <SettingOutlined />,
//       label: "Setting",
//     },
//   ];

//   const activeKey = pathname;

//   const toggleDarkMode = (checked) => {
//     dispatch(updateDarkMode(checked));
//   };

//   useEffect(() => {
//     const handleResize = () => {
//       const isMobile = window.innerWidth < 1024;
//       setIsMobile(isMobile);
//       setCollapsed(isMobile);
//       if (isMobile) setSidebarVisible(false); // Hide sidebar on mobile
//     };

//     handleResize();
//     window.addEventListener("resize", handleResize);

//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const handleMenuClick = () => {
//     setSidebarVisible(!sidebarVisible);
//   };

//   return (
//     <ConfigProvider
//       theme={{
//         token: {
//           colorBgBase: darkMode ? "#1a222c" : "#f0f2f5",
//           colorText: darkMode ? "#fff" : "#000",
//         },
//       }}
//     >
//       <Layout
//         className="min-h-screen"
//         style={{ backgroundColor: darkMode ? "#1a222c" : "#f0f2f5" }}
//       >
//         <Sider
//           width={240}
//           className={darkMode ? "bg-[#24303F]" : "bg-[#1c2434]"}
//           collapsed={isMobile ? !sidebarVisible : collapsed}
//           onCollapse={setCollapsed}
//           trigger={null}
//           style={{
//             height: "100vh",
//             position: "fixed",
//             left: 0,
//             transition: "transform 0.3s ease-in-out",
//             transform: isMobile
//               ? sidebarVisible
//                 ? "translateX(0)"
//                 : "translateX(-100%)"
//               : "translateX(0)",
//             zIndex: 1000,
//           }}
//         >
//           <div className="p-4 text-center">
//             <img
//               src={Logo.src}
//               alt="Logo"
//               className={`max-w-full h-auto transition-all duration-300 ${
//                 collapsed ? "hidden" : "block"
//               }`}
//               style={{ maxHeight: "60px", margin: " auto" }}
//             />
//           </div>

//           <Menu
//             theme="dark"
//             mode="inline"
//             selectedKeys={[activeKey]}
//             style={{
//               backgroundColor: "transparent",
//               color: darkMode ? "#fff" : "#000",
//             }}
//             items={menuItems.map(({ key, icon, label }) => ({
//               key,
//               icon,
//               label: <Link href={key}>{label}</Link>,
//               style: {
//                 backgroundColor: "transparent",
//                 color: darkMode ? "#fff" : "#fff",
//               },
//               onClick: () => {
//                 router.push(key);
//                 if (isMobile) setSidebarVisible(false); // Hide sidebar on mobile after click
//               },
//             }))}
//           />
//         </Sider>

//         <Layout className={`min-h-screen ${isMobile ? "ml-0" : "ml-[240px]"}`}>
//           <Header
//             className={`${
//               darkMode ? "bg-[#24303F]" : "bg-[#ffffff]"
//             } p-0 flex justify-between items-center w-full`}
//             style={{
//               maxWidth: "100vw",
//               padding: "0 20px",
//               backgroundColor: darkMode ? "#24303F" : "#ffffff",
//             }}
//           >
//             {isMobile && (
//               <MenuOutlined
//                 className="text-xl cursor-pointer"
//                 onClick={handleMenuClick}
//                 style={{ color: darkMode ? "#fff" : "#000" }}
//               />
//             )}

//             {/* Conditional rendering for search input */}
//             {(isMobile && window.innerWidth > 425) || !isMobile ? (
//               <Input
//                 placeholder="Type to search..."
//                 prefix={<SearchOutlined />}
//                 style={{
//                   width: 600,
//                   border: "none",
//                   backgroundColor: darkMode ? "#24303f" : "#ffffff",
//                   color: darkMode ? "#7a8390" : "#000000",
//                   outline: "none",
//                   boxShadow: "none",
//                 }}
//               />
//             ) : null}

//             {/* Conditional rendering for profession display */}
//             {(isMobile && window.innerWidth > 425) || !isMobile ? (
//               <div className="flex flex-col" style={{ maxWidth: "100px" }}>
//                 <div
//                   style={{
//                     color: darkMode ? "#fff" : "#000",
//                     overflow: "hidden",
//                     textOverflow: "ellipsis",
//                     whiteSpace: "nowrap",
//                   }}
//                 >
//                   {profile.name || "Front End"}
//                 </div>
//                 <div
//                   style={{
//                     color: darkMode ? "#cfcfcf" : "#000",
//                     overflow: "hidden",
//                     textOverflow: "ellipsis",
//                     whiteSpace: "nowrap",
//                   }}
//                 >
//                   {profile.profession || "Developer"}
//                 </div>
//               </div>
//             ) : null}

//             <Avatar size={40} src={profile.imageUrl || undefined} />

//             <Space size="middle" align="center">
//               <Switch
//                 checked={darkMode}
//                 onChange={toggleDarkMode}
//                 checkedChildren="Dark"
//                 unCheckedChildren="Light"
//               />

//               <Badge
//                 dot
//                 className={`relative flex h-8 w-8 items-center justify-center rounded-full border-[1px] border-stroke ${
//                   darkMode ? "bg-[#313d4a]" : "bg-[#eff4fb]"
//                 }`}
//               >
//                 <BellOutlined className="text-xl" />
//               </Badge>

//               <Badge
//                 dot
//                 className={`relative flex h-8 w-8 items-center justify-center rounded-full border-[1px] border-stroke ${
//                   darkMode ? "bg-[#313d4a]" : "bg-[#eff4fb]"
//                 }`}
//               >
//                 <MessageOutlined className="text-xl" />
//               </Badge>

//               <Dropdown menu={{ items: userMenuItems }} trigger={["click"]}>
//                 <Space align="center">
//                   <DownOutlined
//                     style={{ color: darkMode ? "#fff" : "#000" }}
//                   />
//                 </Space>
//               </Dropdown>
//             </Space>
//           </Header>

//           <Content className="p-0">
//             <div
//               className={`p-6 ${darkMode ? "bg-[#1a222c]" : "bg-[#f1f5f9]"}`}
//               style={{ minHeight: "calc(100vh - 64px)" }}
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
//   Avatar,
//   Badge,
//   Space,
//   Dropdown,
//   Switch,
//   ConfigProvider,
//   Input,
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
//   SearchOutlined,
// } from "@ant-design/icons";
// import { useDispatch, useSelector } from "react-redux";
// import Link from "next/link";
// import { usePathname, useRouter } from "next/navigation";
// import { updateDarkMode } from "../../../redux/taskSlice";
// import Logo from "../../../assets/logo.svg";

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
//   const dispatch = useDispatch();
//   const [collapsed, setCollapsed] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);
//   const [sidebarVisible, setSidebarVisible] = useState(false);

//   const profile = useSelector((state) => state.tasks.profile);
//   const darkMode = useSelector((state) => state.tasks.darkMode);
//   const pathname = usePathname();
//   const router = useRouter();

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
//     dispatch(updateDarkMode(checked));
//   };

//   useEffect(() => {
//     const handleResize = () => {
//       const isMobile = window.innerWidth < 1024;
//       setIsMobile(isMobile);
//       setCollapsed(isMobile);
//       if (isMobile) setSidebarVisible(false); // Hide sidebar on mobile
//     };

//     handleResize();
//     window.addEventListener("resize", handleResize);

//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const handleMenuClick = () => {
//     setSidebarVisible(!sidebarVisible);
//   };

//   return (
//     <ConfigProvider
//       theme={{
//         token: {
//           colorBgBase: darkMode ? "#1a222c" : "#f0f2f5",
//           colorText: darkMode ? "#fff" : "#000",
//         },
//       }}
//     >
//       <Layout
//         className="min-h-screen"
//         style={{ backgroundColor: darkMode ? "#1a222c" : "#f0f2f5" }}
//       >
//         <Sider
//           width={240}
//           className={darkMode ? "bg-[#24303F]" : "bg-[#1c2434]"}
//           collapsed={isMobile ? !sidebarVisible : collapsed}
//           onCollapse={setCollapsed}
//           trigger={null}
//           style={{
//             height: "100vh",
//             position: "fixed",
//             left: 0,
//             transition: "transform 0.3s ease-in-out",
//             transform: isMobile
//               ? sidebarVisible
//                 ? "translateX(0)"
//                 : "translateX(-100%)"
//               : "translateX(0)",
//             zIndex: 1000,
//           }}
//         >
//           <div className="p-4 text-center">
//             <img
//               src={Logo.src}
//               alt="Logo"
//               className={`max-w-full h-auto transition-all duration-300 ${
//                 collapsed ? "hidden" : "block"
//               }`}
//               style={{ maxHeight: "60px", margin: " auto" }}
//             />
//           </div>

//           <Menu
//             theme="dark"
//             mode="inline"
//             selectedKeys={[activeKey]}
//             style={{
//               backgroundColor: "transparent",
//               color: darkMode ? "#fff" : "#000",
//             }}
//             items={menuItems.map(({ path, icon, label }) => ({
//               key: path,
//               icon: icon,
//               label: <Link href={path}>{label}</Link>,
//               style: {
//                 backgroundColor: "transparent",
//                 color: darkMode ? "#fff" : "#fff",
//               },
//               onClick: () => {
//                 router.push(path);
//                 if (isMobile) setSidebarVisible(false); // Hide sidebar on mobile after click
//               },
//             }))}
//           />
//         </Sider>

//         <Layout className={`min-h-screen ${isMobile ? "ml-0" : "ml-[240px]"}`}>
//           <Header
//             className={`${
//               darkMode ? "bg-[#24303F]" : "bg-[#ffffff]"
//             } p-0 flex justify-between items-center w-full`}
//             style={{
//               maxWidth: "100vw",
//               padding: "0 20px",
//               backgroundColor: darkMode ? "#24303F" : "#ffffff",
//             }}
//           >
//             {isMobile && (
//               <MenuOutlined
//                 className="text-xl cursor-pointer"
//                 onClick={handleMenuClick}
//                 style={{ color: darkMode ? "#fff" : "#000" }}
//               />
//             )}

//             <Input
//               placeholder="Type to search..."
//               prefix={<SearchOutlined />}
//               style={{
//                 width: 600,
//                 border: "none",
//                 backgroundColor: darkMode ? "#24303f" : "#ffffff",
//                 color: darkMode ? "#7a8390" : "#000000",
//                 outline: "none",
//                 boxShadow: "none",
//               }}
//             />

//             <Space size="middle" align="center">
//               <Switch
//                 checked={darkMode}
//                 onChange={toggleDarkMode}
//                 checkedChildren="Dark"
//                 unCheckedChildren="Light"
//               />

//               <Badge
//                 dot
//                 className={`relative flex h-8 w-8 items-center justify-center rounded-full border-[1px] border-stroke ${
//                   darkMode ? "bg-[#313d4a]" : "bg-[#eff4fb]"
//                 }`}
//               >
//                 <BellOutlined className="text-xl" />
//               </Badge>

//               <Badge
//                 dot
//                 className={`relative flex h-8 w-8 items-center justify-center rounded-full border-[1px] border-stroke ${
//                   darkMode ? "bg-[#313d4a]" : "bg-[#eff4fb]"
//                 }`}
//               >
//                 <MessageOutlined className="text-xl" />
//               </Badge>

//               <Avatar size={40} src={profile.imageUrl || undefined} />

//               <Menu overlay={userMenu} trigger={["click"]}>
//                 <Space align="center">
//                   <DownOutlined
//                     style={{ color: darkMode ? "#fff" : "#000" }}
//                   />
//                 </Space>
//               </Menu>
//             </Space>
//           </Header>

//           <Content className="p-0">
//             <div
//               className={`p-6 ${darkMode ? "bg-[#1a222c]" : "bg-[#f1f5f9]"}`}
//               style={{ minHeight: "calc(100vh - 64px)" }}
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
//   Avatar,
//   Badge,
//   Space,
//   Dropdown,
//   Switch,
//   ConfigProvider,
//   Input,
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
//   SearchOutlined,
// } from "@ant-design/icons";
// import { useDispatch, useSelector } from "react-redux";
// import Link from "next/link";
// import { usePathname, useRouter } from "next/navigation";
// import { updateDarkMode } from "../../../redux/taskSlice";
// import Logo from "../../../assets/logo.svg";

// const { Sider, Content, Header } = Layout;

// const MainLayout = ({ children }) => {
//   const dispatch = useDispatch();
//   const [collapsed, setCollapsed] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);
//   const [sidebarVisible, setSidebarVisible] = useState(false);

//   const profile = useSelector((state) => state.tasks.profile);
//   const darkMode = useSelector((state) => state.tasks.darkMode);
//   const pathname = usePathname();
//   const router = useRouter();

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
//     dispatch(updateDarkMode(checked));
//   };

//   useEffect(() => {
//     const handleResize = () => {
//       const isMobile = window.innerWidth < 1024;
//       setIsMobile(isMobile);
//       setCollapsed(isMobile);
//       if (isMobile) setSidebarVisible(false); // Hide sidebar on mobile
//     };

//     handleResize();
//     window.addEventListener("resize", handleResize);

//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const handleMenuClick = () => {
//     setSidebarVisible(!sidebarVisible);
//   };

//   const userMenu = (
//     <Menu
//       items={[
//         {
//           key: "1",
//           label: (
//             <Link href="/setting">
//               <SettingOutlined />
//               Settings
//             </Link>
//           ),
//         },
//         {
//           key: "2",
//           label: (
//             <Link href="/profile">
//               <UserOutlined />
//               Profile
//             </Link>
//           ),
//         },
//         {
//           key: "3",
//           label: (
//             <Link href="/logout">
//               <SettingOutlined />
//               Logout
//             </Link>
//           ),
//         },
//       ]}
//       style={{
//         backgroundColor: darkMode ? "#24303F" : "#ffffff",
//         color: darkMode ? "#fff" : "#000",
//       }}
//     />
//   );

//   return (
//     <ConfigProvider
//       theme={{
//         token: {
//           colorBgBase: darkMode ? "#1a222c" : "#f0f2f5",
//           colorText: darkMode ? "#fff" : "#000",
//         },
//       }}
//     >
//       <Layout
//         className="min-h-screen"
//         style={{ backgroundColor: darkMode ? "#1a222c" : "#f0f2f5" }}
//       >
//         <Sider
//           width={240}
//           className={darkMode ? "bg-[#24303F]" : "bg-[#1c2434]"}
//           collapsed={isMobile ? !sidebarVisible : collapsed}
//           onCollapse={setCollapsed}
//           trigger={null}
//           style={{
//             height: "100vh",
//             position: "fixed",
//             left: 0,
//             transition: "transform 0.3s ease-in-out",
//             transform: isMobile ? (sidebarVisible ? "translateX(0)" : "translateX(-100%)") : "translateX(0)",
//             zIndex: 1000,
//           }}
//         >
//           <div className="p-4 text-center">
//             <img
//               src={Logo.src}
//               alt="Logo"
//               className={`max-w-full h-auto transition-all duration-300 ${collapsed ? "hidden" : "block"}`}
//               style={{ maxHeight: "60px", margin: " auto" }}
//             />
//           </div>

//           <Menu
//             theme="dark"
//             mode="inline"
//             selectedKeys={[activeKey]}
//             style={{
//               backgroundColor: "transparent",
//               color: darkMode ? "#fff" : "#000",
//             }}
//             items={menuItems.map(({ path, icon, label }) => ({
//               key: path,
//               icon: icon,
//               label: <Link href={path}>{label}</Link>,
//               style: {
//                 backgroundColor: "transparent",
//                 color: darkMode ? "#fff" : "#fff",
//               },
//               onClick: () => {
//                 router.push(path);
//                 if (isMobile) setSidebarVisible(false); // Hide sidebar on mobile after click
//               },
//             }))}
//           />
//         </Sider>

//         <Layout
//           className={`min-h-screen ${isMobile ? "ml-0" : "ml-[240px]"}`}
//         >
//           <Header
//             className={`${darkMode ? "bg-[#24303F]" : "bg-[#ffffff]"} p-0 flex justify-between items-center w-full`}
//             style={{
//               maxWidth: "100vw",
//               padding: "0 20px",
//               backgroundColor: darkMode ? "#24303F" : "#ffffff",
//             }}
//           >
//             {isMobile && (
//               <MenuOutlined
//                 className="text-xl cursor-pointer"
//                 onClick={handleMenuClick}
//                 style={{ color: darkMode ? "#fff" : "#000" }}
//               />
//             )}

//             {/* Search Input */}
//             <Input
//               placeholder="Type to search..."
//               prefix={<SearchOutlined />}
//               style={{
//                 width: 600,
//                 border: "none",
//                 backgroundColor: darkMode ? "#24303f" : "#ffffff",
//                 color: darkMode ? "#7a8390" : "#000000",
//                 outline: "none",
//                 boxShadow: "none",
//               }}
//             />

//             {/* User Info Section */}
//             <Space size="middle" align="center">
//               <Switch
//                 checked={darkMode}
//                 onChange={toggleDarkMode}
//                 checkedChildren="Dark"
//                 unCheckedChildren="Light"
//               />

//               <Badge
//                 dot
//                 className={`relative flex h-8 w-8 items-center justify-center rounded-full border-[1px] border-stroke ${darkMode ? "bg-[#313d4a]" : "bg-[#eff4fb]"}`}
//               >
//                 <BellOutlined className="text-xl" />
//               </Badge>

//               <Badge
//                 dot
//                 className={`relative flex h-8 w-8 items-center justify-center rounded-full border-[1px] border-stroke ${darkMode ? "bg-[#313d4a]" : "bg-[#eff4fb]"}`}
//               >
//                 <MessageOutlined className="text-xl" />
//               </Badge>

//               <Dropdown overlay={userMenu} trigger={["click"]}>
//                 <Space align="center">
//                   <Avatar size={40} src={profile.imageUrl || undefined} />
//                   <DownOutlined style={{ color: darkMode ? "#fff" : "#000" }} />
//                 </Space>
//               </Dropdown>
//             </Space>
//           </Header>

//           <Content className="p-0">
//             <div
//               className={`p-6 ${darkMode ? "bg-[#1a222c]" : "bg-[#f1f5f9]"}`}
//               style={{ minHeight: "calc(100vh - 64px)" }}
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






"use client";
import React, { useState, useEffect } from "react";
import {
  Layout,
  Menu,
  Avatar,
  Badge,
  Space,
  Dropdown,
  Switch,
  ConfigProvider,
  Input,
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
  SearchOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { updateDarkMode } from "../../../redux/taskSlice";
import Logo from "../../../assets/logo.svg";

const { Sider, Content, Header } = Layout;

const MainLayout = ({ children }) => {
  const dispatch = useDispatch();
  const [collapsed, setCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const profile = useSelector((state) => state.tasks.profile);
  const darkMode = useSelector((state) => state.tasks.darkMode);
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
    dispatch(updateDarkMode(checked));
  };

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 1024;
      setIsMobile(isMobile);
      setCollapsed(isMobile);
      if (isMobile) setSidebarVisible(false); // Hide sidebar on mobile
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMenuClick = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const userMenu = (
    <Menu
      items={[
        {
          key: "1",
          label: (
            <Link href="/setting">
              <SettingOutlined />
              Settings
            </Link>
          ),
        },
        {
          key: "2",
          label: (
            <Link href="/profile">
              <UserOutlined />
              Profile
            </Link>
          ),
        },
        {
          key: "3",
          label: (
            <Link href="/logout">
              <SettingOutlined />
              Logout
            </Link>
          ),
        },
      ]}
      style={{
        backgroundColor: darkMode ? "#24303F" : "#ffffff",
        color: darkMode ? "#fff" : "#000",
      }}
    />
  );

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
          width={240}
          className={darkMode ? "bg-[#24303F]" : "bg-[#1c2434]"}
          collapsed={isMobile ? !sidebarVisible : collapsed}
          onCollapse={setCollapsed}
          trigger={null}
          style={{
            height: "100vh",
            position: "fixed",
            left: 0,
            transition: "transform 0.3s ease-in-out",
            transform: isMobile ? (sidebarVisible ? "translateX(0)" : "translateX(-100%)") : "translateX(0)",
            zIndex: 1000,
          }}
        >
          <div className="p-4 text-center">
            <img
              src={Logo.src}
              alt="Logo"
              className={`max-w-full h-auto transition-all duration-300 ${collapsed ? "hidden" : "block"}`}
              style={{ maxHeight: "60px", margin: " auto" }}
            />
          </div>

          <Menu
            theme="dark"
            mode="inline"
            selectedKeys={[activeKey]}
            style={{
              backgroundColor: "transparent",
              color: darkMode ? "#fff" : "#000",
            }}
            items={menuItems.map(({ path, icon, label }) => ({
              key: path,
              icon: icon,
              label: <Link href={path}>{label}</Link>,
              style: {
                backgroundColor: "transparent",
                color: darkMode ? "#fff" : "#fff",
              },
              onClick: () => {
                router.push(path);
                if (isMobile) setSidebarVisible(false); // Hide sidebar on mobile after click
              },
            }))}
          />
        </Sider>

        <Layout
          className={`min-h-screen ${isMobile ? "ml-0" : "ml-[240px]"}`}
        >
          <Header
            className={`${darkMode ? "bg-[#24303F]" : "bg-[#ffffff]"} p-0 flex justify-between items-center w-full`}
            style={{
              maxWidth: "100vw",
              padding: "0 20px",
              backgroundColor: darkMode ? "#24303F" : "#ffffff",
            }}
          >
            {isMobile && (
              <MenuOutlined
                className="text-xl cursor-pointer"
                onClick={handleMenuClick}
                style={{ color: darkMode ? "#fff" : "#000" }}
              />
            )}

            {/* Search Input */}
            <Input
              placeholder="Type to search..."
              prefix={<SearchOutlined />}
              style={{
                width: 600,
                border: "none",
                backgroundColor: darkMode ? "#24303f" : "#ffffff",
                color: darkMode ? "#7a8390" : "#000000",
                outline: "none",
                boxShadow: "none",
              }}
            />

            {/* User Info Section */}
            <Space size="middle" align="center">
              <Switch
                checked={darkMode}
                onChange={toggleDarkMode}
                checkedChildren="Dark"
                unCheckedChildren="Light"
              />

              <Badge
                dot
                className={`relative flex h-8 w-8 items-center justify-center rounded-full border-[1px] border-stroke ${darkMode ? "bg-[#313d4a]" : "bg-[#eff4fb]"}`}
              >
                <BellOutlined className="text-xl" />
              </Badge>

              <Badge
                dot
                className={`relative flex h-8 w-8 items-center justify-center rounded-full border-[1px] border-stroke ${darkMode ? "bg-[#313d4a]" : "bg-[#eff4fb]"}`}
              >
                <MessageOutlined className="text-xl" />
              </Badge>

              <Dropdown menu={{ items: userMenu.props.items }} trigger={["click"]}>
                <Space align="center">
                  <Avatar size={40} src={profile.imageUrl || undefined} />
                  <DownOutlined style={{ color: darkMode ? "#fff" : "#000" }} />
                </Space>
              </Dropdown>
            </Space>
          </Header>

          <Content className="p-0">
            <div
              className={`p-6 ${darkMode ? "bg-[#1a222c]" : "bg-[#f1f5f9]"}`}
              style={{ minHeight: "calc(100vh - 64px)" }}
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
