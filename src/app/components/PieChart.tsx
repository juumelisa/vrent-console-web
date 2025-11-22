"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  ChartOptions,
} from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

export default function PieChartDemo() {

const data = {
  labels: ['Sedan', 'SUV', 'Sports', "others"],
  datasets: [
    {
      label: 'Dataset 1',
      data: [9, 10, 5, 20],
      backgroundColor: ["blue", "#8b5cf6", "#ec4899", "#3b83f6"],
    }
  ]
};

  const options: ChartOptions<"pie"> = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Fleet Distribution" },
    },
  };

  return <Pie data={data} options={options} />;
}
