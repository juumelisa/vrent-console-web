import Sidebar from "../components/sidebar";

export default function Layout ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full h-screen flex lg:p-5 bg-gray-100 gap-5">
      <Sidebar />
      <div className="w-full bg-white rounded-xl px-5 py-20 lg:py-5 overflow-y-auto">
        {children}
      </div>
    </div>
  )
}