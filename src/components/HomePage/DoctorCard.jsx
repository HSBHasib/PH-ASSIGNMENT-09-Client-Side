import React from "react";
import Image from "next/image";
import {
  HiOutlineHashtag,
  HiOutlineLocationMarker,
  HiStar,
} from "react-icons/hi";
import Link from "next/link";

const DoctorCard = ({ doctor }) => {
  const {
    _id,
    image,
    name,
    rating,
    specialty,
    experience,
    hospital,
    location,
    fee,
  } = doctor;
  return (
    <div>
      <div
        className="bg-white rounded-2xl shadow hover:shadow-lg flex flex-col justify-between overflow-hidden transition-all duration-300 group"
      >
        <div>
          {/* Image and Rating div */}
          <div className="relative aspect-4/3 bg-gray-50 overflow-hidden">
          
            <Image
              src={image}
              alt={name}
              width={700}
              height={700}
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
              sizes="(max-w-768px), 100vw, 33vw"
            />
            <div className="absolute top-3 right-3 bg-white/50 backdrop-blur-xs px-2.5 py-1.5 rounded-lg flex items-center gap-1 shadow-sm">
              <HiStar className="w-4 h-4 text-amber-400" />
              <span className="text-xs font-bold text-slate-800">{rating}</span>
            </div>
          </div>

          <div className="px-5 space-y-2">
            <div>
              <p className="text-start mt-3 mb-1 w-fit text-xs font-semibold text-[#00a896] bg-[#00a896]/5 px-3 py-1 rounded-md">
                {specialty}
              </p>
              <h3 className="text-start text-lg font-bold text-[#191C20] group-hover:text-[#1e73be] transition-colors">
                {name}
              </h3>
            </div>

            <div className="space-y-2.5 pt-1 border-t border-slate-50 text-xs text-[#404750]">
              <div className="flex items-center gap-2">
                <HiOutlineHashtag className="w-4 h-4 text-[#404750]" />
                <span>
                  Experience:{" "}
                  <strong className="text-[#191C20] font-bold">
                    {experience}
                  </strong>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <HiOutlineLocationMarker className="w-4 h-4 text-[#404750]" />
                <span className="truncate">
                  {hospital}, {location}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="px-5 pt-6 pb-5">
          <div className="pt-5 border-t border-gray-200 flex items-center justify-between">
            <div className="flex flex-col items-start">
              <span className="block text-[10px] uppercase font-bold text-[#404750] tracking-wider">
                Consultation Fee
              </span>
              <span className="text-lg font-bold text-slate-900">{fee}TK</span>
            </div>

            <Link href={`doctorDetails/${_id}`}>
            <button className="bg-[#1e73be] hover:bg-[#165a94] text-white text-xs font-medium px-4 py-2.5 rounded-xl shadow-md shadow-blue-500/5 hover:shadow-blue-500/10 active:scale-95 transition-all duration-300">
              View Details
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;

