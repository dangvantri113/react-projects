import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const maxValue = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint, index) => (
        <ChartBar key={index} dataPoint={dataPoint} maxValue={maxValue} />
      ))}
    </div>
  );
};

export default Chart;
