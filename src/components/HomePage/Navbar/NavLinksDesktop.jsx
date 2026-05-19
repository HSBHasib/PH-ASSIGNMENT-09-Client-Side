import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLinksDesktop = ({ link }) => {
  const pathName = usePathname();
  return (
    <Link
      href={link.href}
      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
        pathName === link.href
          ? "bg-[#f0f7ff] text-[#1e73be]"
          : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"
      }`}
    >
      {link.name}
    </Link>
  );
};

export default NavLinksDesktop;
