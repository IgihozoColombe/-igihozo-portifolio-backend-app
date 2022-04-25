import React from "react";
import ReactECharts from "echarts-for-react";

const DashboardChart = () => {
  const options = {
    title: {
      text: ""
    },
    tooltip: {
      trigger: "axis",
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    // toolbox: {
    //   feature: {
    //     saveAsImage: {},
    //   },
    // },
    xAxis: {
      type: "category",
      data: ["SUN", "MON", "TUE", "WED", "THUR", "FRI", "SAT"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        type: "bar",
        data: [500],
        animationDuration: 5000,
      },
      {
        type: "bar",
        data: [0, 300],
        animationDuration: 5000,
      },
      {
        type: "bar",
        data: [0, 0, 500],
        animationDuration: 5000,
      },
      {
        type: "bar",
        data: [0, 0, 0, 300],
        animationDuration: 5000,
      },
      {
        type: "bar",
        data: [0, 0, 0, 0, 500],
        animationDuration: 5000,
      },
      {
        type: "bar",
        data: [0, 0, 0, 0, 0, 300],
        animationDuration: 5000,
      },
      {
        type: "bar",
        data: [0, 0, 0, 0, 0, 0, 500],
        animationDuration: 5000,
      },
    ],
  };
  return (
    <ReactECharts option={options} style={{ height: "200px", width: "100%" }} />
  );
};

export default DashboardChart;
