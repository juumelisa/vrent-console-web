import { Metadata } from "next";
import Sidebar from "../components/sidebar";


export const metadata: Metadata = {
  title: 'Dashboard - vrent'
}

export default function Layout ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full h-screen flex lg:p-5 bg-gray-100 gap-5">
      <Sidebar />
      <div className="w-full overflow-hidden flex flex-col p-5 pt-24 lg:p-0">
        <div className="bg-white border border-line w-full p-5 rounded-xl mb-5">
          <p className="font-semibold text-lg">Vehicle</p>
          <p className="text-sm">{`Dashboard > Vehicle > Detail`}</p>
        </div>
        <div className="w-full h-auto overflow-y-auto rounded-xl">
          {children}
        </div>
      </div>
    </div>
  )
}