"use client"
import AddAdmin from "@/app/components/Admin/Add"
import Image from "next/image"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { ChangeEvent, useEffect, useState } from "react"
import { BiFilter } from "react-icons/bi"

type Admin = {
  id: string,
  name: string,
  email: string,
  profile_picture: string | null,
  role: string,
  cssRole: string
}

export default function AdminPage () {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const q = searchParams.get("q") ?? ""
  const [admins, setAdmins] = useState<Admin[]>([])
  const [search, setSearch] = useState<string>(q)
  const cssRole: Record<string, string> = {
    "super admin": "text-green-600 bg-green-600/10",
    "admin": "text-blue-600 bg-blue-600/10",
    "staff": "text-indigo-600 bg-indigo-600/10"
  }
  useEffect(() => {
    let url = "/api/admin"
    const fetchAdminList = async() => {
      const params = new URLSearchParams(searchParams.toString());
      url += `?${params.toString()}`
      const res = await fetch(url)
      const rest = await res.json()
      if (rest.code === 200) {
        const result: Admin[] = rest.result
        const tempAdmin: Admin[] = []
        result.forEach((admin, index: number) => {
          const obj: Admin = {
            id: admin.id,
            name: admin.name ?? "-",
            email: admin.email ?? "-",
            profile_picture: admin.profile_picture ?? null,
            role: admin.role,
            cssRole: cssRole[admin.role] ? cssRole[admin.role] : ""
          }
          tempAdmin[index] = obj
        })
        setAdmins(tempAdmin)
      } else {
        console.log('error')
      }
    }
    fetchAdminList()
  }, [searchParams])

  const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearch(value)
    const params = new URLSearchParams(searchParams.toString());
    params.set("q", value)
    router.replace(`${pathname}?${params.toString()}`);
  }
  return (
    <div>
      <div className="flex justify-end mb-5 gap-3">
        <button className="px-5 py-2 border border-line bg-white flex gap-2 items-center">
          <BiFilter size={24}/>
          Filter
        </button>
        {/* <button className="text-white bg-primary px-5 py-2 rounded">+ Add Administrator</button> */}
        <AddAdmin />
      </div>
      <div className="w-full rounded-xl p-5 bg-white mb-5 border border-line">
        <p className="font-semibold">Filter</p>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5">
          <input
            value={search}
            onChange={onChangeSearch}
            placeholder="Search Admin..."
            className="w-full border border-line px-3 py-2 rounded-lg outline-0" />
        </div>
      </div>
      <table className="hidden md:inline-table w-full overflow-hidden border-separate border-spacing-0">
        <thead>
          <tr className="rounded-xl0 text-white">
            <th className="p-4 font-semibold text-left rounded-tl-xl bg-primary">No</th>
            <th className="p-4 font-semibold text-left bg-primary">Profile</th>
            <th className="p-4 font-semibold text-left bg-primary">Name</th>
            <th className="p-4 font-semibold text-left bg-primary">Email</th>
            <th className="p-4 font-semibold text-left rounded-tr-xl bg-primary">Role</th>
          </tr>
        </thead>
        <tbody>
          {admins.map((admin, index) =>
            <tr key={admin.id} className={`hover:bg-gray-50 bg-white ${index < admins.length - 1 ? 'border-b border-line' : 'rounded-b-xl'}`}>
              <td className={`px-4 py-3 border-b border-l border-line ${index == admins.length - 1 ? 'rounded-bl-xl' : ''}`}>{index + 1}.</td>
              <td className="px-4 py-3 border-b border-line">
                <div className="w-12 h-12 relative">
                  <Image
                    src={admin.profile_picture || "https://res.cloudinary.com/dme13qwgd/image/upload/v1759140504/VRent/1759140496555.jpg"}
                    fill
                    alt={admin.name}
                    className="object-cover rounded-full" />
                </div>
              </td>
              <td className="px-4 py-3 border-b border-line capitalize">{admin.name}</td>
              <td className="px-4 py-3 border-b border-line">{admin.email}</td>
              <td className={`px-4 py-3  border-b border-r border-line capitalize ${index == admins.length - 1 ? 'rounded-br-xl' : ''}`}>
                <div className="w-full flex">
                  <p className={`${admin.cssRole} px-2 py-1 rounded text-sm font-semibold`}>{admin.role}</p>
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}