"use client";

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  ChartOptions,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function BarChartDemo() {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr"],
    datasets: [
      {
        label: "Sales",
        data: [100, 150, 230, 190],
        backgroundColor: ["blue", "#8b5cf6", "#ec4899", "#3b83f6"],
        tension: 0.3,
      },
    ],
  };

  const options: ChartOptions<"bar"> = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Monthly Sales" },
    },
  };

  return <Bar data={data} options={options} />;
}
