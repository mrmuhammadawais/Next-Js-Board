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
//   Breadcrumb,
// } from "antd";
// import { CameraOutlined, UploadOutlined } from "@ant-design/icons";
// import { useState } from "react";
// import {
//   updateProfileImage,
//   updateProfileName,
//   updateProfileProfession,
// } from "../../redux/taskSlice";
// import MainLayout from "../../components/app-components/Layout/MainLayout"; 
// import Link from "next/link"
// import { Color } from "antd/es/color-picker";
// const { Title, Text } = Typography;

// const Settings = () => {
//   const dispatch = useDispatch();
//   const { profile } = useSelector((state) => state.tasks);

//   const [form] = Form.useForm();
//   const [isImageUpdated, setIsImageUpdated] = useState(false);
//   const [newImage, setNewImage] = useState(""); // To store the uploaded image before saving

//   const handleUpdate = (values) => {
//     dispatch(updateProfileName(values.name));
//     dispatch(updateProfileProfession(values.profession));

//     message.success("Settings updated successfully!");
//     form.resetFields(); // Reset form fields after save
//   };

//   const handleUpload = ({ file }) => {
//     const reader = new FileReader();
//     reader.onload = () => {
//       setNewImage(reader.result); // Store the new image temporarily
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
//     dispatch(updateProfileImage("")); // Remove image
//     setNewImage(""); // Clear the new image state
//     setIsImageUpdated(true);
//   };

//   const handleSaveImage = () => {
//     if (newImage) {
//       dispatch(updateProfileImage(newImage)); // Dispatch the new image to the store
//       message.success("Image saved successfully!");
//       setIsImageUpdated(false); // Reset the image update flag
//     } else {
//       message.error("No image to save");
//     }
//   };

//   return (
//     <MainLayout> {/* Wrap in MainLayout */}
//       <div style={{ padding: "24px" }}>
        
//         {/* Title and Breadcrumb */}
//         <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
//           <Title level={2} style={{ marginBottom: 0 }}>
//             Settings
//           </Title>
          
//           <Breadcrumb>
//             <Breadcrumb.Item>
//               <Link href="/dashboardCards">Dashboard</Link>
//             </Breadcrumb.Item>
//             <Breadcrumb.Item>Settings</Breadcrumb.Item>
//           </Breadcrumb>
//         </div>
     
//         <Row gutter={16}>
//           <Col span={12}>
//             <Card
//                title="Personal Information"
//               style={{
//                 color:"text-black dark:text-white",
//                 width: "100%",
//                 borderRadius: "8px",
//                 boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
//               }}
//             >
//               <Form
//                 form={form}
//                 layout="vertical"
//                 initialValues={{
//                   name: profile.name || "",
//                   profession: profile.profession || "",
//                 }}
//                 onFinish={handleUpdate}
//               >
//                 <Form.Item
//                   label="Full Name"
//                   name="name"
//                   rules={[{ required: true, message: "Please enter your full name" }]}
//                 >
//                   <Input placeholder="Enter your full name" />
//                 </Form.Item>

//                 <Form.Item
//                   label="Profession"
//                   name="profession"
//                   rules={[{ required: true, message: "Please enter your profession" }]}
//                 >
//                   <Input placeholder="Enter your profession" />
//                 </Form.Item>
//                 <Form.Item
//                   label="Phone Number"
//                   name="phoneNumber"
//                   rules={[{ required: true, message: "Please enter your phone number" }]}
//                 >
//                   <Input placeholder="Enter your phone number" />
//                 </Form.Item>

//                 <Form.Item
//                   label="Email Address"
//                   name="email"
//                   rules={[{ required: true, message: "Please enter your email address" }]}
//                 >
//                   <Input placeholder="Enter your email" />
//                 </Form.Item>

//                 <Form.Item
//                   label="Username"
//                   name="username"
//                   rules={[{ required: true, message: "Please enter your username" }]}
//                 >
//                   <Input placeholder="Enter your username" />
//                 </Form.Item>

//                 <Form.Item
//                   label="BIO"
//                   name="bio"
//                   rules={[{ required: true, message: "Please enter a bio" }]}
//                 >
//                   <Input.TextArea rows={4} placeholder="Enter a short bio" />
//                 </Form.Item>

//                 <Form.Item>
//                   <Button type="primary" htmlType="submit" style={{ marginRight: 10 }}>
//                     Save
//                   </Button>
//                   <Button htmlType="button" onClick={() => form.resetFields()}>
//                     Cancel
//                   </Button>
//                 </Form.Item>
//               </Form>
//             </Card>
//           </Col>

//           <Col span={12}>
//             <Card
//               title="Your Photo"
//               style={{
//                 width: "100%",
//                 borderRadius: "8px",
//                 boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
//                 textAlign: "center",
//               }}
//             >
//               <Avatar
//                 size={100}
//                 src={newImage || profile.imageUrl || "/path-to-placeholder.png"}
//                 style={{ marginBottom: 16 }}
//               />

//               <div style={{ marginBottom: 16 }}>
//                 <Button onClick={handleDeleteImage} style={{ marginRight: 8 }}>
//                   Delete
//                 </Button>
//                 <Button type="primary" onClick={handleSaveImage} disabled={!newImage}>
//                   Save Image
//                 </Button>
//               </div>

//               <Upload
//                 name="avatar"
//                 showUploadList={false}
//                 beforeUpload={beforeUpload}
//                 accept=".png,.jpg,.jpeg,.gif"
//               >
//                 <div
//                   style={{
//                     border: "1px dashed #d9d9d9",
//                     padding: "20px",
//                     borderRadius: "8px",
//                     backgroundColor: "#fafafa",
//                   }}
//                 >
//                   <UploadOutlined style={{ fontSize: "24px", marginBottom: "8px" }} />
//                   <Text>
//                     Click to upload or drag and drop
//                     <br />
//                     SVG, PNG, JPG, or GIF
//                     <br />
//                     (max, 800 X 800px)
//                   </Text>
//                 </div>
//               </Upload>
//             </Card>
//           </Col>
//         </Row>
//       </div>
//     </MainLayout> 
//   );
// };

// export default Settings;







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
//   Breadcrumb,
// } from "antd";
// import { CameraOutlined, UploadOutlined } from "@ant-design/icons";
// import { useState } from "react";
// import {
//   updateProfileImage,
//   updateProfileName,
//   updateProfileProfession,
// } from "../../redux/taskSlice";
// import MainLayout from "../../components/app-components/Layout/MainLayout"; 
// import Link from "next/link";
// const { Title, Text } = Typography;

// const Settings = () => {
//   const dispatch = useDispatch();
//   const { profile } = useSelector((state) => state.tasks);

//   const [form] = Form.useForm();
//   const [isImageUpdated, setIsImageUpdated] = useState(false);
//   const [newImage, setNewImage] = useState("");

//   const handleUpdate = (values) => {
//     dispatch(updateProfileName(values.name));
//     dispatch(updateProfileProfession(values.profession));
//     message.success("Settings updated successfully!");
//     form.resetFields();
//   };

//   const handleUpload = ({ file }) => {
//     const reader = new FileReader();
//     reader.onload = () => {
//       setNewImage(reader.result);
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
//     setNewImage("");
//     setIsImageUpdated(true);
//   };

//   const handleSaveImage = () => {
//     if (newImage) {
//       dispatch(updateProfileImage(newImage));
//       message.success("Image saved successfully!");
//       setIsImageUpdated(false);
//     } else {
//       message.error("No image to save");
//     }
//   };

//   return (
//     <MainLayout>
//       <div className="p-6 sm:p-8 md:p-10">
//         <div className="flex flex-col sm:flex-row justify-between items-center mb-6 bg-[#ffffff]">
//           <Title level={2} className="mb-4 sm:mb-0 text-lg sm:text-2xl font-bold">
//             Settings
//           </Title>
//           <Breadcrumb>
//             <Breadcrumb.Item>
//               <Link href="/dashboardCards">Dashboard</Link>
//             </Breadcrumb.Item>
//             <Breadcrumb.Item>Settings</Breadcrumb.Item>
//           </Breadcrumb>
//         </div>

//         <Row gutter={[16, 16]}>
//           <Col xs={24} md={12}>
//             <Card
//               title="Personal Information"
//               className="w-full rounded-lg shadow-lg p-4 bg-[#ffffff]"
//             >
//               <Form
//                 form={form}
//                 layout="vertical"
//                 initialValues={{
//                   name: profile.name || "",
//                   profession: profile.profession || "",
//                 }}
//                 onFinish={handleUpdate}
//               >
//                 <Form.Item
//                   label="Full Name"
//                   name="name"
//                   rules={[{ required: true, message: "Please enter your full name" }]}
//                 >
//                   <Input placeholder="Enter your full name" className="w-full bg-[#eff4fb]" />
//                 </Form.Item>

//                 <Form.Item
//                   label="Profession"
//                   name="profession"
//                   rules={[{ required: true, message: "Please enter your profession" }]}
//                 >
//                   <Input placeholder="Enter your profession" className="w-full bg-[#eff4fb]" />
//                 </Form.Item>

//                 <Form.Item
//                   label="Phone Number"
//                   name="phoneNumber"
//                   rules={[{ required: true, message: "Please enter your phone number" }]}
//                 >
//                   <Input placeholder="Enter your phone number" className="w-full bg-[#eff4fb]" />
//                 </Form.Item>

//                 <Form.Item
//                   label="Email Address"
//                   name="email"
//                   rules={[{ required: true, message: "Please enter your email address" }]}
//                 >
//                   <Input placeholder="Enter your email" className="w-full bg-[#eff4fb]" />
//                 </Form.Item>

//                 <Form.Item
//                   label="Username"
//                   name="username"
//                   rules={[{ required: true, message: "Please enter your username " }]}
//                 >
//                   <Input placeholder="Enter your username" className="w-full bg-[#eff4fb]" />
//                 </Form.Item>

//                 <Form.Item
//                   label="BIO"
//                   name="bio"
//                   rules={[{ required: true, message: "Please enter a bio" }]}
//                 >
//                   <Input.TextArea rows={4} placeholder="Enter a short bio" className="w-full bg-[#eff4fb]" />
//                 </Form.Item>

//                 <Form.Item>
//                   <Button type="primary" htmlType="submit" className="mr-2">
//                     Save
//                   </Button>
//                   <Button htmlType="button" onClick={() => form.resetFields()}>
//                     Cancel
//                   </Button>
//                 </Form.Item>
//               </Form>
//             </Card>
//           </Col>

        
// <Col xs={24} md={12}>
//   <Card
//     title="Your Photo"
//     className="w-full rounded-lg shadow-lg p-4 text-left bg-[#ffffff]"
//   >
   
//     <div className="flex items-center justify-left mb-2 ">
//   <Avatar
//     size={50}
//     src={newImage || profile.imageUrl || "/path-to-placeholder.png"}
//     className="mr-1"
//   />
//   <div>
//     <Button onClick={handleDeleteImage} className="mr-2">
//       Delete
//     </Button>
//     <Button type="primary" onClick={handleSaveImage} disabled={!newImage}>
//       Update
//     </Button>
//   </div>
// </div>

//     <Upload
//       name="avatar"
//       showUploadList={false}
//       beforeUpload={beforeUpload}
//       accept=".png,.jpg,.jpeg,.gif"
//     >
//       <div className="border border-dashed border-gray-300 p-5 rounded-lg bg-gray-50  bg-[#eff4fb]">
//         <UploadOutlined className="text-2xl mb-8" />
//         <Text>
//           Click to upload or drag and drop
//           <br />
//           SVG, PNG, JPG or GIF
//           <br />
//           (max, 800 X 800px)
//         </Text>
//       </div>
//     </Upload>

//     <div className="mt-4">
//       <Button type="primary" onClick={handleSaveImage} disabled={!newImage}>
//         Save
//       </Button>
//       <Button onClick={handleDeleteImage} className="ml-2">
//         Cancel
//       </Button>
//     </div>
//   </Card>
// </Col>

//         </Row>
//       </div>
//     </MainLayout>
//   );
// };

// export default Settings;







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
//   Breadcrumb,
// } from "antd";
// import { CameraOutlined, UploadOutlined } from "@ant-design/icons";
// import { useState } from "react";
// import {
//   updateProfileImage,
//   updateProfileName,
//   updateProfileProfession,
// } from "../../redux/taskSlice";
// import MainLayout from "../../components/app-components/Layout/MainLayout";
// import Link from "next/link";

// const { Title, Text } = Typography;

// const Settings = () => {
//   const dispatch = useDispatch();
//   const { profile, darkMode } = useSelector((state) => state.tasks); // Access darkMode state

//   const [form] = Form.useForm();
//   const [isImageUpdated, setIsImageUpdated] = useState(false);
//   const [newImage, setNewImage] = useState("");

//   const handleUpdate = (values) => {
//     dispatch(updateProfileName(values.name));
//     dispatch(updateProfileProfession(values.profession));
//     message.success("Settings updated successfully!");
//     form.resetFields();
//   };

//   const handleUpload = ({ file }) => {
//     const reader = new FileReader();
//     reader.onload = () => {
//       setNewImage(reader.result);
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
//     setNewImage("");
//     setIsImageUpdated(true);
//   };

//   const handleSaveImage = () => {
//     if (newImage) {
//       dispatch(updateProfileImage(newImage));
//       message.success("Image saved successfully!");
//       setIsImageUpdated(false);
//     } else {
//       message.error("No image to save");
//     }
//   };

//   // Define dynamic styles based on dark mode state
//   const layoutStyles = {
//     backgroundColor: darkMode ? "#1a222c" : "#ffffff",
//   };

//   const inputStyles = {
//     backgroundColor: darkMode ? "#313d4a" : "#eff4fb",
//     color: darkMode ? "#ffffff" : "#000000",
//   };

//   const textStyles = {
//     color: darkMode ? "#ffffff" : "#000000",
//   };

//   return (
//     <MainLayout>
//       <div className="p-6 sm:p-8 md:p-10" style={layoutStyles}>
//         <div className="flex flex-col sm:flex-row justify-between items-center mb-6" style={layoutStyles}>
//           <Title level={2} className="mb-4 sm:mb-0 text-lg sm:text-2xl font-bold" style={textStyles}>
//             Settings
//           </Title>
//           <Breadcrumb>
//             <Breadcrumb.Item>
//               <Link href="/dashboardCards">Dashboard</Link>
//             </Breadcrumb.Item>
//             <Breadcrumb.Item>Settings</Breadcrumb.Item>
//           </Breadcrumb>
//         </div>

//         <Row gutter={[16, 16]}>
//           <Col xs={24} md={12}>
//             <Card
//               title="Personal Information"
//               className="w-full rounded-lg shadow-lg p-4"
//               style={layoutStyles}
//             >
//               <Form
//                 form={form}
//                 layout="vertical"
//                 initialValues={{
//                   name: profile.name || "",
//                   profession: profile.profession || "",
//                 }}
//                 onFinish={handleUpdate}
//               >
//                 <Form.Item
//                   label="Full Name"
//                   name="name"
//                   rules={[{ required: true, message: "Please enter your full name" }]}
//                 >
//                   <Input placeholder="Enter your full name" style={inputStyles} />
//                 </Form.Item>

//                 <Form.Item
//                   label="Profession"
//                   name="profession"
//                   rules={[{ required: true, message: "Please enter your profession" }]}
//                 >
//                   <Input placeholder="Enter your profession" style={inputStyles} />
//                 </Form.Item>

//                 <Form.Item
//                   label="Phone Number"
//                   name="phoneNumber"
//                   rules={[{ required: true, message: "Please enter your phone number" }]}
//                 >
//                   <Input placeholder="Enter your phone number" style={inputStyles} />
//                 </Form.Item>

//                 <Form.Item
//                   label="Email Address"
//                   name="email"
//                   rules={[{ required: true, message: "Please enter your email address" }]}
//                 >
//                   <Input placeholder="Enter your email" style={inputStyles} />
//                 </Form.Item>

//                 <Form.Item
//                   label="Username"
//                   name="username"
//                   rules={[{ required: true, message: "Please enter your username " }]}
//                 >
//                   <Input placeholder="Enter your username" style={inputStyles} />
//                 </Form.Item>

//                 <Form.Item
//                   label="BIO"
//                   name="bio"
//                   rules={[{ required: true, message: "Please enter a bio" }]}
//                 >
//                   <Input.TextArea rows={4} placeholder="Enter a short bio" style={inputStyles} />
//                 </Form.Item>

//                 <Form.Item>
//                   <Button type="primary" htmlType="submit" className="mr-2">
//                     Save
//                   </Button>
//                   <Button htmlType="button" onClick={() => form.resetFields()}>
//                     Cancel
//                   </Button>
//                 </Form.Item>
//               </Form>
//             </Card>
//           </Col>

//           <Col xs={24} md={12}>
//             <Card
//               title="Your Photo"
//               className="w-full rounded-lg shadow-lg p-4 text-left"
//               style={layoutStyles}
//             >
//               <div className="flex items-center justify-left mb-2 ">
//                 <Avatar
//                   size={50}
//                   src={newImage || profile.imageUrl || "/path-to-placeholder.png"}
//                   className="mr-1"
//                 />
//                 <div>
//                   <Button onClick={handleDeleteImage} className="mr-2">
//                     Delete
//                   </Button>
//                   <Button type="primary" onClick={handleSaveImage} disabled={!newImage}>
//                     Update
//                   </Button>
//                 </div>
//               </div>

//               <Upload
//                 name="avatar"
//                 showUploadList={false}
//                 beforeUpload={beforeUpload}
//                 accept=".png,.jpg,.jpeg,.gif"
//               >
//                 <div
//                   className="border border-dashed border-gray-300 p-5 rounded-lg"
//                   style={inputStyles}
//                 >
//                   <UploadOutlined className="text-2xl mb-8" />
//                   <Text style={textStyles}>
//                     Click to upload or drag and drop
//                     <br />
//                     SVG, PNG, JPG or GIF
//                     <br />
//                     (max, 800 X 800px)
//                   </Text>
//                 </div>
//               </Upload>

//               <div className="mt-4">
//                 <Button type="primary" onClick={handleSaveImage} disabled={!newImage}>
//                   Save
//                 </Button>
//                 <Button onClick={handleDeleteImage} className="ml-2">
//                   Cancel
//                 </Button>
//               </div>
//             </Card>
//           </Col>
//         </Row>
//       </div>
//     </MainLayout>
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
  Breadcrumb,
} from "antd";
import { CameraOutlined, UploadOutlined } from "@ant-design/icons";
import { useState } from "react";
import {
  updateProfileImage,
  updateProfileName,
  updateProfileProfession,
} from "../../redux/taskSlice";
import MainLayout from "../../components/app-components/Layout/MainLayout";
import Link from "next/link";

const { Title, Text } = Typography;

const Settings = () => {
  const dispatch = useDispatch();
  const { profile, darkMode } = useSelector((state) => state.tasks); // Access darkMode state

  const [form] = Form.useForm();
  const [isImageUpdated, setIsImageUpdated] = useState(false);
  const [newImage, setNewImage] = useState("");

  const handleUpdate = (values) => {
    dispatch(updateProfileName(values.name));
    dispatch(updateProfileProfession(values.profession));
    message.success("Settings updated successfully!");
    form.resetFields();
  };

  const handleUpload = ({ file }) => {
    const reader = new FileReader();
    reader.onload = () => {
      setNewImage(reader.result);
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
    dispatch(updateProfileImage(""));
    setNewImage("");
    setIsImageUpdated(true);
  };

  const handleSaveImage = () => {
    if (newImage) {
      dispatch(updateProfileImage(newImage));
      message.success("Image saved successfully!");
      setIsImageUpdated(false);
    } else {
      message.error("No image to save");
    }
  };

  // Define dynamic styles based on dark mode state
  const layoutStyles = {
    backgroundColor: darkMode ? "#1a222c" : "#ffffff",
  };

  const cardStyles = {
    backgroundColor: darkMode ? "#24303f" : "#ffffff", // Adjust card background for dark mode
  };

  const inputStyles = {
    backgroundColor: darkMode ? "#313d4a" : "#eff4fb",
    color: darkMode ? "#ffffff" : "#000000",
  };

  const textStyles = {
    color: darkMode ? "#ffffff" : "#000000",
  };

  return (
    <MainLayout>
      <div className="p-6 sm:p-8 md:p-10" style={layoutStyles}>
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6" style={layoutStyles}>
          <Title level={2} className="mb-4 sm:mb-0 text-lg sm:text-2xl font-bold" style={textStyles}>
            Settings
          </Title>
          <Breadcrumb>
            <Breadcrumb.Item>
              <Link href="/dashboardCards">Dashboard</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>Settings</Breadcrumb.Item>
          </Breadcrumb>
        </div>

        <Row gutter={[16, 16]}>
          <Col xs={24} md={12}>
            <Card
              title="Personal Information"
              className="w-full rounded-lg shadow-lg p-4"
              style={cardStyles} // Apply card background style here
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
                  <Input placeholder="Enter your full name" style={inputStyles} />
                </Form.Item>

                <Form.Item
                  label="Profession"
                  name="profession"
                  rules={[{ required: true, message: "Please enter your profession" }]}
                >
                  <Input placeholder="Enter your profession" style={inputStyles} />
                </Form.Item>

                <Form.Item
                  label="Phone Number"
                  name="phoneNumber"
                  rules={[{ required: true, message: "Please enter your phone number" }]}
                >
                  <Input placeholder="Enter your phone number" style={inputStyles} />
                </Form.Item>

                <Form.Item
                  label="Email Address"
                  name="email"
                  rules={[{ required: true, message: "Please enter your email address" }]}
                >
                  <Input placeholder="Enter your email" style={inputStyles} />
                </Form.Item>

                <Form.Item
                  label="Username"
                  name="username"
                  rules={[{ required: true, message: "Please enter your username " }]}
                >
                  <Input placeholder="Enter your username" style={inputStyles} />
                </Form.Item>

                <Form.Item
                  label="BIO"
                  name="bio"
                  rules={[{ required: true, message: "Please enter a bio" }]}
                >
                  <Input.TextArea rows={4} placeholder="Enter a short bio" style={inputStyles} />
                </Form.Item>

                <Form.Item>
                  <Button type="primary" htmlType="submit" className="mr-2">
                    Save
                  </Button>
                  <Button htmlType="button" onClick={() => form.resetFields()}>
                    Cancel
                  </Button>
                </Form.Item>
              </Form>
            </Card>
          </Col>

          <Col xs={24} md={12}>
            <Card
              title="Your Photo"
              className="w-full rounded-lg shadow-lg p-4 text-left"
              style={cardStyles} // Apply card background style here
            >
              <div className="flex items-center justify-left mb-2 ">
                <Avatar
                  size={50}
                  src={newImage || profile.imageUrl || "/path-to-placeholder.png"}
                  className="mr-1"
                />
                <div>
                  <Button onClick={handleDeleteImage} className="mr-2">
                    Delete
                  </Button>
                  <Button type="primary" onClick={handleSaveImage} disabled={!newImage}>
                    Update
                  </Button>
                </div>
              </div>

              <Upload
                name="avatar"
                showUploadList={false}
                beforeUpload={beforeUpload}
                accept=".png,.jpg,.jpeg,.gif"
              >
                <div
                  className="border border-dashed border-gray-300 p-5 rounded-lg"
                  style={inputStyles}
                >
                  <UploadOutlined className="text-2xl mb-8" />
                  <Text style={textStyles}>
                    Click to upload or drag and drop
                    <br />
                    SVG, PNG, JPG or GIF
                    <br />
                    (max, 800 X 800px)
                  </Text>
                </div>
              </Upload>

              <div className="mt-4">
                <Button type="primary" onClick={handleSaveImage} disabled={!newImage}>
                  Save
                </Button>
                <Button onClick={handleDeleteImage} className="ml-2">
                  Cancel
                </Button>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </MainLayout>
  );
};

export default Settings;
