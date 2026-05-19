import Banner from "@/components/HomePage/Banner";
import CareSection from "@/components/HomePage/CareSection";
import PatientReview from "@/components/HomePage/PatientReview";
import TopRatedDoctor from "@/components/HomePage/TopRatedDoctor";

export default function Home() {
  return (
    <div>
      <Banner />
      <TopRatedDoctor />
      <CareSection />
      <PatientReview />
    </div>
  );
}
