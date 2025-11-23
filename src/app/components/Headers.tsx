"use client"

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react"

export default function Headers () {
  const pathname = usePathname()
  const [title, setTitle] = useState("");

  useEffect(() => {
    queueMicrotask(() => {
      const pageTitle = document.title.split(" - ")
      if (pageTitle[0]) {
        setTitle(pageTitle[0]);
      }
    });
  }, [pathname]);

  return (
    <div className="w-full p-5 bg-white border-y border-line">
      <h1 className="font-semibold capitalize text-lg">{title}</h1>
    </div>
  )
}