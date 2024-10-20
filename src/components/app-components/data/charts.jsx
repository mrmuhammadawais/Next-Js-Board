import React, { useState, useEffect } from "react";
import { Card, Space } from "antd";
import { useSelector } from "react-redux";
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
} from "recharts";

const data = [
  { name: "Sep", revenue: 30, sales: 20 },
  { name: "Oct", revenue: 50, sales: 30 },
  { name: "Nov", revenue: 60, sales: 50 },
  { name: "Dec", revenue: 70, sales: 40 },
  { name: "Jan", revenue: 80, sales: 50 },
  { name: "Feb", revenue: 40, sales: 20 },
  { name: "Mar", revenue: 90, sales: 60 },
  { name: "Apr", revenue: 80, sales: 60 },
  { name: "May", revenue: 100, sales: 80 },
  { name: "Jun", revenue: 90, sales: 50 },
  { name: "Jul", revenue: 60, sales: 40 },
  { name: "Aug", revenue: 80, sales: 70 },
];

const dataWeek = [
  { day: "M", sales: 40, revenue: 60 },
  { day: "T", sales: 50, revenue: 80 },
  { day: "W", sales: 60, revenue: 90 },
  { day: "T", sales: 30, revenue: 50 },
  { day: "F", sales: 70, revenue: 100 },
  { day: "S", sales: 40, revenue: 70 },
  { day: "S", sales: 50, revenue: 80 },
];

const DashboardCharts = () => {
  const [isClient, setIsClient] = useState(false);
  const [selectedView, setSelectedView] = useState("Day");
  const darkMode = useSelector((state) => state.tasks.darkMode);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <Space
      size="large"
      className="flex flex-col xl:flex-row justify-between w-full space-y-4 xl:space-y-0 xl:space-x-4 ml-[-19px] mt-[-20px]"
    >
      <Card
        title={
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              border: "none",
              borderRadius: "0",
            }}
          >
            <div className="flex items-center gap-2 mt-[-10px]">
              <div className="w-2 h-2 rounded-full bg-[#3C50E0]" />
              <div
                style={{
                  color: "#3C50E0",
                  fontWeight: "600",
                  fontSize: "14px",
                }}
              >
                <p>Total Revenue</p>
              </div>
              <div
                style={{
                  color: "#80CAEE",
                  fontWeight: "600",
                  fontSize: "14px",
                }}
              >
                <p
                  className="text-sm font-medium"
                  style={{
                    color: "#c2c9d1",
                    marginTop: ["38px"],
                    marginLeft: ["-104px"],
                  }}
                >
                  12.04.2022
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 mt-[-10px]">
              <div className="w-2 h-2 rounded-full bg-[#80CAEE]" />
              <div
                style={{
                  color: "#80CAEE",
                  fontWeight: "600",
                  fontSize: "14px",
                }}
              >
                <p>Total Sales</p>
              </div>
              <div
                style={{
                  color: "#3C50E0",
                  fontWeight: "600",
                  fontSize: "14px",
                }}
              >
                <p
                  className="text-sm font-medium"
                  style={{
                    color: "#c2c9d1",
                    marginTop: ["38px"],
                    marginLeft: ["-87px"],
                  }}
                >
                  12.04.2023
                </p>
              </div>
            </div>

            <div className="flex w-full max-w-45 justify-end">
              <div
                className={`inline-flex items-center rounded-md p-1.5 ${
                  darkMode ? "bg-[#313d4a]" : "bg-white"
                }`}
              >
                <button
                  className={`rounded px-2 py-1 text-xs font-medium shadow transition-all duration-200 ease-in-out ${
                    darkMode
                      ? "bg-[#313d4a] text-white hover:bg-gray-700"
                      : "bg-white text-black hover:bg-gray-100"
                  }`}
                >
                  Day
                </button>
                <button
                  className={`rounded px-2 py-1 text-xs font-medium transition-all duration-200 ease-in-out ${
                    darkMode
                      ? "bg-[#313d4a] text-white hover:bg-gray-700"
                      : "bg-white text-black hover:bg-gray-100"
                  }`}
                >
                  Week
                </button>
                <button
                  className={`rounded px-2 py-1 text-xs font-medium transition-all duration-200 ease-in-out ${
                    darkMode
                      ? "bg-[#313d4a] text-white hover:bg-gray-700"
                      : "bg-white text-black hover:bg-gray-100"
                  }`}
                >
                  Month
                </button>
              </div>
            </div>
          </div>
        }
        style={{
          width: "100%",
          background: "#ffffff",
          backgroundColor: darkMode ? "#24303f" : "#ffffff",
          color: darkMode ? "#ffffff" : "#000000",
          minHeight: "350px",
          border: "none",
          borderRadius: "0",
        }}
        className="w-full xl:w-2/3 mb-6 xl:mb-0"
      >
        <div className="w-full overflow-x-auto">
          <AreaChart
            width={565}
            height={350}
            data={data}
            className="md:w-96 lg:w-[450px] xl:w-[730px]"
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" tick={{ fontSize: 12, fill: "#7B88A8" }} />
            <YAxis tick={{ fontSize: 12, fill: "#7B88A8" }} />
            <Tooltip
              contentStyle={{
                backgroundColor: "#ffffff",
                fontSize: "12px",
              }}
              labelStyle={{ fontSize: "12px", color: "#373D3F" }}
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

        {selectedView === "Week" && (
          <div className="w-full overflow-x-auto">
            <BarChart
              width={730}
              height={350}
              data={dataWeek}
              barCategoryGap={25}
              className="md:w-96 lg:w-[450px] xl:w-[730px]"
              style={{ padding: "16px" }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" tick={{ fontSize: 12, fill: "#7B88A8" }} />
              <YAxis tick={{ fontSize: 12, fill: "#7B88A8" }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#ffffff",
                  fontSize: "12px",
                }}
                labelStyle={{ fontSize: "12px", color: "#373D3F" }}
              />
              <Legend
                verticalAlign="top"
                height={30}
                iconType="circle"
                iconSize={8}
              />
              <Bar
                dataKey="sales"
                stackId="a"
                fill="#3c50e0"
                barSize={8}
                radius={[10, 10, 0, 0]}
              />
              <Bar dataKey="revenue" stackId="a" fill="#80CAEE" barSize={8} />
            </BarChart>
          </div>
        )}
      </Card>

      <Card
        style={{
          width: "100%",
          background: "#ffffff",
          minHeight: "320px",
          height: "auto",
          backgroundColor: darkMode ? "#24303f" : "#ffffff",
          color: darkMode ? "#ffffff" : "#000000",
          border: "none",
          borderRadius: "0",
          marginLeft: "-18px",
        }}
        className="w-full xl:w-1/3 ml-2"
        title={
          <div
            className={`text-sm font-semibold ${
              darkMode ? "text-[#ffffff]" : "text-black"
            }`}
          >
            Profit this Week
          </div>
        }
        extra={
          <select
            name="#"
            id="#"
            className="inline-flex appearance-none bg-transparent text-sm font-medium outline-none"
          >
            <option value>This Week</option>
            <option value>Last week</option>
          </select>
        }
      >
        <div className="w-full overflow">
          <BarChart
            width={323}
            height={350}
            data={dataWeek}
            barCategoryGap={5}
            barGap={5}
            style={{ marginLeft: "-50px" }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" tick={{ fontSize: 12, fill: "#7B88A8" }} />
            <YAxis tick={{ fontSize: 12, fill: "#7B88A8" }} />
            <Tooltip
              contentStyle={{
                backgroundColor: "#ffffff",
                fontSize: "12px",
              }}
              labelStyle={{ fontSize: "12px", color: "#373D3F" }}
            />
            <Legend
              verticalAlign="top"
              height={30}
              iconType="circle"
              iconSize={8}
            />
            <Bar dataKey="sales" stackId="a" fill="#3c50e0" barSize={10} />
            <Bar dataKey="revenue" stackId="a" fill="#80CAEE" barSize={10} />
          </BarChart>
        </div>
      </Card>
    </Space>
  );
};

export default DashboardCharts;








