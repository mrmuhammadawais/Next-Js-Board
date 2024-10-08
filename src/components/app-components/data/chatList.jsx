import React from "react";
import { List, Avatar, Badge } from "antd";

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
];

const ChatList = () => {
  return (
    <List
      itemLayout="horizontal"
      dataSource={ChatData}
      renderItem={(item) => (
        <List.Item>
          <List.Item.Meta
            avatar={
              <Badge dot status={item.status}>
                <Avatar src={item.avatar} />
              </Badge>
            }
            title={item.name}
            description={
              <>
                {item.message}{" "}
                <span style={{ color: "#aaa", marginLeft: 8 }}>
                  {item.time}
                </span>
              </>
            }
          />
          <Badge count={item.unreadCount} />
        </List.Item>
      )}
    />
  );
};

export default ChatList;
