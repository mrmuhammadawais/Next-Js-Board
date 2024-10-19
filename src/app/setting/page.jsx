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
// import {
//   CameraOutlined,
//   UploadOutlined,
//   UserOutlined,
//   MailOutlined,
//   ProfileOutlined,
// } from "@ant-design/icons";
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
//   const { profile, darkMode } = useSelector((state) => state.tasks);

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

//   const layoutStyles = {
//     backgroundColor: darkMode ? "#1a222c" : "transparent",
//   };

//   const cardStyles = {
//     backgroundColor: darkMode ? "#24303f" : "#ffffff",
//     border: 0,
//     borderRadius: 0,
//   };

//   const inputStyles = {
//     height: "53px",
//     backgroundColor: darkMode ? "#313d4a" : "#eff4fb",
//     color: darkMode ? "#ffffff" : "#000000",
//   };

//   const textStyles = {
//     color: darkMode ? "#ffffff" : "#000000",
//   };
//   const TextArea = {
//     backgroundColor: darkMode ? "#313d4a" : "#eff4fb",
//     color: darkMode ? "#ffffff" : "#000000",
//   };

//   return (
//     <MainLayout className="font-satoshi">
//       <div className="p-0" style={layoutStyles}>
//         <div
//           className="flex flex-col sm:flex-row justify-between items-center mt-[-19px] "
//           style={layoutStyles}
//         >
//           <div className="px-7 py-4 dark:border-strokedark">
//             <Title
//               level={2}
//               className="text-title-md2 font-semibold text-black-600 dark:text-white font-[23px]"
//               style={textStyles}
//             >
//               Settings
//             </Title>
//           </div>

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
//               styles={{ color: "gray" }}
//               className="w-full rounded-lg shadow-lg p-4 w-[600px]"
//               style={cardStyles}
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
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <Form.Item
//                     label="Full Name"
//                     styles={{ color: "gray" }}
//                     name="name"
//                     rules={[
//                       {
//                         required: true,
//                         message: "Please enter your full name",
//                       },
//                     ]}
//                   >
//                     <Input
//                       placeholder="Devid John"
//                       style={inputStyles}
//                       className="xs:w-full"
//                       prefix={<UserOutlined />}
//                     />
//                   </Form.Item>

//                   <Form.Item
//                     label="Profession"
//                     name="profession"
//                     rules={[
//                       {
//                         required: true,
//                         message: "Please enter your profession",
//                       },
//                     ]}
//                   >
//                     <Input
//                       placeholder="Enter your profession"
//                       styles={{ color: "gray" }}
//                       style={inputStyles}
//                       className="xs:w-full"
//                     />
//                   </Form.Item>
//                 </div>

//                 <Form.Item
//                   label="Phone Number"
//                   name="phoneNumber"
//                   rules={[
//                     {
//                       required: true,
//                       message: "Please enter your phone number",
//                     },
//                   ]}
//                 >
//                   <Input
//                     styles={{ width: "380px", height: "42px" }}
//                     placeholder="+990 3343 7865"
//                     style={inputStyles}
//                     className="xs:w-full"
//                   />
//                 </Form.Item>

//                 <Form.Item
//                   label="Email Address"
//                   name="email"
//                   rules={[
//                     {
//                       required: true,
//                       message: "Please enter your email address",
//                     },
//                   ]}
//                 >
//                   <Input
//                     placeholder="devidjond45@gmail.com"
//                     style={inputStyles}
//                     className="xs:w-full"
//                     prefix={<MailOutlined />}
//                   />
//                 </Form.Item>

//                 <Form.Item
//                   label="Username"
//                   name="username"
//                   rules={[
//                     { required: true, message: "Please enter your username " },
//                   ]}
//                 >
//                   <Input
//                     placeholder="devidjhon24"
//                     style={inputStyles}
//                     className="xs:w-full"
//                   />
//                 </Form.Item>

//                 <Form.Item
//                   label="BIO"
//                   name="bio"
//                   rules={[{ required: true, message: "Please enter a bio" }]}
//                 >
//                   <Input.TextArea 
//                     rows={4}
//                     placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque posuere fermentum urna, eu condimentum mauris tempus ut. Donec fermentum blandit aliquet" 
//                     style={{   backgroundColor: darkMode ? "#313d4a" : "#eff4fb",}} 
//                     className="xs:w-full"
//                     prefix={<ProfileOutlined />}
//                   />
//                 </Form.Item>

//                 <Form.Item>
//                 <Button
//                   // className="flex justify-center rounded bg-primary px-6 py-2 font-medium text-white hover:bg-opacity-90 bg-[#3C50E0]"
//                     // className="mr-2 xs:w-full rounded bg-primary py-2 font-medium hover:bg-opacity-90 
//                     // bg-[#3C50E0]"
//                   className=" rounded bg-primary px-18 py-18 font-medium text-white hover:bg-opacity-90 bg-[#3C50E0]"
//                   type="submit"
//                   onClick={handleSaveImage}
//                   disabled={!newImage}
//                 >
//                   Save
//                 </Button>
//                   {/* <Button
//                     type="primary"
//                     htmlType="submit"
//                     className="mr-2 xs:w-full rounded bg-primary font-medium hover:bg-opacity-90 bg-[#3C50E0]"
//                   >
//                     Save
//                   </Button> */}
//                   <Button
//                     htmlType="button"
//                     onClick={() => form.resetFields()}
//                     className="ml-2 xs:w-full"
//                   >
//                     Cancel
//                   </Button>
//                 </Form.Item>
//               </Form>
//             </Card>
//           </Col>

//           <Col xs={24} md={12}>
//             <Card
//               title="Your Photo"
//               className="w-full rounded-lg shadow-lg p-2 text-left w-[350px] ml-[130px]"
//               style={cardStyles}
//             >
//               <div className="flex items-center justify-left mb-2 xs:flex-col xs:items-start">
//                 <Avatar
//                   size={50}
//                   src={
//                     newImage || profile.imageUrl || "/path-to-placeholder.png"
//                   }
//                   className="mr-1"
//                 />

//                 <div>
//                   <span
//                     className="mb-1.5 text-customGray dark:text-white"
//                     style={{ color: darkMode ? "#ffffff" : "#000000" }}
//                   >
//                     Edit your photo
//                   </span>

//                   <span className="flex gap-2.5">
//                     <button
//                       className="text-sm text-customGray dark:text-white hover:text-primary"
//                       onClick={handleDeleteImage}
//                     >
//                       Delete
//                     </button>
//                     <button
//                       className="text-sm text-customGray dark:text-white hover:text-primary-color"
//                       onClick={handleSaveImage}
//                       disabled={!newImage}
//                     >
//                       Update
//                     </button>
//                   </span>
//                 </div>
//               </div>

//               <Upload
//                 name="avatar"
//                 showUploadList={false}
//                 beforeUpload={beforeUpload}
//                 accept=".png,.jpg,.jpeg,.gif"
//               >
//                 <div
//                   className="relative mb-5.5 block w-full max-w-xs h-48 flex flex-col items-center justify-center cursor-pointer appearance-none rounded border border-2 border-blue-500 border-dashed p-4 bg-[#eff4fb] px-4 py-4 dark:bg-[#313d4a] sm:py-7.5 md:max-w-md lg:max-w-lg xl:max-w-xl w-[289px] ml-[1px]"
//                   style={{
//                     borderColor: "#3c50e0",
//                     backgroundColor: darkMode ?  "#313d4a":"#eff4fb"
//                   //  color: darkMode ? "#ffffff" : "#000000" 
//                   }}
//                 >
//                   <UploadOutlined
//                     className="text-2xl mb-2 text-blue-500 flex h-8 w-8 items-center justify-center rounded-full border-[1px] outline-none "
//                     style={{ background: "#eff4fb",
//                        backgroundColor: darkMode ?  "#24303f":"#eff4fb"}}
//                   />
//                   <Text className="text-blue-500 text-center ">
//                     Click to upload
//                     <br />
//                     <Text className="text-[#7d8791]">or drag and drop</Text>
//                     <div class="text-[#7d8791]">
//                       SVG, PNG, JPG or GIF
//                       <br />
//                       (max, 800 X 800px)
//                     </div>
//                   </Text>
//                 </div>
//               </Upload>
//               <div className="flex justify-end gap-4 mt-[5px]">
//                 <button
//                   className="flex justify-center rounded border border-stroke px-5 py-2 font-medium text-black hover:shadow-1 dark:border-strokedark dark:text-white mt-[4]"
//                   type="submit"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   className="flex justify-center rounded bg-primary px-6 py-2 font-medium text-white hover:bg-opacity-90 bg-[#3C50E0]"
//                   type="submit"
//                   onClick={handleSaveImage}
//                   disabled={!newImage}
//                 >
//                   Save
//                 </button>
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
import {
  CameraOutlined,
  UploadOutlined,
  UserOutlined,
  MailOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
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
  const { profile, darkMode } = useSelector((state) => state.tasks);

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

  const layoutStyles = {
    backgroundColor: darkMode ? "#1a222c" : "transparent",
  };

  const cardStyles = {
    backgroundColor: darkMode ? "#24303f" : "#ffffff",
    border: 0,
    borderRadius: 0,
  };

  const inputStyles = {
    height: "53px",
    backgroundColor: darkMode ? "#313d4a" : "#eff4fb",
    color: darkMode ? "#ffffff" : "#000000",
  };

  const textStyles = {
    color: darkMode ? "#ffffff" : "#000000",
  };
  const TextArea = {
    backgroundColor: darkMode ? "#313d4a" : "#eff4fb",
    color: darkMode ? "#ffffff" : "#000000",
  };

  return (
    <MainLayout className="font-satoshi">
      <div className="p-0" style={layoutStyles}>
        <div
          className="flex flex-col sm:flex-row justify-between items-center mt-[-19px] "
          style={layoutStyles}
        >
          <div className="px-7 py-4 dark:border-strokedark">
            <Title
              level={2}
              className="text-title-md2 font-semibold text-black-600 dark:text-white font-[23px]"
              style={textStyles}
            >
              Settings
            </Title>
          </div>
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
          styles={{ color: "gray" }}
          className="w-full rounded-lg shadow-lg p-4 w-[600px]"
          style={cardStyles}
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Form.Item
                label="Full Name"
                styles={{ color: "gray" }}
                name="name"
                rules={[
                  {
                    required: true,
                    message: "Please enter your full name",
                  },
                ]}
              >
                <Input
                  placeholder="Devid John"
                  style={inputStyles}
                  className="xs:w-full"
                  prefix={<UserOutlined />}
                />
              </Form.Item>

              <Form.Item
                label="Profession"
                name="profession"
                rules={[
                  {
                    required: true,
                    message: "Please enter your profession",
                  },
                ]}
              >
                <Input
                  placeholder="Enter your profession"
                  styles={{ color: "gray" }}
                  style={inputStyles}
                  className="xs:w-full"
                />
              </Form.Item>
            </div>

            <Form.Item
              label="Phone Number"
              name="phoneNumber"
              rules={[
                {
                  required: true,
                  message: "Please enter your phone number",
                },
              ]}
            >
              <Input
                styles={{ width: "380px", height: "42px" }}
                placeholder="+990 3343 7865"
                style={inputStyles}
                className="xs:w-full"
              />
            </Form.Item>

            <Form.Item
              label="Email Address"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please enter your email address",
                },
              ]}
            >
              <Input
                placeholder="devidjond45@gmail.com"
                style={inputStyles}
                className="xs:w-full"
                prefix={<MailOutlined />}
              />
            </Form.Item>

            <Form.Item
              label="Username"
              name="username"
              rules={[
                { required: true, message: "Please enter your username " },
              ]}
            >
              <Input
                placeholder="devidjhon24"
                style={inputStyles}
                className="xs:w-full"
              />
            </Form.Item>

            <Form.Item
              label="BIO"
              name="bio"
              rules={[{ required: true, message: "Please enter a bio" }]}
            >
              <Input.TextArea 
                rows={4}
                placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque posuere fermentum urna, eu condimentum mauris tempus ut. Donec fermentum blandit aliquet" 
                style={{   backgroundColor: darkMode ? "#313d4a" : "#eff4fb",}} 
                className="xs:w-full"
                prefix={<ProfileOutlined />}
              />
            </Form.Item>

            <Form.Item>
            <Button
              // className="flex justify-center rounded bg-primary px-6 py-2 font-medium text-white hover:bg-opacity-90 bg-[#3C50E0]"
                // className="mr-2 xs:w-full rounded bg-primary py-2 font-medium hover:bg-opacity-90 
                // bg-[#3C50E0]"
              className=" rounded bg-primary px-18 py-18 font-medium text-white hover:bg-opacity-90 bg-[#3C50E0]"
              type="submit"
              onClick={handleSaveImage}
              disabled={!newImage}
            >
              Save
            </Button>
              {/* <Button
                type="primary"
                htmlType="submit"
                className="mr-2 xs:w-full rounded bg-primary font-medium hover:bg-opacity-90 bg-[#3C50E0]"
              >
                Save
              </Button> */}
              <Button
                htmlType="button"
                onClick={() => form.resetFields()}
                className="ml-2 xs:w-full"
              >
                Cancel
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Col>

      <Col xs={24} md={12}>
        <Card
          title="Your Photo"
          className="w-full rounded-lg shadow-lg p-2 text-left w-[350px] ml-[130px]"
          style={cardStyles}
        >
          <div className="flex items-center justify-left mb-2 xs:flex-col xs:items-start">
            <Avatar
              size={50}
              src={
                newImage || profile.imageUrl || "/path-to-placeholder.png"
              }
              className="mr-1"
            />

            <div>
              <span
                className="mb-1.5 text-customGray dark:text-white"
                style={{ color: darkMode ? "#ffffff" : "#000000" }}
              >
                Edit your photo
              </span>

              <span className="flex gap-2.5">
                <button
                  className="text-sm text-customGray dark:text-white hover:text-primary"
                  onClick={handleDeleteImage}
                >
                  Delete
                </button>
                <button
                  className="text-sm text-customGray dark:text-white hover:text-primary-color"
                  onClick={handleSaveImage}
                  disabled={!newImage}
                >
                  Update
                </button>
              </span>
            </div>
          </div>

          <Upload
            name="avatar"
            showUploadList={false}
            beforeUpload={beforeUpload}
            accept=".png,.jpg,.jpeg,.gif"
          >
            <div
              className="relative mb-5.5 block w-full max-w-xs h-48 flex flex-col items-center justify-center cursor-pointer appearance-none rounded border border-2 border-blue-500 border-dashed p-4 bg-[#eff4fb] px-4 py-4 dark:bg-[#313d4a] sm:py-7.5 md:max-w-md lg:max-w-lg xl:max-w-xl w-[289px] ml-[1px]"
              style={{
                borderColor: "#3c50e0",
                backgroundColor: darkMode ?  "#313d4a":"#eff4fb"
              //  color: darkMode ? "#ffffff" : "#000000" 
              }}
            >
              <UploadOutlined
                className="text-2xl mb-2 text-blue-500 flex h-8 w-8 items-center justify-center rounded-full border-[1px] outline-none "
                style={{ background: "#eff4fb",
                   backgroundColor: darkMode ?  "#24303f":"#eff4fb"}}
              />
              <Text className="text-blue-500 text-center ">
                Click to upload
                <br />
                <Text className="text-[#7d8791]">or drag and drop</Text>
                <div class="text-[#7d8791]">
                  SVG, PNG, JPG or GIF
                  <br />
                  (max, 800 X 800px)
                </div>
              </Text>
            </div>
          </Upload>
          <div className="flex justify-end gap-4 mt-[5px]">
            <button
              className="flex justify-center rounded border border-stroke px-5 py-2 font-medium text-black hover:shadow-1 dark:border-strokedark dark:text-white mt-[4]"
              type="submit"
            >
              Cancel
            </button>
            <button
              className="flex justify-center rounded bg-primary px-6 py-2 font-medium text-white hover:bg-opacity-90 bg-[#3C50E0]"
              type="submit"
              onClick={handleSaveImage}
              disabled={!newImage}
            >
              Save
            </button>
          </div>
        </Card>
      </Col>
    </Row>
  </div>
</MainLayout>
  );
};

export default Settings;





