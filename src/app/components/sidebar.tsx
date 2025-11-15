"use client"
import Image from "next/image"
import logo from "@/app/assets/images/logo.png"
import { TbLayoutSidebarLeftCollapse, TbLayoutSidebarRightCollapse } from "react-icons/tb"
import {useState } from "react"
import Link from "next/link"
import { MdDirectionsCar, MdDvr, MdLogout, MdOutlineAdminPanelSettings, MdOutlineDashboard, MdOutlinePeople } from "react-icons/md"
import { usePathname } from "next/navigation"

export default function Sidebar () {
  const currentPath = usePathname()
  const [open, setOpen] = useState<boolean>(true)

  const menuList = [
    {
      label: 'dashboard',
      to: '/console',
      icon: MdOutlineDashboard,
      isCurrent: currentPath === '/console'
    },
    {
      label: 'vehicles',
      to: '/console/vehicles',
      icon: MdDirectionsCar,
      isCurrent: currentPath.startsWith('/console/vehicles')
    },
    {
      label: 'transaction',
      to: '/console/transaction',
      icon: MdDvr,
      isCurrent: currentPath.startsWith('/console/transaction')
    },
    {
      label: 'customers',
      to: '/console/customers',
      icon: MdOutlinePeople,
      isCurrent: currentPath.startsWith('/console/customers')
    },
    {
      label: 'admin',
      to: '/console/admin',
      icon: MdOutlineAdminPanelSettings,
      isCurrent: currentPath.startsWith('/console/admin')
    }
  ]

  const changeSidebarState = () => {
    const newValue = !open
    setOpen(newValue)
  }

  return (
    <div className={`relative w-full ${open ? 'max-w-60' : 'max-w-20'} h-full bg-white rounded-xl transition-all duration-500`}>
      <div className={`flex ${open ? 'justify-between' : 'justify-center'} p-5 border-b border-gray-200`}>
        {open && <Image
          src={logo}
          alt="vrent logo"
          width={28}
          height={28} />}
        <button
          onClick={changeSidebarState}
          className="text-blue-900">
          {open && <TbLayoutSidebarLeftCollapse className="size-7"/>}
          {!open && <TbLayoutSidebarRightCollapse className="size-7"/>}
        </button>
      </div>
      <div className="py-5 px-2">
        <div className="flex flex-col gap-2">
          {menuList.map((menu, index) => 
          <Link
            key={index}
            href={menu.to}
            className={`flex gap-3 capitalize items-center ${open ? '' : 'justify-center'} px-3 py-3 ${menu.isCurrent ? 'bg-blue-900 text-white' : 'hover:bg-blue-50'} rounded-md`}>
            <menu.icon className="size-7"/>
            <span className={open ? "h-7 overflow-hidden" : "md:hidden"}>{menu.label}</span>
          </Link>
          )}
        </div>
      </div>
      <div className="w-full absolute bottom-0 p-5 border-t border-gray-200">
        <div className={`flex ${open ? 'justify-center md:justify-between' : 'justify-center'} items-center gap-2`}>
          <div className={open ? "h-10 overflow-hidden" : "md:hidden"}>
            <p>Wonwoo Jeon</p>
            <p className="text-sm">Super Admin</p>
          </div>
          <Link href="/logout" className="text-blue-900">
            <MdLogout className="size-7"/>
          </Link>
        </div>
      </div>
    </div>
  )
}