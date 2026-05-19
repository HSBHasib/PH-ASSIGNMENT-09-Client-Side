import React from 'react'
import Link from 'next/link'
import { HiOutlineExclamationCircle } from 'react-icons/hi'

const NotFoundPage = () => {
  return (
    <div className="flex-1 bg-gray-50 flex flex-col items-center justify-center px-4 text-center">
      
      <div className="max-w-md space-y-3">
        <div className="flex justify-center text-[#1e73be]">
          <HiOutlineExclamationCircle size={60} className="animate-pulse" />
        </div>

        <div className="space-y-1.5">
          <h1 className="text-5xl sm:text-6xl font-black text-[#1e73be] tracking-tight">
            404
          </h1>
          <h2 className="text-2xl font-bold text-[#191C20] tracking-tight">
            Page Not Found
          </h2>
          <p className="text-xs sm:text-sm text-[#404750] font-medium max-w-sm mx-auto leading-relaxed">
            The medical specialist profile or appointment page you are looking for doesn't exist or has been relocated.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row gap-3 items-center justify-center">
          <Link href="/" className="w-full sm:w-auto">
            <button className="w-full bg-[#1e73be] hover:bg-[#165a94] text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-xl transition-all duration-300 active:scale-95 shadow-sm">
              Back to Home
            </button>
          </Link>

          <Link href="/all-appointments" className="w-full sm:w-auto">
            <button className="w-full bg-slate-50 hover:bg-slate-100 text-[#191C20] text-xs sm:text-sm font-semibold px-6 py-3 rounded-xl border border-slate-200/60 transition-all duration-300 active:scale-95">
              Find Appointments
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFoundPage

