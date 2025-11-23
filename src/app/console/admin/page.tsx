import { Suspense } from "react";
import AdminPage from "./AdminPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin"
}

export default function Admin () {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AdminPage />
    </Suspense>
  )
}