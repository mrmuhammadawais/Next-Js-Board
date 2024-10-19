import React from "react";
import { Avatar, Card } from "antd";
import {
  GoogleCircleFilled,
  TwitterCircleFilled,
  GithubFilled,
  FacebookFilled,
  LinkedinFilled,
} from "@ant-design/icons";
import { useSelector } from "react-redux";

const ChannelsData = [
  {
    key: "1",
    source: "Google",
    visitors: "3.5K",
    revenues: "$5,768",
    sales: "590",
    conversion: "4.8%",
    icon: <GoogleCircleFilled />,
  },
  {
    key: "2",
    source: "Twitter",
    visitors: "2.2K",
    revenues: "$4,635",
    sales: "467",
    conversion: "4.3%",
    icon: <TwitterCircleFilled />,
  },
  {
    key: "3",
    source: "Github",
    visitors: "2.1K",
    revenues: "$4,290",
    sales: "420",
    conversion: "3.7%",
    icon: <GithubFilled />,
  },
  {
    key: "4",
    source: "Facebook",
    visitors: "1.9K",
    revenues: "$4,490",
    sales: "425",
    conversion: "3.11%",
    icon: <FacebookFilled />,
  },
  {
    key: "5",
    source: "LinkedIn",
    visitors: "1.10K",
    revenues: "$4,790",
    sales: "495",
    conversion: "3.89%",
    icon: <LinkedinFilled />,
  },
];

const TopChannelsTable = () => {
  const darkMode = useSelector((state) => state.tasks.darkMode);

  return (
    <div className="overflow-x-auto ml-[-5px]">
      <Card
        style={{
          fontWeight: "600",
          fontSize: "18px",
          backgroundColor: darkMode ? "#24303f" : "#ffffff",
          color: darkMode ? "#ffffff" : "#000000",
          border: "none",
          borderRadius: "0",
        }}
      >
        <h1
          style={{ color: darkMode ? "#ffffff" : "#000000" }}
          className="mb-3 text-xl font-semibold"
        >
          Top Channels
        </h1>

        <div className="table-responsive">
          <table
            className="min-w-full"
            style={{ background: darkMode ? "#24303f" : "#ffffff" }}
          >
            <thead style={{ backgroundColor: "#f7f9fc" }}>
              <tr>
                <th className="py-2 px-4">Source</th>
                <th className="py-2 px-4">Visitors</th>
                <th className="py-2 px-4">Revenues</th>
                <th className="py-2 px-4">Sales</th>
                <th className="py-2 px-4">Conversion</th>
              </tr>
            </thead>
            <tbody>
              {ChannelsData.map((channel) => (
                <tr
                  key={channel.key}
                  className="border-t"
                  style={{ color: darkMode ? "#ffffff" : "#000000" }}
                >
                  <td className="py-2 px-4">
                    <div className="flex items-center">
                      <Avatar
                        icon={channel.icon}
                        className="mr-2 bg-blue-500 dark:bg-blue-600"
                      />
                      <span className="text-sm font-normal">
                        {channel.source}
                      </span>
                    </div>
                  </td>
                  <td className="py-2 px-4 text-sm font-normal">
                    {channel.visitors}
                  </td>
                  <td
                    className="py-2 px-4 text-green-500 text-sm font-medium"
                    style={{ color: darkMode ? "#2fd4b2" : "#2fd4b2" }}
                  >
                    {channel.revenues}
                  </td>
                  <td className="py-2 px-4 text-sm font-normal">
                    {channel.sales}
                  </td>
                  <td
                    className="py-2 px-4 text-sm font-medium"
                    style={{ color: darkMode ? "#269ded" : "#269ded" }}
                  >
                    {channel.conversion}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      <style jsx>{`
        .table-responsive {
          width: 100%;
          overflow-x: auto;
        }
        table {
          width: 100%;
        }
        th,
        td {
          background: ${darkMode ? "#24303f" : "#ffffff"};
          color: ${darkMode ? "#ffffff" : "#000000"};
          padding: 16px;
          text-align: left;
        }

        thead th {
          color: ${darkMode ? "#ffffff" : "#a5afbd"};
          font-weight: 500;
          font-size: 15px;
           {
            /* background-color:"#f7f9fc"}; */
          }
          background-color: ${darkMode ? "#24303f" : "#f7f9fc"};
        }
        tbody tr:nth-child(even) {
          background-color: ${darkMode ? "#1f2b38" : "#f9fafb"};
        }
        tbody tr:hover {
          background-color: ${darkMode ? "#2a3a4a" : "#f1f5f9"};
        }
      `}</style>
    </div>
  );
};

export default TopChannelsTable;
