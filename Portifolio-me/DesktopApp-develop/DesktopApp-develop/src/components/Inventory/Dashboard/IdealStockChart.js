import React from "react";
import ReactECharts from "echarts-for-react";

export default function IdealStockChart() {
  const options = {
    xAxis: {
      type: "value",
    },
    yAxis: {
      type: "category",
    },
    grid: {
        top: 80,
        bottom: 70
      },
    legend: {
      top: "bottom",
      show: true,
    },
    tooltip: {
      trigger: "axis",
    },
    series: [
        {
            name: 'Ideal Stock',
            itemStyle: {
                color: "#5C8C24",
              },
            type: 'bar',
            stack: 'total',
            emphasis: {
              focus: 'series'
            },
            data: [320]
          },
          {
            name: 'Available Stock',
            itemStyle: {
                color: "#00A3FF",
              },
            type: 'bar',
            stack: 'total',
            emphasis: {
              focus: 'series'
            },
            data: [120]
          },
    ],
  };
  return <ReactECharts option={options} />;
}
