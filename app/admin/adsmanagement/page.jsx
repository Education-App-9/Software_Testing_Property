"use client";

import BackButton from "@/components/Buttons/BackButton";
import AdsTable from "@/components/Tables/AdsTable";
import { useRouter } from "next/navigation";


const AdsManagementPage = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col p-5 gap-3">
      <BackButton />
      <div className="flex justify-between mt-3">
        <h1 className="text-3xl font-bold">Ads Management</h1>
        <button
          className="border border-[rgba(0,0,0,0.4)] px-8 py-3 rounded-full font-semibold"
          onClick={() => router.push("/adsmanagement/adrequests")}
        >
          Ad Requests
        </button>
      </div>
      <AdsTable />
    </div>
  );
};

export default AdsManagementPage;
