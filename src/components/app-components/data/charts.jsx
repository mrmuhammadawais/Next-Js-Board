// import React from 'react';
// import { Card, Radio, Space } from 'antd';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, AreaChart, Area, BarChart, Bar, Legend } from 'recharts';
// import { useState } from 'react';

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

//   const handleViewChange = (e) => {
//     setSelectedView(e.target.value);
//   };

//   return (
//     <Space size="large" style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
//       {/* First Card: Total Revenue/Total Sales */}
//       <Card title="Total Revenue" extra={<span>Total Sales</span>} style={{ width: '48%' }}>
//         <div>
//           <Radio.Group value={selectedView} onChange={handleViewChange}>
//             <Radio.Button value="Day">Day</Radio.Button>
//             <Radio.Button value="Week">Week</Radio.Button>
//             <Radio.Button value="Month">Month</Radio.Button>
//           </Radio.Group>
//         </div>
//         <AreaChart width={500} height={250} data={data}>
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="name" />
//           <YAxis />
//           <Tooltip />
//           <Area type="monotone" dataKey="revenue" stroke="#8884d8" fill="#8884d8" />
//           <Area type="monotone" dataKey="sales" stroke="#82ca9d" fill="#82ca9d" />
//         </AreaChart>
//       </Card>

    
//       <Card title="Profit this week" extra={<span>This Week</span>} style={{ width: '48%' }}>
//         <BarChart width={300} height={250} data={dataWeek}>
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="day" />
//           <YAxis />
//           <Tooltip />
//           <Legend />
//           <Bar dataKey="sales" fill="#8884d8" />
//           <Bar dataKey="revenue" fill="#82ca9d" />
//         </BarChart>
//       </Card>
//     </Space>
//   );
// };

// export default DashboardCharts;



