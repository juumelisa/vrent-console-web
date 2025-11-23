"use client"
import { fetchWithToken } from "@/app/lib/fetchWithToken"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function Logout () {
  const router = useRouter()
  useEffect(() => {
    const logOut = async () => {
      await fetchWithToken('/api/auth/logout', {
        method: 'post'
      })
      localStorage.removeItem("user_id")
      router.push("/")
    }
    logOut()
  })
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-10 h-10 border-4 border-primary border-b-primary/20 rounded-full animate-spin"></div>
    </div>
  )
}