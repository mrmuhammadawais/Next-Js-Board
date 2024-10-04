"use client"
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, Avatar, Typography, Button, Upload, message } from "antd";
import {
  UploadOutlined,
  LinkedinOutlined,
  InstagramOutlined,
  FacebookOutlined,
} from "@ant-design/icons";
import { updateProfileImage } from "../../../redux/taskSlice";
const { Title, Text } = Typography;

const Profile = () => {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.tasks.profile);
  const [loading, setLoading] = useState(false);

  const handleImageUpload = ({ file }) => {
    const reader = new FileReader();
    reader.onload = () => {
      dispatch(updateProfileImage(reader.result)); 
      setLoading(false);
      message.success(`${file.name} uploaded successfully`);
    };
    reader.onerror = () => {
      message.error("Image upload failed");
      setLoading(false);
    };
    reader.readAsDataURL(file); 
  };

  const beforeUpload = (file) => {
    const isImage = file.type.startsWith("image/");
    if (!isImage) {
      message.error("You can only upload image files!");
    } else {
      handleImageUpload({ file }); 
    }
    return false; 
  };

  return (
    <div style={{ padding: "2rem" }}>
      <Card
        bordered={false}
        style={{ maxWidth: "600px", margin: "0 auto", textAlign: "center" }}
      >
        <div style={{ position: "relative" }}>
          <Avatar size={128} src={profile.imageUrl} />
          <Upload
            showUploadList={false} 
            beforeUpload={beforeUpload}
          >
            <Button
              icon={<UploadOutlined />}
              style={{ position: "absolute", top: "100px", left: "100px" }}
              loading={loading}
            >
              Upload
            </Button>
          </Upload>
        </div>
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
          <Text>
            As a passionate Software Engineer, my journey into the world of
            technology began during my university days, where I developed a deep
            interest in web development. Over the years, I have honed my skills
            and gained hands-on experience in building interactive and
            user-friendly web applications. I specialize in JavaScript, focusing
            on React, and have worked extensively with Next.js, Bootstrap, MUI,
            and Redux. I also take a keen interest in UI/UX design, ensuring
            that the applications I develop are functional, aesthetically
            pleasing, and intuitive for users. I’m continuously expanding my
            knowledge and staying up-to-date with the latest trends and
            technologies in the field to deliver top-notch solutions. I owe my
            growth and success to the guidance of my teachers, mentors, and
            colleagues, whose support has been invaluable throughout my journey
            Oh, and by the way, I love cricket! But unfortunately, I don’t get
            to play much these days because, well, my punishment is being a
            developer! 😄
          </Text>
        </div>

        <div style={{ marginTop: "1rem" }}>
          <Title level={4}>Follow me on</Title>
          <div
            style={{ display: "flex", justifyContent: "center", gap: "1rem" }}
          >
            <a
              href="https://www.linkedin.com/in/muhammad-awais-7566b4233/"
              style={{ fontSize: "24px", color: "#0e76a8" }}
            >
              <LinkedinOutlined />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100029451095056"
              style={{ fontSize: "24px", color: "#3b5998" }}
            >
              <FacebookOutlined />
            </a>
            <a
              href="https://www.instagram.com/mrmuhammadawais3/"
              style={{ fontSize: "24px", color: "#E1306C" }}
            >
              <InstagramOutlined />
            </a>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Profile;
