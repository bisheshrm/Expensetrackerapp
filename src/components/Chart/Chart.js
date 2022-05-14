import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    
    let sum = 0;
    dataPointValues.forEach(value => {
        sum += value;
    });
    console.log(sum);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={sum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
