import { Manrope } from "next/font/google";
import Sidebar from "@/components/Navbars/Sidebar";
import Topbar from "@/components/Navbars/Topbar";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata = {
  title: "TD Property Management",
  description: "Created by Sinister",
};

export default function RootLayout({ children }) {
  return (
    <main className="flex h-full">
      {/* Sidebar */}
      <Sidebar />
      {/* Main page */}
      <div className="flex flex-col w-full">
        <Topbar />
        {children}
      </div>
    </main>
  );
}
