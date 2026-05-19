import React from "react";
import { getAllDoctorData } from "@/lib/frontendData";
import DoctorCard from "@/components/HomePage/DoctorCard";
import SearchBar from "@/components/HomePage/SearchBar";

const AllAppointmentsPage = async ({searchParams}) => {
  
  const searching = await searchParams;
  const searchResult = searching?.search || "";
  
  const allDoctors = await getAllDoctorData(searchResult);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-7 ">
      {/* Heading */}
      <div className="space-y-1.5 flex flex-col items-center text-center w-full">
        <h1 className="text-2xl sm:text-3xl font-bold text-[#191C20] tracking-tight">
          Available Appointments
        </h1>
        <p className="text-xs sm:text-sm text-[#404750]">
          Find and book top-rated verified medical specialists instantly.
        </p>
        <>
          <SearchBar searchResult={searchResult} />
        </>
      </div>


      {/* All Appointments Card */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {allDoctors.map((doctor, idx) => (
          <DoctorCard doctor={doctor} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default AllAppointmentsPage;
