


import React, { useState, useEffect } from 'react';
import { Card, Radio, Space } from 'antd';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  BarChart,
  Bar,
  Legend,
} from 'recharts';
import { useSelector } from 'react-redux';

const data = [
  { name: 'Sep', revenue: 30, sales: 20 },
  { name: 'Oct', revenue: 50, sales: 30 },
  { name: 'Nov', revenue: 60, sales: 50 },
  { name: 'Dec', revenue: 70, sales: 40 },
  { name: 'Jan', revenue: 80, sales: 50 },
  { name: 'Feb', revenue: 40, sales: 20 },
  { name: 'Mar', revenue: 90, sales: 60 },
  { name: 'Apr', revenue: 80, sales: 60 },
  { name: 'May', revenue: 100, sales: 80 },
  { name: 'Jun', revenue: 90, sales: 50 },
  { name: 'Jul', revenue: 60, sales: 40 },
  { name: 'Aug', revenue: 80, sales: 70 },
];

const dataWeek = [
  { day: 'M', sales: 40, revenue: 60 },
  { day: 'T', sales: 50, revenue: 80 },
  { day: 'W', sales: 60, revenue: 90 },
  { day: 'T', sales: 30, revenue: 50 },
  { day: 'F', sales: 70, revenue: 100 },
  { day: 'S', sales: 40, revenue: 70 },
  { day: 'S', sales: 50, revenue: 80 },
];

const DashboardCharts = () => {
  const [selectedView, setSelectedView] = useState('Day');
  const [isClient, setIsClient] = useState(false);

  // Get dark mode from Redux store
  const darkMode = useSelector((state) => state.tasks.darkMode);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleViewChange = (e) => {
    setSelectedView(e.target.value);
  };

  if (!isClient) {
    return null;
  }

  return (
    <Space
      size="large"
      className="flex flex-col xl:flex-row justify-between w-full "
    >
      <Card
        title={
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1rem',
              background: '#ffffff',
            }}
          >
            <span style={{ color: '#3C50E0', fontWeight: 'semiBold' }}>
              Total Revenue
            </span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5rem' }}>
              <span style={{ color: '#80CAEE' }}>Total Sales</span>
              <Radio.Group
                value={selectedView}
                onChange={handleViewChange}
                size="small"
              >
                <Radio.Button value="Day">Day</Radio.Button>
                <Radio.Button value="Week">Week</Radio.Button>
                <Radio.Button value="Month">Month</Radio.Button>
              </Radio.Group>
            </div>
          </div>
        }
        style={{
          width: '100%',
          borderRadius: '10px',
          boxShadow: '0 2px 15px rgba(0, 0, 0, 0.1)',
          background: darkMode ? '#24303f' : '#ffffff', // Card bg color
        }}
        className="w-full xl:w-1/2 mb-6 xl:mb-0"
      >
        <div style={{ width: '100%', overflowX: 'auto' }}>
          <AreaChart
            width={500}
            height={250}
            data={data}
            className="max-w-full"
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" tick={{ fontSize: 12, fill: '#7B88A8' }} />
            <YAxis tick={{ fontSize: 12, fill: '#7B88A8' }} />
            <Tooltip
              contentStyle={{
                backgroundColor: '#ffffff',
                border: '1px solid #E0E0E0',
                borderRadius: '10px',
                fontSize: '12px',
              }}
              labelStyle={{ fontSize: '12px', color: '' }}
            />
            <Legend
              verticalAlign="top"
              align="right"
              height={30}
              iconType="circle"
              iconSize={8}
            />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#3A84FF"
              fill="rgba(58, 132, 255, 0.3)"
              strokeWidth={2}
              activeDot={{ r: 6 }}
            />
            <Area
              type="monotone"
              dataKey="sales"
              stroke="#7ED6F1"
              fill="rgba(126, 214, 241, 0.3)"
              strokeWidth={2}
              activeDot={{ r: 6 }}
            />
          </AreaChart>
        </div>
      </Card>

      <Card
        title={
          <span style={{ color: darkMode ? '#ffffff' : '#1C2434', fontWeight: 'normal' }}>
            Profit this week
          </span>
        }
        extra={
          <span style={{ outline: '2px solid transparent', outlineOffset: '2px' }}>
            This Week
          </span>
        }
        style={{
          marginLeft: '33px',
          width: '100%',
          borderRadius: '10px',
          boxShadow: '0 2px 15px rgba(0, 0, 0, 0.1)',
          background: darkMode ? '#24303f' : '#ffffff', // Card bg color
        }}
        className="w-full xl:w-1/2"
      >
        <div className="overflow-x-auto">
          <BarChart width={300} height={250} data={dataWeek} className="w-full">
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" tick={{ fontSize: 12, fill: '#7B88A8' }} />
            <YAxis tick={{ fontSize: 12, fill: '#7B88A8' }} />
            <Tooltip
              contentStyle={{
                backgroundColor: '#ffffff',
                border: '1px solid #E0E0E0',
                borderRadius: '10px',
                fontSize: '12px',
              }}
              labelStyle={{ fontSize: '12px', color: '#373D3F' }}
            />
            <Legend
              verticalAlign="top"
              marginRight="220px"
              height={30}
              iconType="circle"
              iconSize={8}
            />
            <Bar dataKey="sales" fill="#3C50E0" barSize={8} />
            <Bar dataKey="revenue" fill="#80CAEE" barSize={8} />
          </BarChart>
        </div>
      </Card>
    </Space>
  );
};

export default DashboardCharts;


// import React, { useState, useEffect } from 'react';
// import { Card, Radio, Space } from 'antd';
// import {
//   AreaChart,
//   Area,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   BarChart,
//   Bar,
//   Legend,
// } from 'recharts';
// import { useSelector } from 'react-redux';

// const data = [
//   { name: 'Sep', revenue: 30, sales: 20 },
//   { name: 'Oct', revenue: 50, sales: 30 },
//   { name: 'Nov', revenue: 60, sales: 50 },
//   { name: 'Dec', revenue: 70, sales: 40 },
//   { name: 'Jan', revenue: 80, sales: 50 },
//   { name: 'Feb', revenue: 40, sales: 20 },
//   { name: 'Mar', revenue: 90, sales: 60 },
//   { name: 'Apr', revenue: 80, sales: 60 },
//   { name: 'May', revenue: 100, sales: 80 },
//   { name: 'Jun', revenue: 90, sales: 50 },
//   { name: 'Jul', revenue: 60, sales: 40 },
//   { name: 'Aug', revenue: 80, sales: 70 },
// ];

// const dataWeek = [
//   { day: 'M', sales: 40, revenue: 60 },
//   { day: 'T', sales: 50, revenue: 80 },
//   { day: 'W', sales: 60, revenue: 90 },
//   { day: 'T', sales: 30, revenue: 50 },
//   { day: 'F', sales: 70, revenue: 100 },
//   { day: 'S', sales: 40, revenue: 70 },
//   { day: 'S', sales: 50, revenue: 80 },
// ];

// const DashboardCharts = () => {
//   const [selectedView, setSelectedView] = useState('Day');
//   const [isClient, setIsClient] = useState(false);

//   // Get dark mode from Redux store
//   const darkMode = useSelector((state) => state.tasks.darkMode);

//   useEffect(() => {
//     setIsClient(true);
//   }, []);

//   const handleViewChange = (e) => {
//     setSelectedView(e.target.value);
//   };

//   if (!isClient) {
//     return null;
//   }

//   return (
//     <Space
//       size="large"
//       className="flex flex-col xl:flex-row justify-between w-full"
//     >
//       <Card
//         title={
//           <div
//             style={{
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'center',
//               gap: '1rem',
//               background: 'transparent', // Changed to transparent
//             }}
//           >
//             <span style={{ color: '#3C50E0', fontWeight: 'semiBold' }}>
//               Total Revenue
//             </span>
//             <div style={{ display: 'flex', alignItems: 'center', gap: '5rem' }}>
//               <span style={{ color: '#80CAEE' }}>Total Sales</span>
//               <Radio.Group
//                 value={selectedView}
//                 onChange={handleViewChange}
//                 size="small"
//               >
//                 <Radio.Button value="Day">Day</Radio.Button>
//                 <Radio.Button value="Week">Week</Radio.Button>
//                 <Radio.Button value="Month">Month</Radio.Button>
//               </Radio.Group>
//             </div>
//           </div>
//         }
//         style={{
//           width: '100%',
//           borderRadius: '10px',
//           boxShadow: '0 2px 15px rgba(0, 0, 0, 0.1)',
//           background: darkMode ? '#24303f' : '#ffffff', // Card bg color
//         }}
//         className="w-full xl:w-1/2 mb-6 xl:mb-0"
//       >
//         <div style={{ width: '100%', overflowX: 'auto' }}>
//           <AreaChart
//             width={500}
//             height={250}
//             data={data}
//             className="max-w-full"
//           >
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="name" tick={{ fontSize: 12, fill: '#7B88A8' }} />
//             <YAxis tick={{ fontSize: 12, fill: '#7B88A8' }} />
//             <Tooltip
//               contentStyle={{
//                 backgroundColor: '#ffffff',
//                 border: '1px solid #E0E0E0',
//                 borderRadius: '10px',
//                 fontSize: '12px',
//               }}
//               labelStyle={{ fontSize: '12px', color: '' }}
//             />
//             <Legend
//               verticalAlign="top"
//               align="right"
//               height={30}
//               iconType="circle"
//               iconSize={8}
//             />
//             <Area
//               type="monotone"
//               dataKey="revenue"
//               stroke="#3A84FF"
//               fill="rgba(58, 132, 255, 0.3)"
//               strokeWidth={2}
//               activeDot={{ r: 6 }}
//             />
//             <Area
//               type="monotone"
//               dataKey="sales"
//               stroke="#7ED6F1"
//               fill="rgba(126, 214, 241, 0.3)"
//               strokeWidth={2}
//               activeDot={{ r: 6 }}
//             />
//           </AreaChart>
//         </div>
//       </Card>

//       <Card
//         title={
//           <span style={{ color: darkMode ? '#ffffff' : '#1C2434', fontWeight: 'normal' }}>
//             Profit this week
//           </span>
//         }
//         extra={
//           <span style={{ outline: '2px solid transparent', outlineOffset: '2px' }}>
//             This Week
//           </span>
//         }
//         style={{
//           marginLeft: '33px',
//           width: '100%',
//           borderRadius: '10px',
//           boxShadow: '0 2px 15px rgba(0, 0, 0, 0.1)',
//           background: darkMode ? '#24303f' : '#ffffff', // Card bg color
//         }}
//         className="w-full xl:w-1/2"
//       >
//         <div className="overflow-x-auto">
//           <BarChart width={300} height={250} data={dataWeek} className="w-full">
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="day" tick={{ fontSize: 12, fill: '#7B88A8' }} />
//             <YAxis tick={{ fontSize: 12, fill: '#7B88A8' }} />
//             <Tooltip
//               contentStyle={{
//                 backgroundColor: '#ffffff',
//                 border: '1px solid #E0E0E0',
//                 borderRadius: '10px',
//                 fontSize: '12px',
//               }}
//               labelStyle={{ fontSize: '12px', color: '#373D3F' }}
//             />
//             <Legend
//               verticalAlign="top"
//               marginRight="220px"
//               height={30}
//               iconType="circle"
//               iconSize={8}
//             />
//             <Bar dataKey="sales" fill="#3C50E0" barSize={8} />
//             <Bar dataKey="revenue" fill="#80CAEE" barSize={8} />
//           </BarChart>
//         </div>
//       </Card>
//     </Space>
//   );
// };

// export default DashboardCharts;
