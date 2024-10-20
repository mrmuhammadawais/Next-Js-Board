import React from "react";
import { List, Avatar, Badge } from "antd";
import { useSelector } from "react-redux";

const chatData = [
  {
    name: "Devid Heilo",
    message: "How are you?",
    time: "12 min",
    avatarUrl: "https://randomuser.me/api/portraits/men/3.jpg",
    status: "online",
    unread: 3,
  },
  {
    name: "Henry Fisher",
    message: "Waiting for you!",
    time: "12 min",
    avatarUrl: "https://randomuser.me/api/portraits/women/2.jpg",
    status: "offline",
    unread: 0,
  },
  {
    name: "Jhon Doe",
    message: "What's up?",
    time: "32 min",
    avatarUrl: "https://randomuser.me/api/portraits/men/4.jpg",
    status: "online",
    unread: 2,
  },
  {
    name: "Jane Doe",
    message: "Great",
    time: "32 min",
    avatarUrl: "https://randomuser.me/api/portraits/women/4.jpg",
    status: "away",
    unread: 0,
  },
  {
    name: "Jhon Doe",
    message: "How are you?",
    time: "32 min",
    avatarUrl: "https://randomuser.me/api/portraits/men/5.jpg",
    status: "online",
    unread: 3,
  },
];

const ChatList = () => {
  const darkMode = useSelector((state) => state.tasks.darkMode);

  return (
    <div className="w-full max-w-md mx-auto mt-[37px] mb-[55px] cursor-pointer">
      <h4
        className={`mb-4 px-7.5 text-xl font-semibold mt-[-21px] ${
          darkMode ? "text-white" : "text-black"
        }`}
      >
        Chats
      </h4>

      <List
        itemLayout="horizontal"
        dataSource={chatData}
        renderItem={(item) => (
          <List.Item className="py-2">
            <List.Item.Meta
              avatar={
                <div className="relative flex items-center">
                  <Avatar size={48} src={item.avatarUrl} />
                  {item.status && (
                    <span
                      className={`absolute w-3 h-3 rounded-full ${
                        item.status === "online"
                          ? "bg-green-500"
                          : item.status === "away"
                          ? "bg-[#dc3545]"
                          : "bg-red-500"
                      }`}
                      style={{
                        left: "38px",
                        bottom: "4px",
                      }}
                    />
                  )}
                </div>
              }
              title={
                <div className="flex justify-between items-center">
                  <span
                    className={`${
                      darkMode ? "text-white" : "#323a48"
                    } font-medium`}
                    style={{ fontSize: "14px" }}
                  >
                    {item.name}
                  </span>
                </div>
              }
              description={
                <div className="flex justify-between items-center">
                  <div className="flex flex-row">
                    <span
                      className={`text-sm text-black dark:text-white ${
                        darkMode ? "text-white" : "text-gray-500"
                      }`}
                      style={{ fontSize: "12px" }}
                    >
                      {item.message}
                    </span>
                    <span
                      className="text-sm text-gray-400"
                      style={{
                        fontSize: "12px",
                        color: darkMode ? "#b5b5b5" : "#878ea6",
                        marginTop: "0px",
                        marginLeft: "4px",
                      }}
                    >
                      {item.time}
                    </span>
                  </div>

                  {item.unread > 0 && (
                    <Badge
                      count={item.unread}
                      style={{
                        backgroundColor: "#3c50e0",
                        color: "#fff",
                        marginLeft: "10px",
                        fontSize: "12px",
                      }}
                    />
                  )}
                </div>
              }
            />
          </List.Item>
        )}
      />
    </div>
  );
};

export default ChatList;
