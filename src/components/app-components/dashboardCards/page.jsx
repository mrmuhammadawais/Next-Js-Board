import React from 'react';
import { Card, Col, Row } from 'antd';

import {
  EyeOutlined,
  DollarCircleOutlined,
  ShoppingCartOutlined,
  UsergroupAddOutlined,
} from '@ant-design/icons';
import { dashboardData } from  '../data/dashboardData';
import TopChannelsTable from '../data/channel'; 
import ChatList from '../data/chatList'; 

const iconMapping = {
  eye: <EyeOutlined />,
  dollar: <DollarCircleOutlined />,
  shopping: <ShoppingCartOutlined />,
  user: <UsergroupAddOutlined />,
};

const DashboardCards = ({ data }) => {
  return (

   

    <Row gutter={16}>
   
      {data.map((card, index) => (
        <Col span={6} key={index}>
          <Card>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ fontSize: '24px', color: card.color }}>
                {iconMapping[card.icon]} 
              </div>
              <div style={{ marginLeft: '10px' }}>
                <h3 style={{ margin: 0, fontSize: '25px',  fontWeight: 'bold'}}>{card.value}</h3>
                <p style={{ margin: 0, color: 'gray' }}>{card.title}</p>
                <p style={{ margin: 0, color:'rgb(16 185 129)' }}>{card.percentage}</p>
              </div>
            </div>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default DashboardCards;





