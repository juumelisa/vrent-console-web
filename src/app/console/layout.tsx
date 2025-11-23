"use client"
// import { Metadata } from "next";
import Sidebar from "../components/Sidebar";
import Headers from "../components/Headers";
import { useGlobalStore } from "@/store/useGlobalStore";

// export const metadata: Metadata = {
//   title: {
//     default: "vrent",
//     template: "%s - vrent",
//   },
// }

export default function Layout ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const load = useGlobalStore((el) => el.load)
  // const load = useGlobalStore((el) => el.load)
  return (
    <div className="w-full h-screen flex bg-gray-100">
      <Sidebar />
      <div className="w-full overflow-hidden flex flex-col pt-22 lg:p-0">
        <Headers />
        <div className="w-full h-auto overflow-y-auto p-5">
          {children}
        </div>
      </div>
      {load && <div className="w-screen h-screen overflow-hidden flex justify-center items-center absolute top-0 left-0 bg-black/50 z-60">
        <div className="w-10 h-10 border-4 border-primary border-b-primary/20 rounded-full animate-spin"></div>
      </div>}
    </div>
  )
}