import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Copyright } from 'lucide-react'

function Footer() {
  return (
    <footer className=" bg-[#1A1A1A] text-[#E6F4FA] w-full pb-10">
      <div className="max-w-[1268px] w-full h-auto flex flex-col items-center justify-between mx-auto">
        <div className="flex justify-between md:flex-row flex-col md:gap-0 gap-6 w-full px-10 p-10">
          <div className="flex flex-col gap-2">
            <Link href="/">
              <Image src='/flexiconvert.svg' alt="logo" width={110} height={10} className='h-[80px] w-[100px]' />
            </Link>
            <p className="w-[197px] md:text-[32px] text-[24px] font-semibold">
              Flexiconvert
            </p>
          </div>
          <div className="flex flex-col items-start gap-6">
            <h3 className="text-xl font-semibold text-[#E6F0FA]">Product</h3>
            <ul className="transition ease-in-out delay-150 flex flex-col items-start text-base gap-4 cursor-pointer duration-300">
              <li>
                <Link
                  className="hover:text-[#4A90E2]"
                  href="/convert/pdf-to-png"
                >
                  PDF TO PNG
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#4A90E2]" href="/convert/jpeg-to-png">
                  JPEG TO PNG
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-[#4A90E2]"
                  href="/convert/file-compression"
                >
                  FILE COMPRESSION
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-[#4A90E2]"
                  href="/convert/mp4-to-mp3"
                >
                  MP4 TO MP3
                </Link>
              </li>

              <li>
                <Link className="hover:text-[#4A90E2]" href="/convert/docx-to-pdf">
                  DOCX TO PDF
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start gap-6">
            <h3 className="text-xl font-semibold text-[#E6F0FA]">Support</h3>
            <ul className="transition ease-in-out delay-150 flex flex-col items-start text-base gap-4 cursor-pointer duration-300">
              <li>
                <Link className="hover:text-[#4A90E2]" href="/#">
                  Resources
                </Link>
              </li>

              <li>
                <Link className="hover:text-[#4A90E2]" href="/#">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#4A90E2]" href="/about">
                  About Us
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#4A90E2]" href="/pricing">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start gap-6">
            <h3 className="text-xl font-semibold text-[#E6F0FA]">Legal</h3>
            <ul className="transition ease-in-out delay-150 flex flex-col items-start text-base gap-4 cursor-pointer duration-300">
              <li>
                <Link className="hover:text-[#4A90E2]" href="/#">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#4A90E2]" href="/#">
                  Terms and Condition
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className='w-full flex px-10'>
          <hr className="h-[0.5px] w-full bg-[#A9A9A9]" />
        </div>
        <div className="w-full flex justify-between md:items-center items-center p-5 px-10 md:flex-row flex-col md:gap-0 gap-2">
          <div className="flex ">
            <p className="text-base flex justify-center items-center gap-1 ">
              <Copyright />
              2024 All Rights Reserved
            </p>
          </div>
          <div className="hidden md:block">
            <ul className="transition ease-in-out delay-150 flex items-center gap-6 duration-300">
              <li>
                <Link className="hover:text-[#4A90E2]" href="/privacy-policy">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#4A90E2]" href="/terms">
                  Terms of Use
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer