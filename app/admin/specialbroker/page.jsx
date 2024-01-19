"use client";

import BackButton from "@/components/Buttons/BackButton";
import SpecialBrokerTable from "@/components/Tables/SpecialBrokerTable";
import { useRouter } from "next/navigation";


const SpecialBrokerPage = () => {
  const router = useRouter;
  return (
    <div className="flex flex-col px-10 py-5 gap-3">
      <div className="flex justify-between mt-3">
        <h1 className="text-3xl font-bold">Special Broker</h1>
        <button className="bg-primary px-8 py-3 rounded-full font-semibold text-sm">
          + Assign Special Broker
        </button>
      </div>
      <SpecialBrokerTable />
    </div>
  );
};

export default SpecialBrokerPage;
