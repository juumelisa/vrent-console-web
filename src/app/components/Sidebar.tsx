"use client"
import Image from "next/image"
import logo from "@/app/assets/images/logo.png"
import { TbLayoutSidebarLeftCollapse, TbLayoutSidebarRightCollapse } from "react-icons/tb"
import { useEffect, useState } from "react"
import Link from "next/link"
import { MdDirectionsCar, MdDvr, MdLogout, MdOutlineAdminPanelSettings, MdOutlineDashboard, MdOutlinePeople } from "react-icons/md"
import { usePathname, useRouter } from "next/navigation"
import { useGlobalStore } from "@/store/useGlobalStore";

export default function Sidebar () {
  const currentPath = usePathname()
  const router = useRouter()
  const [open, setOpen] = useState<boolean>(false)
  const user = useGlobalStore((s) => s.user)
  const setUser = useGlobalStore((s) => s.setUser)
  // const userId = localStorage.getItem("user_id")
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
      isCurrent: currentPath?.startsWith('/console/vehicles')
    },
    {
      label: 'transaction',
      to: '/console/transaction',
      icon: MdDvr,
      isCurrent: currentPath?.startsWith('/console/transaction')
    },
    {
      label: 'customers',
      to: '/console/customers',
      icon: MdOutlinePeople,
      isCurrent: currentPath?.startsWith('/console/customers')
    },
    {
      label: 'admin',
      to: '/console/admin',
      icon: MdOutlineAdminPanelSettings,
      isCurrent: currentPath?.startsWith('/console/admin')
    }
  ]

  useEffect(() => {
    const getUserInfo = async () => {
      const res = await fetch("/api/user", {
        method: "GET"
      })
      const data = await res.json()
      if (data) {
        if (data.code === 200) {
          const result = data.result[0]
          setUser(result)
        } else if (data.code === 401) {
          router.push("/logout")
        } else {
          console.log("error")
        }
      } else {
        console.log("error")
      }
    }
    if (!user) {
      getUserInfo()
    }
  })
  const changeSidebarState = () => {
    const newValue = !open
    setOpen(newValue)
  }
  const changeRoute = (to: string) => {
    if (window.innerWidth < 1024) {
      setOpen(false)
    }
    router.push(to)
  }
  
  return (
    <div className={`absolute lg:relative w-full ${open ? 'lg:max-w-60' : 'lg:max-w-20'} lg:h-full transition-all duration-500 border-r border-gray-200`}>
      <div className={`relative z-40 flex flex-row-reverse lg:flex-row justify-between ${open ? '' : 'lg:justify-center'} p-6 bg-white`}>
        <div className="lg:hidden"/>
        <div
          className={`${open ? '' : 'lg:hidden'} flex gap-1 items-center text-primary`}>
          <Image
            src={logo}
            alt="vrent logo"
            width={28}
            height={28} />
            <p className="font-semibold">vrent</p>
        </div>
        <button
          onClick={changeSidebarState}
          className="text-primary cursor-pointer">
          {open && <TbLayoutSidebarLeftCollapse className="size-7"/>}
          {!open && <TbLayoutSidebarRightCollapse className="size-7"/>}
        </button>
      </div>
      <div className={`absolute z-30 top-0 pt-19 h-screen lg:h-full flex transition-discrete duration-500 w-full ${open ? 'left-0' : '-left-full lg:left-0'}`}>
        <div className="w-60 min-w-60 lg:min-w-full lg:w-full h-full relative bg-white">
          <div className="py-5 px-3">
            <div className="flex flex-col gap-2">
              {menuList.map((menu, index) => 
              <button
                onClick={() => changeRoute(menu.to)}
                key={index}
                className={`cursor-pointer flex gap-3 capitalize items-center ${open ? '' : 'lg:justify-center'} px-3 py-3 ${menu.isCurrent ? 'bg-linear-to-r from-primary to-blue-400 text-white' : 'hover:bg-blue-50'} rounded-md`}>
                <menu.icon className="size-7"/>
                <span className={open ? "overflow-hidden" : "lg:hidden"}>{menu.label}</span>
              </button>
              )}
            </div>
          </div>
        </div>
        <div onClick={changeSidebarState} className="w-full h-full bg-black/10 lg:hidden" />
      </div>
    </div>
  )
}