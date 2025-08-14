"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";

export default function ToolLink({
  children,
  path,
}: {
  children: ReactNode;
  path: string;
}) {
  const pathname = usePathname();
  return (
    <Link
      href={path}
      className={`flex md:flex-col items-center gap-3 rounded-sm p-2 transition duration-150 ease-in-out hover:bg-gray-100 hover:font-semibold hover:scale-105 active:scale-95 ${pathname === path && 'bg-gray-50'}`}
    >
      {children}
    </Link>
  );
}
