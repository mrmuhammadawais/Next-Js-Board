

// import React from "react";
// import { List, Avatar, Badge } from "antd";

// const ChatData = [
//   {
//     name: "Devid Heilo",
//     message: "How are you?",
//     time: "12 min",
//     avatar: "https://randomuser.me/api/portraits/men/1.jpg",
//     unreadCount: 3,
//     status: "green",
//   },
//   {
//     name: "Henry Fisher",
//     message: "Waiting for you!",
//     time: "12 min",
//     avatar: "https://randomuser.me/api/portraits/women/2.jpg",
//     unreadCount: 1,
//     status: "red",
//   },
//   {
//     name: "Jhon Doe",
//     message: "What's up?",
//     time: "32 min",
//     avatar: "https://randomuser.me/api/portraits/men/3.jpg",
//     unreadCount: 2,
//     status: "green",
//   },
//   {
//     name: "Jhon Doe",
//     message: "What's up?",
//     time: "12 min",
//     avatar: "https://randomuser.me/api/portraits/men/4.jpg",
//     unreadCount: 4,
//     status: "green",
//   },
// ];

// const ChatList = () => {
//   return (
//     <List
//       itemLayout="horizontal"
//       dataSource={ChatData}
//       className="w-full max-w-full"
//       renderItem={(item) => (
//         <List.Item className="flex justify-between items-center w-full p-2 sm:p-4">
//           <List.Item.Meta
//             avatar={
//               <Badge dot status={item.status}>
//                 <Avatar src={item.avatar} className="w-10 h-10" />
//               </Badge>
//             }
//             title={
//               <span className="text-base font-semibold">{item.name}</span>
//             }
//             description={
//               <div className="flex items-center justify-between w-full">
//                 <span>{item.message}</span>
//                 <span className="text-gray-500 ml-2 text-sm">{item.time}</span>
//               </div>
//             }
//             className="w-full"
//           />
//           <Badge count={item.unreadCount} className="ml-4" />
//         </List.Item>
//       )}
//     />
//   );
// };

// export default ChatList;




import React from "react";
import { List, Avatar, Badge } from "antd";
import { useSelector } from "react-redux";

const ChatData = [
  {
    name: "Devid Heilo",
    message: "How are you?",
    time: "12 min",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    unreadCount: 3,
    status: "green",
  },
  {
    name: "Henry Fisher",
    message: "Waiting for you!",
    time: "12 min",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    unreadCount: 1,
    status: "red",
  },
  {
    name: "Jhon Doe",
    message: "What's up?",
    time: "32 min",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    unreadCount: 2,
    status: "green",
  },
  {
    name: "Jhon Doe",
    message: "What's up?",
    time: "12 min",
    avatar: "https://randomuser.me/api/portraits/men/4.jpg",
    unreadCount: 4,
    status: "green",
  },
  {
    name: "Jhon Doe",
    message: "What's up?",
    time: "12 min",
    avatar: "https://randomuser.me/api/portraits/men/4.jpg",
    unreadCount: 4,
    status: "green",
  },
];

const ChatList = () => {
  // Get dark mode from Redux store
  const darkMode = useSelector((state) => state.tasks.darkMode);

  return (
    <List
      itemLayout="horizontal"
      dataSource={ChatData}
      className="w-full max-w-full"
      renderItem={(item) => (
        <List.Item
          className={`flex justify-between items-center w-full p-2 sm:p-4 ${
            darkMode ? 'bg-[#24303f]' : 'bg-white'
          }`}
        >
          <List.Item.Meta
            avatar={
              <Badge dot status={item.status} style={{ backgroundColor: item.status === 'green' ? 'green' : 'red' }}>
                <Avatar src={item.avatar} className="w-10 h-10" />
              </Badge>
            }
            title={
              <span className={`text-base font-semibold ${darkMode ? 'text-white' : 'text-black'}`}>
                {item.name}
              </span>
            }
            description={
              <div className="flex items-center justify-between w-full">
                <span className={darkMode ? 'text-white' : 'text-black'}>{item.message}</span>
                <span className={`text-gray-500 ml-2 text-sm ${darkMode ? 'text-white' : 'text-gray-500'}`}>
                  {item.time}
                </span>
              </div>
            }
            className="w-full"
          />
          <Badge count={item.unreadCount} className={`ml-4 ${darkMode ? 'bg-blue-600' : 'bg-blue-400'}`} />
        </List.Item>
      )}
    />
  );
};

export default ChatList;
