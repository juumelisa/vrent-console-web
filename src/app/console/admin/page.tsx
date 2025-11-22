"use client"
import Image from "next/image"
import { useEffect, useState } from "react"

type Admin = {
  id: string,
  name: string,
  email: string,
  profile_picture: string | null
}

export default function Admin () {
  const [admins, setAdmins] = useState<Admin[]>([])

  useEffect(() => {
    const fetchAdminList = async() => {
      const res = await fetch('/api/admin/list')
      const rest = await res.json()
      if (rest.code === 200) {
        const result: Admin[] = rest.result
        const tempAdmin: Admin[] = []
        result.forEach((admin, index: number) => {
          const obj: Admin = {
            id: admin.id,
            name: admin.name ?? "-",
            email: admin.email ?? "-",
            profile_picture: admin.profile_picture ?? null
          }
          tempAdmin[index] = obj
        })
        setAdmins(tempAdmin)
      } else {
        console.log('error')
      }
    }
    fetchAdminList()
  }, [])

  return (
    <div className="bg-white p-5">
      <table className="w-full border border-line">
        <thead className="bg-gray-100 border-b border-line">
          <tr>
            <th className="p-4 font-semibold text-left">No</th>
            <th className="p-4 font-semibold text-left">Profile</th>
            <th className="p-4 font-semibold text-left">Name</th>
            <th className="p-4 font-semibold text-left">Email</th>
          </tr>
        </thead>
        <tbody>
          {admins.map((admin, index) =>
            <tr key={admin.id} className="border-b border-line hover:bg-gray-50">
              <td className="px-4 py-3">{index + 1}.</td>
              <td className="px-4 py-3">
                <div className="w-12 h-12 relative">
                  <Image
                    src={admin.profile_picture || "https://res.cloudinary.com/dme13qwgd/image/upload/v1759140504/VRent/1759140496555.jpg"}
                    fill
                    alt={admin.name}
                    className="object-cover rounded-full" />
                </div>
              </td>
              <td className="px-4 py-3">{admin.name}</td>
              <td className="px-4 py-3">{admin.email}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}