import { Metadata } from "next";
import Sidebar from "../components/Sidebar";

export const metadata: Metadata = {
  title: 'Dashboard - vrent'
}

export default function Layout ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full h-screen flex bg-gray-100">
      <Sidebar />
      <div className="w-full overflow-hidden flex flex-col pt-19 lg:p-0">
        <div className="bg-white border-y border-line w-full p-5">
          <p className="font-semibold text-lg">Vehicle</p>
        </div>
        <div className="w-full h-auto overflow-y-auto p-5">
          {children}
        </div>
      </div>
    </div>
  )
}