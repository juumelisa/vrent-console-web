import { Metadata } from "next"
import { TfiStatsUp } from "react-icons/tfi"

export const metadata: Metadata = {
  title: 'Dashboard - vrent'
}

export default function Console () {
  return(
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="border border-line rounded-lg p-6">
          <h2>Monthly Revenue</h2>
          <p className="font-semibold text-lg">$1,997</p>
          <p className="text-finish flex items-center">
            <TfiStatsUp />
            <span>+2% from last month</span>
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
    </div>
  )
}