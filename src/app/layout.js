import { Toaster } from "react-hot-toast";
import "./globals.css";
import Navbar from "@/components/HomePage/Navbar/Navbar";

export const metadata = {
  title: "Doctor Appointment",
  description: "This is a best and smart doctor consultation website side in the bangladesh",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}

        <Toaster />
      </body>
    </html>
  );
}
