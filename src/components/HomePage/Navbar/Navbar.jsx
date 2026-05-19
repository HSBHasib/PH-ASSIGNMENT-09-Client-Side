"use client";

import React, { useState } from "react";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";
import Image from "next/image";
import NavLinksDesktop from "./NavLinksDesktop";
import NavLinksMobile from "./NavLinksMobile";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { id: 1, name: "Home", href: "/" },
    { id: 2, name: "All Appointments", href: "/all-appointments" },
    { id: 3, name: "Dashboard", href: "/dashboard" },
  ];
  return (
    <nav className="bg-white border-b border-slate-100 sticky top-0 z-50">
      {/* Desktop Device */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/assets/logo.png"
              alt="DocAppoint_Logo"
              width={400}
              height={400}
              className="h-auto w-16 object-contain"
            />
            <span className="text-xl font-bold text-slate-900 tracking-tight">
              DocAppoint
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <NavLinksDesktop key={link.id} link={link} />
            ))}
          </div>

          <div className="hidden md:flex items-center gap-2">
            <Link
              href="/login"
              className="text-sm font-semibold text-slate-700 px-5 py-2.5 transition-all hover:text-slate-900 rounded-lg hover:bg-[#f0f7ff]"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="bg-[#1e73be] hover:bg-[#165a94] text-white text-sm font-semibold px-5 py-2.5 rounded-lg shadow-sm transition-all duration-200"
            >
              Register
            </Link>
          </div>

          {/* Mobile Device Menu Icon */}
          <div className="flex items-center md:hidden gap-3">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-600 hover:bg-slate-50 focus:outline-none"
            >
              {isOpen ? (
                <HiX className="w-6 h-6" />
              ) : (
                <HiMenu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Device */}
      <div
        className={`fixed top-0 right-0 h-full w-60 max-w-[85vw] bg-white/93 border-l border-slate-200/50 p-5 flex flex-col justify-between transition-all duration-300 z-50 shadow-[0_0_30px_rgba(0,0,0,0.1)] ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div>
          <div className="flex justify-between items-center pb-3 border-b border-slate-200">
            <span className="text-lg font-bold text-slate-900">Menu</span>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-full text-slate-500 hover:text-slate-800 bg-slate-100/50 hover:bg-slate-200/50 transition-all"
            >
              <HiX className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-1 mt-4">
            {navLinks.map((link) => (
              <NavLinksMobile key={link.id} link={link} />
            ))}
          </div>
        </div>

        <div className="space-y-0 pt-6 border-t border-slate-200/30 flex items-center gap-3">
          <Link
            href="/login"
            onClick={() => setIsOpen(false)}
            className="flex-1 active:scale-95 bg-slate-100 hover:bg-slate-200 text-center font-bold text-slate-700 py-3 rounded-xl transition-all text-sm border border-slate-200/60"
          >
            Login
          </Link>
          <Link
            href="/register"
            onClick={() => setIsOpen(false)}
            className="flex-1 active:scale-95 text-center font-bold bg-[#1e73be] hover:bg-[#165a94] text-white py-3 rounded-xl shadow-lg shadow-blue-500/10 transition-all duration-200 text-sm"
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
