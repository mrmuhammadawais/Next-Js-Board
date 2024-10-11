"use client";
import React from "react";
import { Card, Col, Row } from "antd";
import {
  EyeOutlined,
  DollarCircleOutlined,
  ShoppingCartOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";
import MainLayout from "../../components/app-components/Layout/MainLayout";
import { dashboardData } from "../../components/app-components/data/dashboardData";
import TopChannelsTable from "../../components/app-components/data/channel";
import ChatList from "../../components/app-components/data/chatList";
import DashboardCharts from "../../components/app-components/data/charts";

const iconMapping = {
  eye: <EyeOutlined className="text-xl text-blue-500" />,
  dollar: <DollarCircleOutlined className="text-xl text-blue-500" />,
  shopping: <ShoppingCartOutlined className="text-xl text-blue-500" />,
  user: <UsergroupAddOutlined className="text-xl text-blue-500" />,
};


const DashboardCards = () => {
  return (
    <MainLayout>
      <div className="p-5">
        <Row gutter={16}>
          {dashboardData.map((card, index) => (
            <Col xs={24} sm={12} md={6} key={index}>
              <Card className="text-center rounded-lg shadow-sm bg-[#ffffff]">
                <div className="flex justify-left mb-2">
                  {iconMapping[card.icon]}
                </div>
                <h3 className="m-0 text-2xl font-bold">{card.value}</h3>
                <p className="m-0 text-gray-500">{card.title}</p>
                <p className="m-0 text-green-500 absolute bottom-2 right-2">
                  {card.percentage}
                </p>
              </Card>
            </Col>
          ))}
        </Row>

        <div className="pr-32 text-gray-900 mt-6">
          <Row gutter={24}>
            <Col xs={24} lg={16}>
                <DashboardCharts />
            </Col>
          </Row>
        </div>

     
        <div className="p-5 text-gray-900 -ml-5 bg-[#ffffff]">
  <Row gutter={24}>
    <Col xs={24} lg={16}>
        <TopChannelsTable />
    </Col>
    <Col xs={24} lg={8}>
      <Card title={<span className="text-custom-title dark:text-white bg-[#ffffff]">Chats</span>}>
        <ChatList />
      </Card>
    </Col>
  </Row>
</div>

      </div>
    </MainLayout>
  );
};

export default DashboardCards;



// "use client";
// import React from "react";
// import { Card, Col, Row } from "antd";
// import {
//   EyeOutlined,
//   DollarCircleOutlined,
//   ShoppingCartOutlined,
//   UsergroupAddOutlined,
// } from "@ant-design/icons";
// import MainLayout from "../../components/app-components/Layout/MainLayout";
// import { dashboardData } from "../../components/app-components/data/dashboardData";
// import { useSelector } from "react-redux";
// import TopChannelsTable from "../../components/app-components/data/channel";
// import ChatList from "../../components/app-components/data/chatList";
// import DashboardCharts from "../../components/app-components/data/charts";

// const iconMapping = {
//   eye: <EyeOutlined className="text-xl" />,
//   dollar: <DollarCircleOutlined className="text-xl" />,
//   shopping: <ShoppingCartOutlined className="text-xl" />,
//   user: <UsergroupAddOutlined className="text-xl" />,
// };

// const DashboardCards = () => {
//   // Get dark mode from Redux store
//   const darkMode = useSelector((state) => state.tasks.darkMode);

//   return (
//     <MainLayout>
//       <div className="p-5">
//         <Row gutter={16}>
//           {dashboardData.map((card, index) => (
//             <Col xs={24} sm={12} md={6} key={index}>
//               <Card
//                 className="text-center rounded-lg shadow-sm"
//                 style={{
//                   backgroundColor: darkMode ? "#24303f" : "#ffffff", // Card bg
//                   color: darkMode ? "#ffffff" : "#000000", // Text color
//                 }}
//               >
//                 <div className="flex justify-left mb-2">
//                   {/* Icons remain blue when dark mode is on */}
//                   {React.cloneElement(iconMapping[card.icon], {
//                     style: { color: darkMode ? "#ffffff" : "#3B82F6" }, // Blue color for icons
//                   })}
//                 </div>
//                 <h3
//                   className="m-0 text-2xl font-bold"
//                   style={{ color: darkMode ? "#ffffff" : "#000000" }} // Text color
//                 >
//                   {card.value}
//                 </h3>
//                 <p
//                   className="m-0"
//                   style={{ color: darkMode ? "#ffffff" : "#808080" }} // Text color
//                 >
//                   {card.title}
//                 </p>
//                 <p className="m-0 text-green-500 absolute bottom-2 right-2">
//                   {card.percentage}
//                 </p>
//               </Card>
//             </Col>
//           ))}






//         </Row>
//                 <div className="pr-32 text-gray-900 mt-6">
//            <Row gutter={24}>
//              <Col xs={24} lg={16}>
//                  <DashboardCharts />
//              </Col>
//            </Row>
//          </div>

     
//          <div className="p-5 text-gray-900 -ml-5">
//    <Row gutter={24}>
//      <Col xs={24} lg={16}>
//          <TopChannelsTable />
//      </Col>
//      {/* <Col xs={24} lg={8}> */}
    
//        {/* <Card title={<span className="text-custom-title dark:text-white bg-[#ffffff] ">Chats</span>}> */}
       
//          {/* <ChatList /> */}
//        {/* </Card> */}
//      {/* </Col> */}
//   <Col xs={24} lg={8}>
//      <Card style={{backgroundColor:'#ffffff'}}
//       title={
//         <span
//           className={`text-custom-title ${
//             darkMode ? 'text-white' : 'bg-[#ffffff]'
//           }`}
//         >
//           Chats
//           <ChatList/>
//         </span>
//       }
//     >
//       {/* Other card content goes here */}
//     </Card>
//     </Col>
//    </Row>
//  </div>

//       </div>
//     </MainLayout>
//   );
// };

// export default DashboardCards;