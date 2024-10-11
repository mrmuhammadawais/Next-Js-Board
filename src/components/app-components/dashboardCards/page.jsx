
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
import { Main } from "next/document";

const iconMapping = {
  eye: <EyeOutlined style={{ fontSize: "40px", color: "#1890ff" }} />,
  dollar: (
    <DollarCircleOutlined style={{ fontSize: "40px", color: "#1890ff" }} />
  ),
  shopping: (
    <ShoppingCartOutlined style={{ fontSize: "40px", color: "#1890ff" }} />
  ),
  user: <UsergroupAddOutlined style={{ fontSize: "40px", color: "#1890ff" }} />,
};

const DashboardCards = () => {
  return (
    <MainLayout>

    <div style={{ padding: "20px" }}>
      <Row gutter={16}>
        {dashboardData.map((card, index) => (
          <Col span={6} key={index}>
            <Card style={{ textAlign: "center", borderRadius: "8px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: "10px",
                }}
              >
                {iconMapping[card.icon]}
              </div>
              <h3 style={{ margin: 0, fontSize: "25px", fontWeight: "bold" }}>
                {card.value}
              </h3>
              <p style={{ margin: 0, color: "gray" }}>{card.title}</p>
              <p
                style={{
                  margin: 0,
                  color: "green",
                  position: "absolute",
                  bottom: "10px",
                  right: "10px",
                }}
              >
                {card.percentage}
              </p>
            </Card>
          </Col>
        ))}
      </Row>
      
    

    
      <div style={{ padding: "20px", color: "#1C2434" }}>
        <Row gutter={24}>
          <Col xs={24} lg={16}>
            {/* <Card title="Top Channels"> */}
              <TopChannelsTable />
            {/* </Card> */}
          </Col>

          <Col xs={24} lg={8}>
            <Card title="Chats" style={{background: '#ffffff'}}>
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
