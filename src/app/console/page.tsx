import { Metadata } from "next"
import { TfiStatsUp } from "react-icons/tfi"
import LineChartDemo from "../components/LineChart"
import PieChartDemo from "../components/PieChart"
import BarChartDemo from "../components/BarChart"

export const metadata: Metadata = {
  title: 'Dashboard - vrent'
}

export default function Console () {
  return(
    <div>
      <div className="w-full border-b border-line pb-5">
        <p>Dashboard</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-5">
        <div className="border border-line rounded-lg p-6">
          <h2>Monthly Revenue</h2>
          <p className="font-semibold text-lg">$1,997</p>
          <p className="text-finish flex flex-nowrap">
            <TfiStatsUp />
            <span> +2% from last month</span>
          </p>
        </div>
        <div className="border border-line rounded-lg p-6">
          <h2>Active Rentals</h2>
          <p className="font-semibold text-lg">10</p>
          <p className="text-finish flex items-center">
            <TfiStatsUp />
            <span>+2 this month</span>
          </p>
        </div>
        <div className="border border-line rounded-lg p-6">
          <h2>Total Vehicle</h2>
          <p className="font-semibold text-lg">10</p>
          <p className="text-finish flex items-center">
            <TfiStatsUp />
            <span>+2 this month</span>
          </p>
        </div>
        <div className="border border-line rounded-lg p-6">
          <h2>Customer Retention</h2>
          <p className="font-semibold text-lg">80%</p>
          <p className="text-finish flex items-center">
            Repeat customers
          </p>
        </div>
      </div>
      <div className="w-full grid grid-cols-2 gap-5 mt-5">

      <div className="w-full border border-line rounded-lg p-5">
          <BarChartDemo />
        </div>
        <div className="w-full h-90 border border-line rounded-lg p-5 flex justify-center items-center">
          <PieChartDemo />
        </div>
      </div>
      <div className="w-full border border-line rounded-lg p-5 mt-5">
        <LineChartDemo />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="w-full border border-line rounded-lg p-5 mt-5">
          <p>Top performing vehicles</p>
          <div className="pb-5 border-b border-line">1</div>
          <div className="pb-5 border-b border-line">1</div>
          <div className="pb-5 border-b border-line">1</div>
          <div className="pb-5 border-b border-line">1</div>
          <div className="pb-5 border-b border-line">1</div>
          <div className="pb-5 border-b border-line">1</div>
          <div className="pb-5 border-b border-line">1</div>
          <div className="pb-5 border-b border-line">1</div>
          <div className="pb-5 border-b border-line">1</div>
          <div className="pb-5 border-b border-line">1</div>
          <div className="pb-5 border-b border-line">1</div>
        </div>
        <div className="w-full border border-line rounded-lg p-5 mt-5">
          <p>Top performing vehicles</p>
          <div className="pb-5 border-b border-line">1</div>
          <div className="pb-5 border-b border-line">1</div>
          <div className="pb-5 border-b border-line">1</div>
          <div className="pb-5 border-b border-line">1</div>
          <div className="pb-5 border-b border-line">1</div>
          <div className="pb-5 border-b border-line">1</div>
          <div className="pb-5 border-b border-line">1</div>
          <div className="pb-5 border-b border-line">1</div>
          <div className="pb-5 border-b border-line">1</div>
          <div className="pb-5 border-b border-line">1</div>
          <div className="pb-5 border-b border-line">1</div>
        </div>
      </div>
    </div>
  )
}