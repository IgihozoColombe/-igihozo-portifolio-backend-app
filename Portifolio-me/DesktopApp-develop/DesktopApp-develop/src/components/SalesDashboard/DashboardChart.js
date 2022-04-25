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
    xAxis: {
      type: "category",
      data: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC",]
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
          name: "JAN",
          type: "bar",
          data: [500],
          animationDuration: 5000
      },
      {
          name: "FEB",
          type: "bar",
          data: [0,300],
          animationDuration: 5000
      },
      {
          name: "MAR",
          type: "bar",
          data: [0,0,500],
          animationDuration: 5000
      },
      {
          name: "APR",
          type: "bar",
          data: [0,0,0,300],
          animationDuration: 5000
      },
      {
          name: "MAY",
          type: "bar",
          data: [0,0,0,0,500],
          animationDuration: 5000
      },
      {
          name: "JUN",
          type: "bar",
          data: [0,0,0,0,0,300],
          animationDuration: 5000
      },
      {
          name: "JUL",
          type: "bar",
          data: [0,0,0,0,0,0,500],
          animationDuration: 5000
      },
      {
          name: "AUG",
          type: "bar",
          data: [0,0,0,0,0,0,0,300],
          animationDuration: 5000
      },
      {
          name: "SEP",
          type: "bar",
          data: [0,0,0,0,0,0,0,0,500],
          animationDuration: 5000
      },
      {
          name: "OCT",
          type: "bar",
          data: [0,0,0,0,0,0,0,0,0,300],
          animationDuration: 5000
      },
      {
          name: "NOV",
          type: "bar",
          data: [0,0,0,0,0,0,0,0,0,0,500],
          animationDuration: 5000
      },
      {
          name: "DEC",
          type: "bar",
          data: [0,0,0,0,0,0,0,0,0,0,0,300],
          animationDuration: 5000
      },
  ],
  };
  return (
    <ReactECharts option={options} style={{ height: "200px", width: "100%" }} />
  );
};

export default DashboardChart;
