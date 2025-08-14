"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import ToolLink from "./ToolLink";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const pathname = usePathname();
  const toolsDropdownTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleToolsMouseEnter = () => {
    if (toolsDropdownTimeout.current) {
      clearTimeout(toolsDropdownTimeout.current);
    }
    setIsDropdownOpen(true);
  };

  const handleToolsMouseLeave = () => {
    toolsDropdownTimeout.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 300);
  };

  return (
    <div
      className={`fixed top-0 w-full z-50 bg-[#FFF] p-5 md:py-5 lg:px-14 md:px-5 gap-12 ${scrolled ? "bg-[#fff] shadow-md" : ""
        }`}
    >
      <div className="max-w-[1200px] mx-auto flex justify-between items-center">
        <Link href="/" className="flex gap-1 items-center">
          <Image src="/flexiconvert.svg" alt="logo" height={10} width={50} className="h-[30px] md:h-[40px] " />
          <h1 className=" text-2xl sm:text-3xl md:text-4xl font-semibold cursor-pointer">
            FlexiConvert
          </h1>
        </Link>

        {/* Desktop menu */}
        <nav className="hidden md:flex justify-between items-center gap-3 lg:gap-12 lg:text-lg md:text-sm">
          <Link
            href="/"
            className={`hover:text-[#4A90E2] ${pathname === "/" ? "text-[#4A90E2]" : ""
              }`}
          >
            Home
          </Link>
          <Link
            href="/pricing"
            className={`hover:text-[#4A90E2] ${pathname === "/pricing" ? "text-[#4A90E2]" : ""
              }`}
          >
            Pricing
          </Link>
          <Link
            onMouseEnter={handleToolsMouseEnter}
            onMouseLeave={handleToolsMouseLeave}
            href="/tools"
            className={`flex items-center hover:text-[#4A90E2] ${pathname === "/tools" ? "text-[#4A90E2]" : ""
              }`}
          >
            Tools <ChevronDown className="ml-1" />
          </Link>
          <Link
            href="/about"
            className={`hover:text-[#4A90E2] ${pathname === "/about" ? "text-[#4A90E2]" : ""
              }`}
          >
            About
          </Link>
        </nav>

        <div className="hidden md:flex md:gap-2 lg:gap-5 lg:text-lg md:text-sm">
          <Link
            href="/login"
            className="md:py-2 md:px-4 lg:py-3 lg:px-6 rounded-[32px] bg-[#F4F4F5] text-[#1A1A1A]"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="md:py-2 md:px-4 lg:py-3 lg:px-6 rounded-[32px] bg-[#4A90E2] text-white hover:bg-[#3A78BA]"
          >
            Sign Up
          </Link>
        </div>

        <button
          className="md:hidden flex items-center focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-8 h-8 text-gray-700"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <nav className="md:hidden mt-4 space-y-4 px-5">
          <Link
            href="/"
            onClick={() => setIsMenuOpen(false)}
            className={`block text-lg hover:text-[#4A90E2] ${pathname === "/" ? "text-[#4A90E2]" : ""
              }`}
          >
            Home
          </Link>
          <Link
            href="/pricing"
            onClick={() => setIsMenuOpen(false)}
            className={`block text-lg hover:text-[#4A90E2] ${pathname === "/pricing" ? "text-[#4A90E2]" : ""
              }`}
          >
            Pricing
          </Link>
          <Link
            href="/tools"
            onClick={() => setIsMenuOpen(false)}
            className={`block text-lg hover:text-[#4A90E2] ${pathname === "/tools" ? "text-[#4A90E2]" : ""
              }`}
          >
            Tools
          </Link>
          <Link
            href="/about"
            onClick={() => setIsMenuOpen(false)}
            className={`block text-lg hover:text-[#4A90E2] ${pathname === "/about" ? "text-[#4A90E2]" : ""
              }`}
          >
            About
          </Link>

          <div className="flex flex-col gap-3 mt-6">
            <Link
              href="/login"
              onClick={() => setIsMenuOpen(false)}
              className="py-2 px-4 rounded-[32px] bg-[#F4F4F5] text-center text-[#1A1A1A]"
            >
              Login
            </Link>
            <Link
              href="/signup"
              onClick={() => setIsMenuOpen(false)}
              className="py-2 px-4 rounded-[32px] bg-[#4A90E2] text-center text-white hover:bg-[#3A78BA]"
            >
              Get started
            </Link>
          </div>
        </nav>
      )}

      {
        isDropdownOpen && (
          <div onMouseEnter={handleToolsMouseEnter} onMouseLeave={handleToolsMouseLeave} className="md:grid md:justify-center absolute top-full left-0 w-full z-10">
            <ul className="list-none border-2 border-[#E6E6E6] md:border-[15px] py-[20px] px-[10px] md:px-[44px] bg-white rounded-[36px] grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-8 mt-3 w-full">
              <li>
                <ToolLink path="/png-to jpeg">
                  <p className="text-[0.75rem] md:text-[0.92rem] text-center text-pretty w-20 md:w-28">
                    PNG TO JPEG
                  </p>
                </ToolLink>
              </li>
              <li>
                <ToolLink path="/png-to-pdf">
                  <p className="text-[0.75rem] md:text-[0.92rem] text-center text-pretty w-20 md:w-28">
                    PNG TO PDF
                  </p>
                </ToolLink>
              </li>
              <li>
                <ToolLink path="/jpeg-to-svg">
                  <p className="text-[0.75rem] md:text-[0.92rem] text-center text-pretty w-20 md:w-24">
                    JPEG TO SVG
                  </p>
                </ToolLink>
              </li>
              <li>
                <ToolLink path="/pdf-to-jpeg">
                  <p className="text-[0.75rem] md:text-[0.92rem] text-center text-pretty w-20 md:w-24">
                    PDF TO JPEG
                  </p>
                </ToolLink>
              </li>
              <li>
                <ToolLink path="/mp4-to-mp3">
                  <p className="text-[0.75rem] md:text-[0.92rem] text-center text-pretty w-20 md:w-24">
                    MP4 TO MP3
                  </p>
                </ToolLink>
              </li>
              <li>
                <ToolLink path="/pdf-to-docx">
                  <p className="text-[0.75rem] md:text-[0.92rem] text-center text-pretty w-20 md:w-24">
                    PDF TO DOCX
                  </p>
                </ToolLink>
              </li>
            </ul>
          </div>
        )
      }
    </div>
  );
}

export default Navbar;
