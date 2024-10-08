"use client";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card, Avatar, Typography, Upload, Button } from "antd";
import {
  LinkedinOutlined,
  InstagramOutlined,
  FacebookOutlined,
  CameraOutlined,
} from "@ant-design/icons";
import { updateCoverPhoto } from "../../../redux/taskSlice";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

const { Title, Text } = Typography;

const Profile = () => {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.tasks.profile);
  const [isCoverUploading, setIsCoverUploading] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleCoverPhotoUpload = ({ file }) => {
    setIsCoverUploading(true);
    const reader = new FileReader();
    reader.onload = () => {
      dispatch(updateCoverPhoto(reader.result));
      setIsCoverUploading(false);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div style={{ padding: "2rem" }}>
      <Title level={5} style={{ marginBottom: "24px" }}>
        Profile
      </Title>
      <Card
        bordered={false}
        style={{ maxWidth: "500px", margin: "0 auto", textAlign: "center" }}
      >
        <div
          style={{
            position: "relative",
            height: "200px",
            backgroundImage: `url(${
              profile.coverPhoto || "/path-to-dummy-cover.jpg"
            })`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "8px 8px 0 0",
          }}
        >
          <Upload
            accept="image/*"
            showUploadList={false}
            customRequest={handleCoverPhotoUpload}
            disabled={isCoverUploading}
          >
            <Button
              style={{
                position: "absolute",
                bottom: "10px",
                right: "10px",
                zIndex: 1,
                borderRadius: "4px",
                backgroundColor: "#3C50E0",
                color: "white",
                borderColor: "transparent",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              }}
            >
              <CameraOutlined />
              Edit
            </Button>
          </Upload>
        </div>

        <Avatar
          size={128}
          src={profile.imageUrl || "/path-to-default-avatar.png"}
          style={{
            marginTop: "-64px",
            border: "4px solid white",
          }}
        />
        <Button
          style={{
            bottom: "10px",

            borderRadius: "4px",
            backgroundColor: "#3C50E0",
            color: "white",
            borderColor: "transparent",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          }}
          loading={loading}
        >
          <CameraOutlined />
          Edit
        </Button>
        <Title level={3}>{profile.name}</Title>
        <Text>{profile.profession}</Text>

        <div
          style={{
            marginTop: "1rem",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div style={{ margin: "0 1rem" }}>
            <Title level={4}>259</Title>
            <Text>Posts</Text>
          </div>
          <div style={{ margin: "0 1rem" }}>
            <Title level={4}>129K</Title>
            <Text>Followers</Text>
          </div>
          <div style={{ margin: "0 1rem" }}>
            <Title level={4}>2K</Title>
            <Text>Following</Text>
          </div>
        </div>

        <div style={{ marginTop: "1rem" }}>
          <Title level={4}>About Me</Title>
          <Text>{profile.bio}</Text>
        </div>

        <div style={{ marginTop: "1rem" }}>
          <Title level={4}>Follow me on</Title>
          As a passionate Software Engineer, my journey into the world of
          technology began during my university days, where I developed a deep
          interest in web development. Over the years, I have honed my skills
          and gained hands-on experience in building interactive and
          user-friendly web applications. I specialize in JavaScript, focusing
          on React, and have worked extensively with Next.js, Bootstrap, MUI,
          and Redux. I also take a keen interest in UI/UX design, ensuring that
          the applications I develop are functional, aesthetically pleasing, and
          intuitive for users. I’m continuously expanding my knowledge and
          staying up-to-date with the latest trends and technologies in the
          field to deliver top-notch solutions. I owe my growth and success to
          the guidance of my teachers, mentors, and colleagues, whose support
          has been invaluable throughout my journey Oh, and by the way, I love
          cricket! But unfortunately, I don’t get to play much these days
          because, well, my punishment is being a developer! 😄
          <br />
          <div
            style={{ display: "flex", justifyContent: "center", gap: "1rem" }}
          >
            <a
              href="https://www.linkedin.com/in/muhammad-awais-7566b4233/"
              style={{ fontSize: "24px" }}
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100029451095056"
              style={{ fontSize: "24px" }}
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/mrmuhammadawais3/"
              style={{ fontSize: "24px" }}
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Profile;
