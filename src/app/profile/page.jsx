
"use client";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Card,
  Avatar,
  Typography,
  Upload,
  Button,
  Breadcrumb,
  message,
} from "antd";
import { CameraOutlined } from "@ant-design/icons";
import { updateCoverPhoto, updateProfileImage } from "../../redux/taskSlice";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import MainLayout from "../../components/app-components/Layout/MainLayout";
import Link from "next/link";

const { Title, Text } = Typography;

const Profile = () => {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.tasks.profile);
  const darkMode = useSelector((state) => state.tasks.darkMode);
  const [isCoverUploading, setIsCoverUploading] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleCoverPhotoUpload = async ({ file }) => {
    setIsCoverUploading(true);
    const reader = new FileReader();
    reader.onload = () => {
      dispatch(updateCoverPhoto(reader.result));
      setIsCoverUploading(false);
      message.success("Cover photo updated successfully!");
    };
    reader.readAsDataURL(file);
  };

  return (
    <MainLayout>
      <div
        className=" md:p-5 !sm:p-0"
        style={{ backgroundColor: darkMode ? "#1a222c" : "#f1f5f9" }}
      >
        <div className="mb-2">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <h1
              className="text-[26px] font-semibold text-black dark:text-white"
              style={{ color: darkMode ? "#fff" : "#000000" }}
            >
              Profile
            </h1>

            <Breadcrumb className="text-left">
              <Breadcrumb.Item
                style={{ color: darkMode ? "#a2abb4" : "#000000" }}
              >
                <Link href="/dashboardCards">Dashboard</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item
                style={{
                  color: darkMode ? "#3C50E0" : "#3C50E0",
                }}
              >
                Profile
              </Breadcrumb.Item>
            </Breadcrumb>
          </div>
        </div>

        <Card
          bordered={true}
          className="mx-auto text-center border rounded-lg"
          style={{
            width: "100%",
            backgroundColor: darkMode ? "#24303f" : "#ffffff",
            color: darkMode ? "#ffffff" : "#000000",
            borderColor: darkMode ? "transparent" : "#ffffff",
            border: "none",
            borderRadius: "0",
          }}
          bodyStyle={{ padding: 0 }}
        >
          <div
            className="relative w-full h-52 bg-cover bg-center rounded-t-lg"
            style={{
              backgroundImage: `url(${
                profile.coverPhoto || "/path-to-default-cover.jpg"
              })`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              height: "200px",
            }}
          >
            <Upload
              accept="image/*"
              showUploadList={false}
              customRequest={handleCoverPhotoUpload}
              disabled={isCoverUploading}
            >
           <Button className="absolute bottom-2 right-2 sm:right-4 bg-[#3c50e0] text-sm font-small text-white rounded-sm w-[48px] sm:w-[83px] h-[23px] ml-2 sm:ml-0">
  <CameraOutlined />
  Edit
</Button>


            </Upload>
          </div>

          <div className="relative">
            <Avatar
              size={160}
              src={profile.imageUrl || "/path-to-default-avatar.png"}
              className="mt-[-64px] border-4 border-white mx-auto"
            />
            <Upload accept="image/*" showUploadList={false} disabled={loading}>
              <Button
                className="bg-[#3C50E0] text-white rounded-full shadow-md p-1 flex items-center justify-center"
                style={{ width: "30px", height: "30px", marginLeft: "-23px" }}
              >
                <CameraOutlined style={{ fontSize: "16px" }} />
              </Button>
            </Upload>
          </div>

          <Title
            level={3}
            className="mt-4 text-center"
            style={{ color: darkMode ? "#ffffff" : "#000000" }}
          >
            {profile.name}
          </Title>

          <div className="mt-2">
            <Text
              className="text-center"
              style={{ color: darkMode ? "#ffffff" : "#000000" }}
            >
              {profile.profession}
            </Text>
          </div>

          <div className="mx-auto mb-5 mt-2 grid grid-cols-3 gap-4 w-full sm:w-[380px] rounded-md border border-stroke py-2.5 shadow-1 dark:border-strokedark dark:bg-[#37404F]">
  <div className="flex flex-col sm:flex-row sm:items-center justify-center sm:gap-2 border-r border-stroke px-4 dark:border-strokedark">
    <span
      className="font-bold text-black dark:text-white"
      style={{ color: darkMode ? "#fff" : "#1c2434" }}
    >
      259
    </span>
    <span className="text-sm color-[#96a1b0]">Posts</span>
  </div>

  <div className="flex flex-col sm:flex-row sm:items-center justify-center sm:gap-2 border-r border-stroke px-4 dark:border-strokedark">
    <span
      className="font-bold text-black dark:text-white"
      style={{ color: darkMode ? "#fff" : "#1c2434" }}
    >
      129K
    </span>
    <span className="text-sm color-[#96a1b0]">Followers</span>
  </div>

  <div className="flex flex-col sm:flex-row sm:items-center justify-center sm:gap-2 px-4">
    <span
      className="font-bold text-black dark:text-white"
      style={{ color: darkMode ? "#fff" : "#1c2434" }}
    >
      2K
    </span>
    <span className="text-sm color-[#96a1b0]">Following</span>
  </div>
</div>

          <div className="mt-4 text-center px-4">
            <Title
              level={4}
              style={{ color: darkMode ? "#ffffff" : "#000000" }}
            >
              About Me
            </Title>
            <Text style={{ color: darkMode ? "#ffffff" : "#96a1b0" }}>
              As a passionate Software Engineer, my journey into the world of
              technology began during my university days, where I developed a
              deep interest in web development. Over the years, I have honed my
              skills and gained hands-on experience in building interactive and
              user-friendly web applications. I specialize in JavaScript,
              focusing on React, and have worked extensively with Next.js,
              Bootstrap, MUI, and Redux. {profile.bio}
            </Text>
          </div>

          <div className="mt-5 mb-8">
            <Title
              level={4}
              style={{ color: darkMode ? "#ffffff" : "#000000" }}
            >
              Follow me on
            </Title>
            <div className="flex justify-center gap-6 mt-4">
              <a
                href="https://www.linkedin.com/in/muhammad-awais-7566b4233/"
                className="text-xl"
                style={{ color: darkMode ? "#ffffff" : "#343b49" }}
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100029451095056"
                className="text-2xl"
                style={{ color: darkMode ? "#ffffff" : "#000000" }}
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.instagram.com/mrmuhammadawais3/"
                className="text-2xl"
                style={{ color: darkMode ? "#ffffff" : "#000000" }}
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </Card>
      </div>
    </MainLayout>
  );
};

export default Profile;
