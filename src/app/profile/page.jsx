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
import { updateCoverPhoto, updateProfileImage } from "../../redux/taskSlice"; // Import your actions
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import MainLayout from "../../components/app-components/Layout/MainLayout";
import Link from "next/link";

const { Title, Text } = Typography;

const Profile = () => {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.tasks.profile);
  const darkMode = useSelector((state) => state.tasks.darkMode); // Get darkMode from Redux state
  const [isCoverUploading, setIsCoverUploading] = useState(false);
  const [loading, setLoading] = useState(false);

  // Handle cover photo upload
  const handleCoverPhotoUpload = async ({ file }) => {
    setIsCoverUploading(true);
    const reader = new FileReader();
    reader.onload = () => {
      dispatch(updateCoverPhoto(reader.result)); // Dispatch action to update cover photo
      setIsCoverUploading(false);
      message.success("Cover photo updated successfully!");
    };
    reader.readAsDataURL(file);
  };

  // Handle profile image upload
  // const handleProfileImageUpload = async ({ file }) => {
  //   setLoading(true);
  //   const reader = new FileReader();
  //   reader.onload = () => {
  //     dispatch(updateProfileImage(reader.result));
  //     setLoading(false);
  //     message.success("Profile image updated successfully!");
  //   };
  //   reader.readAsDataURL(file);
  // };

  return (
    <MainLayout>
      <div
        className="p-4 md:p-8"
        style={{ backgroundColor: darkMode ? "#1a222c" : "#ffffff" }} // Background color based on dark mode
      >
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <Title
            level={5}
            className="mb-4 md:mb-6"
            style={{ color: darkMode ? "#ffffff" : "#000000" }} // Title color based on dark mode
          >
            Profile
          </Title>
          {/* <Breadcrumb>
            <Breadcrumb.Item>
              <Link href="/dashboardCards">Dashboard</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item
              style={{ color: darkMode ? "#ffffff" : "#000000" }} 
            >
              Profile
            </Breadcrumb.Item>
          </Breadcrumb> */}
          <Breadcrumb>
            <Breadcrumb.Item
              style={{ color: darkMode ? "#a2abb4" : "#000000" }} // Change color for Dashboard in dark mode
            >
              <Link href="/dashboardCards">Dashboard</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item
              style={{ color: darkMode ? "#ffffff" : "#000000" }} // Keep Profile color as white in dark mode
            >
              Profile
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>

        <Card
          bordered={false}
          className="w-full max-w-full sm:max-w-lg md:max-w-2xl mx-auto text-center border border-gray-300 rounded-lg"
          style={{
            backgroundColor: darkMode ? "#24303f" : "#ffffff", // Card background
            color: darkMode ? "#ffffff" : "#000000", // Card text color
          }}
        >
          <div
            className="relative h-40 sm:h-52 bg-cover bg-center rounded-t-lg"
            style={{
              backgroundImage: `url(${
                profile.coverPhoto || "/path-to-default-cover.jpg"
              })`, // Cover photo
            }}
          >
            <Upload
              accept="image/*"
              showUploadList={false}
              customRequest={handleCoverPhotoUpload} // Handle cover photo upload
              disabled={isCoverUploading}
            >
              <Button className="absolute bottom-2 right-2 bg-blue-600 text-white rounded-sm shadow-md">
                <CameraOutlined />
                Edit Cover
              </Button>
            </Upload>
          </div>

          <div className="relative">
            <Avatar
              size={140}
              src={profile.imageUrl || "/path-to-default-avatar.png"} // Profile image
              className="mt-[-64px] border-4 border-white mx-auto"
            />

            <Upload
              accept="image/*"
              showUploadList={false}
              // customRequest={handleProfileImageUpload} // Handle profile image upload
              disabled={loading}
            >
              <Button
                className="absolute top-[55%] left-[57%] bg-blue-600 text-white rounded-full shadow-md p-1 flex items-center justify-center"
                style={{ width: "30px", height: "30px" }}
              >
                <CameraOutlined style={{ fontSize: "16px" }} />
              </Button>
            </Upload>
          </div>

          <Title
            level={3}
            className="mt-4"
            style={{ color: darkMode ? "#ffffff" : "#000000" }}
          >
            {profile.name}
          </Title>
          <Text style={{ color: darkMode ? "#ffffff" : "#000000" }}>
            {profile.profession}
          </Text>

          <div className="mt-4 flex justify-center gap-4 text-center">
            <div>
              <Title
                level={4}
                className="text-lg"
                style={{ color: darkMode ? "#ffffff" : "#000000" }}
              >
                259
              </Title>
              <Text
                className="text-sm"
                style={{ color: darkMode ? "#ffffff" : "#000000" }}
              >
                Posts
              </Text>
            </div>
            <div>
              <Title
                level={4}
                className="text-lg"
                style={{ color: darkMode ? "#ffffff" : "#000000" }}
              >
                129K
              </Title>
              <Text
                className="text-sm"
                style={{ color: darkMode ? "#ffffff" : "#000000" }}
              >
                Followers
              </Text>
            </div>
            <div>
              <Title
                level={4}
                className="text-lg"
                style={{ color: darkMode ? "#ffffff" : "#000000" }}
              >
                2K
              </Title>
              <Text
                className="text-sm"
                style={{ color: darkMode ? "#ffffff" : "#000000" }}
              >
                Following
              </Text>
            </div>
          </div>

          <div className="mt-4 text-center px-4">
            <Title
              level={4}
              style={{ color: darkMode ? "#ffffff" : "#000000" }}
            >
              About Me
            </Title>
            <Text style={{ color: darkMode ? "#ffffff" : "#000000" }}>
              As a passionate Software Engineer, my journey into the world of
              technology began during my university days, where I developed a
              deep interest in web development. Over the years, I have honed my
              skills and gained hands-on experience in building interactive and
              user-friendly web applications. I specialize in JavaScript,
              focusing on React, and have worked extensively with Next.js,
              Bootstrap, MUI, and Redux. I also take a keen interest in UI/UX
              design, ensuring that the applications I develop are functional,
              aesthetically pleasing, and intuitive for users. I’m continuously
              expanding my knowledge and staying up-to-date with the latest
              trends and technologies in the field to deliver top-notch
              solutions. I owe my growth and success to the guidance of my
              teachers, mentors, and colleagues, whose support has been
              invaluable throughout my journey Oh, and by the way, I love
              cricket! But unfortunately, I don’t get to play much these days
              because, well, my punishment is being a developer! 😄
              {profile.bio }{" "}
              {/* Display bio or default message */}
            </Text>
          </div>

          <div className="mt-4">
            <Title
              level={4}
              style={{ color: darkMode ? "#ffffff" : "#000000" }}
            >
              Follow me on
            </Title>
            <div className="flex justify-center gap-4 mt-2">
              <a
                href="https://www.linkedin.com/in/muhammad-awais-7566b4233/"
                className="text-2xl"
                style={{ color: darkMode ? "#ffffff" : "#000000" }}
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
