"use client"

import { useGlobalStore } from "@/store/useGlobalStore";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react"
import { MdLogout, MdOutlineSettings } from "react-icons/md";

export default function Headers () {
  const pathname = usePathname()
  const router = useRouter()
  const [title, setTitle] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  const user = useGlobalStore((s) => s.user)
  const setLoad = useGlobalStore((s) => s.setLoad)
  const ref = useRef<HTMLDivElement>(null);
  const cssRole: Record<string, string> = {
    "super admin": "text-green-600 bg-green-600/10",
    "admin": "text-blue-600 bg-blue-600/10",
    "staff": "text-indigo-600 bg-indigo-600/10"
  }
  useEffect(() => {
    queueMicrotask(() => {
      const pageTitle = document.title.split(" - ")
      if (pageTitle[0]) {
        setTitle(pageTitle[0]);
      }
    });

    function handleClick(e: PointerEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setShowMenu(false);
      }
    }
    document.addEventListener("pointerdown", handleClick);
  }, [pathname]);

  const changeMenuState = () => {
    const newState = !showMenu
    setShowMenu(newState)
  }
  const goToo = (path: string) => {
    setLoad(true)
    router.push(path)
  }
  return (
    <div className="w-full px-5 py-3 bg-white border-y border-line flex justify-between items-center">
      <h1 className="font-semibold capitalize text-lg">{title}</h1>
      <div ref={ref} className="relative">
        <button onClick={changeMenuState} className="relative w-10 h-10">
          {user?.profile_picture &&
            <Image
              src={user.profile_picture}
              alt={user.name}
              fill
              className="object-cover rounded-full" />
          }
        </button>
        <div
          className={`
            w-52 absolute right-0 z-50 overflow-hidden transition-all duration-300 ease-in-out
            ${showMenu ? "max-h-44 opacity-100" : "max-h-0 opacity-0"}
          `}
        >
          <div className="bg-white rounded border border-line">
            <div className="capitalize border-b border-line p-3 text-center">
              <p className="font-semibold truncate">{user?.name}</p>
              <div className="flex justify-center">
                {user?.role && <p className={`px-2 text-sm font-semibold ${cssRole[user.role]}`}>{user.role}</p>}
              </div>
            </div>
            <div>
              <button onClick={() => goToo("/settings")} className="flex items-center gap-2 hover:bg-gray-100 p-3">
                <MdOutlineSettings className="size-6"/>
                <span>Setting</span>
              </button>
              <button onClick={() => goToo("/logout")} className="w-full flex items-center gap-2 hover:bg-gray-100 p-3">
                <MdLogout className="size-6"/>
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}