import Sidebar from "../components/sidebar";

export default function Layout ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full h-screen flex p-5 bg-gray-100 gap-5">
      <Sidebar />
      <div className="w-full bg-white rounded-xl p-5">
        {children}
      </div>
    </div>
  )
}