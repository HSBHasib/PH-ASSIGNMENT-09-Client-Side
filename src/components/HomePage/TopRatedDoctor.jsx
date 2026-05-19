import { getTopDoctorData } from "@/lib/frontendData";
import React from "react";
import DoctorCard from "./DoctorCard";


const TopRatedDoctor = async () => {
  const topDoctors = await getTopDoctorData();
  return (
    <section className="bg-white py-13 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Headings */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mt-3 mb-4">
            Top Rated Doctors
          </h2>
          <p className="text-base text-[#404750] font-normal max-w-lg mx-auto">
            Consult with our highest-rated medical professionals certified for
            exceptional family care.
          </p>
        </div>

        {/* Doctor Cards */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {
            topDoctors.map((doctor, idx) => <DoctorCard key={idx} doctor={doctor} />)
          }
        </div>
      </div>
    </section>
  );
};

export default TopRatedDoctor;
