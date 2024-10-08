import React from "react";
import { Table, Avatar } from "antd";
import {
  GoogleCircleFilled,
  TwitterCircleFilled,
  GithubFilled,
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
];

const columns = [
  {
    title: "Source",
    dataIndex: "source",
    key: "source",
    render: (text, record) => (
      <div style={{ display: "flex", alignItems: "center",color:"#F7F9FC" }}>
        <Avatar icon={<record.icon />} style={{ marginRight: 8 }} />
        {text}
      </div>
    ),
  },
  {
    title: "Visitors",
    dataIndex: "visitors",
    key: "visitors",
  },
  {
    title: "Revenues",
    dataIndex: "revenues",
    key: "revenues",
    render: (text) => <span style={{ color: "green" }}>{text}</span>,
  },
  {
    title: "Sales",
    dataIndex: "sales",
    key: "sales",
  },
  {
    title: "Conversion",
    dataIndex: "conversion",
    key: "conversion",
    render: (text) => <span style={{ color: "blue" }}>{text}</span>,
  },
];

const TopChannelsTable = () => {
  return (
    <Table columns={columns} dataSource={ChannelsData} pagination={false} />
  );
};

export default TopChannelsTable;

