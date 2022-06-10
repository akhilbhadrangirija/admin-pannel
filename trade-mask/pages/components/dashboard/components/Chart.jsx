import { useState } from "react/cjs/react.development";
import LineChart from "./LineChart";
import { currencyData } from "./Data";

function Chart() {
  const [coinData, setCoinData] = useState({
    labels: currencyData.map((data) => data.time),
    datasets: [
      {
        label:"Price",
        data: currencyData.map((data) => data.price),
        backgroundColor: [
          "rgba(75,192,192,1)",
        ],
        borderColor: "blue",
        borderWidth: 2,
      },
    ],
  });

  return (
    <div className="App">
      
      <div style={{ width: 750 }}>
        <LineChart chartData={coinData} />
      </div>
    </div>
  );
}

export default Chart;