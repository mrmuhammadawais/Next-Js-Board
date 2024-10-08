

// "use client";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   Input,
//   Form,
//   Button,
//   Upload,
//   message,
//   Avatar,
//   Row,
//   Col,
//   Card,
//   Typography,
// } from "antd";
// import { CameraOutlined, UploadOutlined } from "@ant-design/icons";
// import { useState } from "react";
// import {
//   updateProfileImage,
//   updateProfileName,
//   updateProfileProfession,
// } from "../../../redux/taskSlice";

// const { Title, Text } = Typography;

// const Settings = () => {
//   const dispatch = useDispatch();
//   const { profile } = useSelector((state) => state.tasks);

//   const [form] = Form.useForm();
//   const [isImageUpdated, setIsImageUpdated] = useState(false);

  
//   const handleUpdate = (values) => {
//     dispatch(updateProfileName(values.name));
//     dispatch(updateProfileProfession(values.profession));
  
//     if (isImageUpdated) {
//       message.success("Settings updated successfully!");
//       setIsImageUpdated(false);
//     }
  
//     form.resetFields();  // Reset form fields after save
//   };
  
//   const handleUpload = ({ file }) => {
//     const reader = new FileReader();
//     reader.onload = () => {
//       dispatch(updateProfileImage(reader.result)); 
//       setIsImageUpdated(true);
//       message.success("Image uploaded successfully!");
//     };
//     reader.onerror = () => {
//       message.error("Image upload failed");
//     };
//     reader.readAsDataURL(file); 
//   };

//   const beforeUpload = (file) => {
//     const isImage = file.type.startsWith("image/");
//     if (!isImage) {
//       message.error("You can only upload image files!");
//       return false;
//     }
//     handleUpload({ file });
//     return false; 
//   };

//   const handleDeleteImage = () => {
//     dispatch(updateProfileImage("")); 
//     setIsImageUpdated(true);
//   };

//   return (
//     <div style={{ padding: "24px" }}>
//       <Title level={2} style={{ marginBottom: "24px" }}>
//         Settings
//       </Title>
//       <Row gutter={16}>
//         <Col span={12}>
//           <Card
//             title="Personal Information"
//             style={{
//               width: "100%",
//               borderRadius: "8px",
//               boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
//             }}
//           >
//             <Form
//               form={form}
//               layout="vertical"
//               initialValues={{
//                 name: profile.name || "",
//                 profession: profile.profession || "",
//               }}
//               onFinish={handleUpdate}
//             >
//               <Form.Item
//                 label="Full Name"
//                 name="name"
//                 rules={[{ required: true, message: "Please enter your full name" }]}
//               >
//                 <Input placeholder="Enter your full name" />
//               </Form.Item>

//               <Form.Item
//                 label="Profession"
//                 name="profession"
//                 rules={[{ required: true, message: "Please enter your profession" }]}
//               >
//                 <Input placeholder="Enter your profession" />
//               </Form.Item>
//               <Form.Item
//                 label="Phone Number"
//                 name="phoneNumber"
//                 rules={[{ required: true, message: "Please enter your phone number" }]}
//               >
//                 <Input placeholder="Enter your phone number" />
//               </Form.Item>

//               <Form.Item
//                 label="Email Address"
//                 name="email"
//                 rules={[{ required: true, message: "Please enter your email address" }]}
//               >
//                 <Input placeholder="Enter your email" />
//               </Form.Item>

//               <Form.Item
//                 label="Username"
//                 name="username"
//                 rules={[{ required: true, message: "Please enter your username" }]}
//               >
//                 <Input placeholder="Enter your username" />
//               </Form.Item>

//               <Form.Item
//                 label="BIO"
//                 name="bio"
//                 rules={[{ required: true, message: "Please enter a bio" }]}
//               >
//                 <Input.TextArea rows={4} placeholder="Enter a short bio" />
//               </Form.Item>
//               <Form.Item>
//                 <Button type="primary" htmlType="submit" style={{ marginRight: 10 }}>
//                   Save
//                 </Button>
//                 <Button htmlType="button" onClick={() => form.resetFields()}>
//                   Cancel
//                 </Button>
//               </Form.Item>
//             </Form>
//           </Card>
//         </Col>

//         <Col span={12}>
//           <Card
//             title="Your Photo"
//             style={{
//               width: "100%",
//               borderRadius: "8px",
//               boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
//               textAlign: "center",
//             }}
//           >
//             <Avatar
//               size={100}
//               src={profile.imageUrl || "/path-to-placeholder.png"} 
//               style={{ marginBottom: 16 }}
//             />
         

//             <Text normal >
//             <CameraOutlined/>
//             Edit
//             </Text>
         
//             <div style={{ marginBottom: 16 }}>
//               <Button onClick={handleDeleteImage} style={{ marginRight: 8 }}>
//                 Delete
//               </Button>
//             </div>
           
//             <Upload
//               name="avatar"
//               showUploadList={false}
//               beforeUpload={beforeUpload}
//               accept=".png,.jpg,.jpeg,.gif"
//             >
//               <div
//                 style={{
//                   border: "1px dashed #d9d9d9",
//                   padding: "20px",
//                   borderRadius: "8px",
//                   backgroundColor: "#fafafa",
//                 }}
//               >
//                 <UploadOutlined style={{ fontSize: "24px", marginBottom: "8px" }} />
//                 <Text>
//                   Click to upload or drag and drop
//                   <br />
//                   SVG, PNG, JPG, or GIF
//                   <br />
//                   (max, 800 X 800px)
//                 </Text>
//               </div>
//             </Upload>
//           </Card>
//         </Col>
//       </Row>
//     </div>
//   );
// };

// export default Settings;






"use client";
import { useDispatch, useSelector } from "react-redux";
import {
  Input,
  Form,
  Button,
  Upload,
  message,
  Avatar,
  Row,
  Col,
  Card,
  Typography,
} from "antd";
import { CameraOutlined, UploadOutlined } from "@ant-design/icons";
import { useState } from "react";
import {
  updateProfileImage,
  updateProfileName,
  updateProfileProfession,
} from "../../../redux/taskSlice";

const { Title, Text } = Typography;

const Settings = () => {
  const dispatch = useDispatch();
  const { profile } = useSelector((state) => state.tasks);

  const [form] = Form.useForm();
  const [isImageUpdated, setIsImageUpdated] = useState(false);
  const [newImage, setNewImage] = useState(""); // To store the uploaded image before saving

  const handleUpdate = (values) => {
    dispatch(updateProfileName(values.name));
    dispatch(updateProfileProfession(values.profession));

    message.success("Settings updated successfully!");
    form.resetFields(); // Reset form fields after save
  };

  const handleUpload = ({ file }) => {
    const reader = new FileReader();
    reader.onload = () => {
      setNewImage(reader.result); // Store the new image temporarily
      setIsImageUpdated(true);
      message.success("Image uploaded successfully!");
    };
    reader.onerror = () => {
      message.error("Image upload failed");
    };
    reader.readAsDataURL(file); 
  };

  const beforeUpload = (file) => {
    const isImage = file.type.startsWith("image/");
    if (!isImage) {
      message.error("You can only upload image files!");
      return false;
    }
    handleUpload({ file });
    return false; 
  };

  const handleDeleteImage = () => {
    dispatch(updateProfileImage("")); // Remove image
    setNewImage(""); // Clear the new image state
    setIsImageUpdated(true);
  };

  const handleSaveImage = () => {
    if (newImage) {
      dispatch(updateProfileImage(newImage)); // Dispatch the new image to the store
      message.success("Image saved successfully!");
      setIsImageUpdated(false); // Reset the image update flag
    } else {
      message.error("No image to save");
    }
  };

  return (
    <div style={{ padding: "24px" }}>
      <Title level={2} style={{ marginBottom: "24px" }}>
        Settings
      </Title>
      <Row gutter={16}>
        <Col span={12}>
          <Card
            title="Personal Information"
            style={{
              width: "100%",
              borderRadius: "8px",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
            }}
          >
            <Form
              form={form}
              layout="vertical"
              initialValues={{
                name: profile.name || "",
                profession: profile.profession || "",
              }}
              onFinish={handleUpdate}
            >
               <Form.Item
                label="Full Name"
                name="name"
                rules={[{ required: true, message: "Please enter your full name" }]}
              >
                <Input placeholder="Enter your full name" />
              </Form.Item>

              <Form.Item
                label="Profession"
                name="profession"
                rules={[{ required: true, message: "Please enter your profession" }]}
              >
                <Input placeholder="Enter your profession" />
              </Form.Item>
              <Form.Item
                label="Phone Number"
                name="phoneNumber"
                rules={[{ required: true, message: "Please enter your phone number" }]}
              >
                <Input placeholder="Enter your phone number" />
              </Form.Item>

              <Form.Item
                label="Email Address"
                name="email"
                rules={[{ required: true, message: "Please enter your email address" }]}
              >
                <Input placeholder="Enter your email" />
              </Form.Item>

              <Form.Item
                label="Username"
                name="username"
                rules={[{ required: true, message: "Please enter your username" }]}
              >
                <Input placeholder="Enter your username" />
              </Form.Item>

              <Form.Item
                label="BIO"
                name="bio"
                rules={[{ required: true, message: "Please enter a bio" }]}
              >
                <Input.TextArea rows={4} placeholder="Enter a short bio" />
              </Form.Item>
              {/* Other form items */}
              <Form.Item>
                <Button type="primary" htmlType="submit" style={{ marginRight: 10 }}>
                  Save
                </Button>
                <Button htmlType="button" onClick={() => form.resetFields()}>
                  Cancel
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>

        <Col span={12}>
          <Card
            title="Your Photo"
            style={{
              width: "100%",
              borderRadius: "8px",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
              textAlign: "center",
            }}
          >
            <Avatar
              size={100}
              src={newImage || profile.imageUrl || "/path-to-placeholder.png"} 
              style={{ marginBottom: 16 }}
            />

            <div style={{ marginBottom: 16 }}>
              <Button onClick={handleDeleteImage} style={{ marginRight: 8 }}>
                Delete
              </Button>
              <Button type="primary" onClick={handleSaveImage} disabled={!newImage}>
                Save Image
              </Button>
            </div>
           
            <Upload
              name="avatar"
              showUploadList={false}
              beforeUpload={beforeUpload}
              accept=".png,.jpg,.jpeg,.gif"
            >
              <div
                style={{
                  border: "1px dashed #d9d9d9",
                  padding: "20px",
                  borderRadius: "8px",
                  backgroundColor: "#fafafa",
                }}
              >
                <UploadOutlined style={{ fontSize: "24px", marginBottom: "8px" }} />
                <Text>
                  Click to upload or drag and drop
                  <br />
                  SVG, PNG, JPG, or GIF
                  <br />
                  (max, 800 X 800px)
                </Text>
              </div>
            </Upload>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Settings;
