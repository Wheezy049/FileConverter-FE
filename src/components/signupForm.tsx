"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { EyeIcon, EyeOff } from 'lucide-react'
import Image from 'next/image';

function SignupForm() {

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [errMsg, setErrMsg] = useState("")

  return (
    <>
      <div className="flex flex-col justify-center items-center bg-background w-fit mx-auto">
        <div className="w-full max-w-[30rem] bg-card rounded p-6">
          <h1 className="text-[1.75rem] leading-[2.25rem] font-semibold mb-4 text-center">
            Sign Up
          </h1>
          <p className="text-[1.25rem] text-pretty leading-[2.75rem] text-center text-[#4B4B4B]">
            Create an account to get started with us.
          </p>
          <div className="mt-4 flex items-center gap-2 flex-col md:flex-row">
            <div
              className="w-full py-2 px-4 rounded text-nowrap border-[1px] border-[#CBD5E1] flex items-center gap-2 justify-center"
            >
              <Image src="/google.svg" alt="google logo" width={24} height={24} />
              <button className="text-[1rem] leading-6 text-black">
                Sign up with Google
              </button>
            </div>
          </div>
          <div className="flex items-center gap-4 mt-6">
            <span className="border-b-[1px] w-[50%] border-[#CBD5E1]"></span>
            <span className="font-bold text-[0.875rem] leading-5 uppercase">
              or
            </span>
            <span className="border-b-[1px] w-[50%] border-[#CBD5E1]"></span>
          </div>
          <form className="flex flex-col gap-2 mt-2">
            <div>
              <label
                className="block text-foreground mb-1 text-[1.25rem] leading-[2.75rem]"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="text"
                id="email"
                className={`w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#4A90E2] text-[1.125rem] leading-[1.75rem] ${errMsg && "focus:ring-red-600"
                  } focus:border-transparent`}
                placeholder="Enter your email address"
              />
            </div>
            <div>
              <label
                className="block text-foreground mb-1 text-[1.25rem] leading-[2.75rem]"
                htmlFor="password"
              >
                Password
              </label>
              <div className="relative z-0">
                <input
                  type={passwordVisible ? "text" : "password"}
                  id="password"
                  className={`w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#4A90E2] text-[1.125rem] leading-[1.75rem] ${errMsg && "focus:ring-red-600"
                    } focus:border-transparent`}
                  placeholder="Enter your password"
                />
                <div
                  className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                  onClick={() => setPasswordVisible(!passwordVisible)}
                >
                  {passwordVisible ? (
                    <EyeIcon color="#A9A9A9" />
                  ) : (
                    <EyeOff color="#A9A9A9" />
                  )}
                </div>
              </div>
            </div>
            {errMsg && <p className="text-red-500 h-1 w-fit text-sm mt-1 font-semibold">
              {errMsg}
            </p>}
            <div className="mt-3 w-full">
              <div className="flex w-full justify-between mt-3 mb-6">
                <span className="cursor-pointer font-medium opacity-80 hover:opacity-100 transition-opacity duration-150 ease-in-out">
                  <input type="checkbox" name="remember me" />
                  <span className="ml-2 text-[1rem] leading-6 text-[#525252] hover:text-[#3A78BA]">
                    I agree to the terms and conditions
                  </span>
                </span>
              </div>
              <button className="w-full flex justify-center items-center bg-[#4A90E2] text-white py-2 rounded hover:bg-[#3A78BA] hover:opacity-95">Create Account</button>
              <p className="text-center mt-4 text-[#525252] text-[0.85rem] ">
                Already have an account ?{" "}
                <Link
                  href="/login"
                  className="text-[#4A90E2] hover:text-[#3A78BA] font-semibold text-[1rem] leading-5"
                >
                  Log in
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default SignupForm