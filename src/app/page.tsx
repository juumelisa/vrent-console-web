"use client"
import Image from "next/image";
import backgroundHomepage from "@/app/assets/images/background-homepage.png"
import logo from "@/app/assets/images/logo.png"
import { FaCheck } from "react-icons/fa";
import { FormEvent, useState } from "react";
import Link from "next/link";
import { LuEye, LuEyeClosed } from "react-icons/lu";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()
  const [isRemember, setIsRemember] = useState<boolean>(false)
  const [showPassword, setShowPassword] = useState<boolean>(false)

  const changeRememberState = () => {
    const newValue = !isRemember
    setIsRemember(newValue)
  }

  const changePasswordState = () => {
    const newValue = !showPassword
    setShowPassword(newValue)
  }

  const submitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.target as HTMLFormElement
    const formData = new FormData(form)
    console.log(formData.get("password"))
    router.push('/console')
  }
  return (
    <div className="flex min-h-screen items-center justify-center bg-white font-sans">
      <main className="w-full flex">
        <div className="relative w-screen h-screen">
          <Image
              src={backgroundHomepage}
              alt="background"
              fill
              style={{objectFit: "cover"}}
              priority
            />
        </div>
        <div className="w-full h-full absolute top-0 bg-primary/50 flex justify-center items-center p-5">
          <div className="w-full max-w-lg bg-white p-5 rounded-lg flex flex-col items-center">
            <Image
              src={logo}
              alt="vrent logo"
              width={40}
              height={40}
              priority
            />
            <p className="font-semibold text-primary text-center">Welcome Back</p>
            <p>Sign in to access your account</p>
            <form
              onSubmit={submitForm}
              className="w-full flex flex-col gap-3">
              <div className="w-full">
                <label className="inline-block font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full border border-gray-200 rounded px-3 py-2 outline-0"
                  placeholder="Email" />
              </div>
              <div className="w-full">
                <label className="inline-block font-medium mb-1">
                  Password
                </label>
                <div className="relative w-full">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    required
                    className="w-full border border-gray-200 rounded px-3 py-2 outline-0"
                    placeholder="Password" />
                    <button
                      onClick={changePasswordState}
                      type="button"
                      className="text-primary absolute h-full px-2 right-0">
                      {showPassword && <LuEye />}
                      {!showPassword && <LuEyeClosed />}
                    </button>
                </div>
              </div>
              <button
                onClick={changeRememberState}
                type="button"
                className="flex gap-2 items-center">
                  <div className="w-4 h-4 border border-primary relative">
                    {isRemember && <FaCheck className="absolute size-5 text-primary -left-0.5 -top-1"/>}
                  </div>
                  <span>Remember Me</span>
              </button>
              <button
                type="submit"
                className="bg-primary text-white w-full rounded py-2">
                Sign in
              </button>
              <Link href="/forgot-password" className="text-center text-primary font-semibold">Forgot Password</Link>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
