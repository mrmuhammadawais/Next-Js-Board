


"use client"
import React from "react";
import { Table, Avatar, Card } from "antd";
import {
  GoogleCircleFilled,
  TwitterCircleFilled,
  GithubFilled,
  FacebookFilled,
  LinkedinFilled,
} from "@ant-design/icons";

const ChannelsData = [
  {
    key: "1",
    source: "Google",
    visitors: "3.5K",
    revenues: "$5,768",
    sales: "590",
    conversion: "4.8%",
    icon: GoogleCircleFilled,
  },
  {
    key: "2",
    source: "Twitter",
    visitors: "2.2K",
    revenues: "$4,635",
    sales: "467",
    conversion: "4.3%",
    icon: TwitterCircleFilled,
  },
  {
    key: "3",
    source: "Github",
    visitors: "2.1K",
    revenues: "$4,290",
    sales: "420",
    conversion: "3.7%",
    icon: GithubFilled,
  },
  {
    key: "4",
    source: "Facebook",
    visitors: "1.9K",
    revenues: "$4,490",
    sales: "425",
    conversion: "3.11%",
    icon: FacebookFilled,
  },
  {
    key: "5",
    source: "LinkedIn",
    visitors: "1.10K",
    revenues: "$4,790",
    sales: "495",
    conversion: "3.89%",
    icon: LinkedinFilled,
  },
];

const columns = [
  {
    title: "Source",
    dataIndex: "source",
    key: "source",
    render: (text, record) => (
      <div className="flex items-center text-gray-800 dark">
        <Avatar
          icon={<record.icon />}
          className="mr-2 bg-blue-500 dark:bg-blue-600"
        />
        <span className="text-sm font-medium uppercase xsm:text-base">{text}</span>
      </div>
    ),
  },
  {
    title: "Visitors",
    dataIndex: "visitors",
    key: "visitors",
    render: (text) => (
      <span className="text-sm font-medium uppercase xsm:text-base">{text}</span>
    ),
  },
  {
    title: "Revenues",
    dataIndex: "revenues",
    key: "revenues",
    render: (text) => (
      <span className="text-sm font-medium uppercase xsm:text-base text-green-500">{text}</span>
    ),
  },
  {
    title: "Sales",
    dataIndex: "sales",
    key: "sales",
    render: (text) => (
      <span className="text-sm font-medium uppercase xsm:text-base text-[#373D3F]">{text}</span>
    ),
  },
  {
    title: "Conversion",
    dataIndex: "conversion",
    key: "conversion",
    render: (text) => (
      <span className="text-sm font-medium uppercase xsm:text-base text-blue-500">{text}</span>
    ),
  },
];

const TopChannelsTable = () => {
  return (
    <div className="overflow-x-auto">
  
  <Card style={{fontWeight:'600',fontSize:'18px'}}> <h1>Top Channels</h1>
      <Table
        className="w-full"
        columns={columns}
        dataSource={ChannelsData}
        pagination={false}
        rowClassName="custom-row"
        bordered={false}
      />
  </Card>
      <style jsx>{`
        .custom-row {
          height: 60px; /* Adjust height for spacing */
        }
        .custom-row td {
          padding: 16px 18px; 
        
        }
      `}</style>
    </div>
  );
};

export default TopChannelsTable;




// import React from "react";
// import { Table, Avatar, Card } from "antd";
// import {
//   GoogleCircleFilled,
//   TwitterCircleFilled,
//   GithubFilled,
//   FacebookFilled,
//   LinkedinFilled,
// } from "@ant-design/icons";
// import { useSelector } from "react-redux"; // Import useSelector

// const ChannelsData = [
//   {
//     key: "1",
//     source: "Google",
//     visitors: "3.5K",
//     revenues: "$5,768",
//     sales: "590",
//     conversion: "4.8%",
//     icon: GoogleCircleFilled,
//   },
//   {
//     key: "2",
//     source: "Twitter",
//     visitors: "2.2K",
//     revenues: "$4,635",
//     sales: "467",
//     conversion: "4.3%",
//     icon: TwitterCircleFilled,
//   },
//   {
//     key: "3",
//     source: "Github",
//     visitors: "2.1K",
//     revenues: "$4,290",
//     sales: "420",
//     conversion: "3.7%",
//     icon: GithubFilled,
//   },
//   {
//     key: "4",
//     source: "Facebook",
//     visitors: "1.9K",
//     revenues: "$4,490",
//     sales: "425",
//     conversion: "3.11%",
//     icon: FacebookFilled,
//   },
//   {
//     key: "5",
//     source: "LinkedIn",
//     visitors: "1.10K",
//     revenues: "$4,790",
//     sales: "495",
//     conversion: "3.89%",
//     icon: LinkedinFilled,
//   },
// ];

// const columns = [
//   {
//     title: "Source",
//     dataIndex: "source",
//     key: "source",
//     render: (text, record) => (
//       <div className="flex items-center text-gray-800 dark">
//         <Avatar
//           icon={<record.icon />}
//           className="mr-2 bg-blue-500 dark:bg-blue-600"
//         />
//         <span className="text-sm font-medium uppercase xsm:text-base">{text}</span>
//       </div>
//     ),
//   },
//   {
//     title: "Visitors",
//     dataIndex: "visitors",
//     key: "visitors",
//     render: (text) => (
//       <span className="text-sm font-medium uppercase xsm:text-base text-[#ffffff] dark:text-[#ffffff]">
//         {text}
//       </span>
//     ),
//   },
//   {
//     title: "Revenues",
//     dataIndex: "revenues",
//     key: "revenues",
//     render: (text) => (
//       <span className="text-sm font-medium uppercase xsm:text-base text-green-500">
//         {text}
//       </span>
//     ),
//   },
//   {
//     title: "Sales",
//     dataIndex: "sales",
//     key: "sales",
//     render: (text) => (
//       <span className="text-sm font-medium uppercase xsm:text-base text-[#373D3F]">
//         {text}
//       </span>
//     ),
//   },
//   {
//     title: "Conversion",
//     dataIndex: "conversion",
//     key: "conversion",
//     render: (text) => (
//       <span className="text-sm font-medium uppercase xsm:text-base text-blue-500">
//         {text}
//       </span>
//     ),
//   },
// ];

// const TopChannelsTable = () => {
//   // Get dark mode from Redux store
//   const darkMode = useSelector((state) => state.tasks.darkMode);

//   return (
//     <div className="overflow-x-auto">
//       <Card
//         style={{
//           fontWeight: '600',
//           fontSize: '18px',
//           backgroundColor: darkMode ? '#24303f' : '#ffffff', // Card background color
//           color: darkMode ? '#ffffff' : '#000000', // Default text color
//         }}
//       >
//         <h1 style={{ color: darkMode ? '#ffffff' : '#000000' }}>Top Channels</h1>
//         <Table
//           className="w-full"
//           columns={columns}
//           dataSource={ChannelsData}
//           pagination={false}
//           rowClassName="custom-row"
//           bordered={false}
//         />
//       </Card>
//       <style jsx>{`
//         .custom-row {
//           height: 60px; /* Adjust height for spacing */
//         }
//         .custom-row td {
//           padding: 16px 18px; 
//         }
//       `}</style>
//     </div>
//   );
// };

// export default TopChannelsTable;
