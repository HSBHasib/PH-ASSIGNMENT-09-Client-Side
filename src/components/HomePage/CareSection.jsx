import React from 'react';
import { UserCheck, Calendar, ShieldCheck } from 'lucide-react';

const CareSection = () => {
  const services = [
    {
      id: 1,
      title: "Select Your Provider",
      description: "Browse our directory of verified medical specialists tailored to your specific health requirements.",
      icon: <UserCheck className="w-6 h-6 text-cyan-600" />,
    },
    {
      id: 2,
      title: "Seamless Scheduling",
      description: "Instant booking for virtual or in-person consultations with automated reminders and flexible rescheduling.",
      icon: <Calendar className="w-6 h-6 text-emerald-600" />,
    },
    {
      id: 3,
      title: "Coordinated Care",
      description: "Access digital prescriptions, lab results, and follow-up care all within a secure patient portal.",
      icon: <ShieldCheck className="w-6 h-6 text-blue-600" />,
    }
  ];
  return (
    <section className="bg-[#F0F7FF] px-4 sm:px-6 lg:px-8 py-15">
      <div className="max-w-6xl mx-auto text-center mb-14">
        <h2 className="text-3xl font-bold text-[#191C20] sm:text-4xl mb-3">
          Efficient Care for Busy Families
        </h2>
        <p className="text-[17px] text-[#404750] font-normal max-w-2xl mx-auto">
          Simple steps to access high-quality medical expertise.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        {services.map((service) => (
          <div
            key={service.id}
            className={`bg-white p-8 rounded-xl shadow-sm flex flex-col items-center text-center hover:border-[1.4px] hover:border-t-[3.5px] hover:border-[#1A6FA8] hover:ring-4 hover:ring-emerald-500/5 hover:scale-105 border border-slate-100 transition-all duration-500`}
          >
            <div className={`p-4 rounded-xl mb-6 flex items-center justify-center ${
              service.isFeatured ? 'bg-emerald-50' : 'bg-slate-50'
            }`}>
              {service.icon}
            </div>

            <h3 className="text-xl font-semibold text-[#191C20] mb-2.5">
              {service.title}
            </h3>

            <p className="text-sm leading-relaxed font-normal text-[#404750]">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CareSection
