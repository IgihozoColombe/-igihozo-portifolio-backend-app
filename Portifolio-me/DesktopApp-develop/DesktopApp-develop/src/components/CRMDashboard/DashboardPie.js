import React from "react";
import ReactECharts from "echarts-for-react";

const DashboardPie = ({text, big, small}) => {
  const options = {
    title: {
      text,
      x: "center",
    },
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c} ({d}%)",
    },
    legend: {
      orient: "vertical",
      left: "left",
      data: ["first", "second"],
    },
    series: [
      {
        name: "Some first",
        type: "pie",
        radius: "50%",
        center: ["50%", "60%"],
        animationDuration: 5000,
        data: [
          { value: 24, name: big },
          { value: 80, name: small },
        ],
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0,0,0,0.5)",
          },
        },
      },
    ],
  };
  return (
    <ReactECharts option={options} style={{ marginRight: "20px", width: "100%" }} />
  );
};

export default DashboardPie;
