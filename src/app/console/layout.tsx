import { Metadata } from "next";
import Sidebar from "../components/Sidebar";
import Headers from "../components/Headers";

export const metadata: Metadata = {
  title: {
    default: "vrent",
    template: "%s - vrent",
  },
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
        <Headers />
        <div className="w-full h-auto overflow-y-auto p-5">
          {children}
        </div>
      </div>
    </div>
  )
}