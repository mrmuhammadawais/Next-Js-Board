









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














