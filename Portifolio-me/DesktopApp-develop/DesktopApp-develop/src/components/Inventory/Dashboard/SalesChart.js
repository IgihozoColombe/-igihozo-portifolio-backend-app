import React from "react";
import ReactECharts from "echarts-for-react";

export default function SalesChart() {
  const options = {
    
    xAxis: {
      type: "category",
      data: ["Product i", "Product ii", "Product iii"],
    },
    yAxis: {
      type: "value",
    },
    title: {
      text: "Current Month Sales Category",
      left: "center",
    },
    legend: {
      data: ['Product i'],
      top: "bottom",
      show: true
    },
    tooltip: {
      trigger: 'axis',
    },
    series: [
      {
        type: 'bar' ,
        name: 'sales',
        smooth: true,
        data: [
          {
            type: 'bar' ,
            value: 4000,
            name: "Product i",
            itemStyle: {
              color: "#5C8C24",
            },
          },
          {
            type: 'bar' ,
            value: 2000,
            name: "Product ii",
            itemStyle: {
              color: "#00A3FF",
            },
          },

          {
            type: 'bar' ,
            value: 8000,
            name: "Product iii",
            itemStyle: {
              color: "#FF5C00",
            },
          },
        ],
      },
    ],
  };
  return (<ReactECharts option={options} />);
}
