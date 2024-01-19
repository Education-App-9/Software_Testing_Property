"use client";

import BackButton from "@/components/Buttons/BackButton";
import PrivilegesTable from "@/components/Tables/PrivilegesTable";
import { useRouter } from "next/navigation";


const PrivilegesPage = () => {
  const router = useRouter;
  return (
    <div className="flex flex-col p-5 gap-3">
      <BackButton />
      <div className="flex justify-between mt-3">
        <h1 className="text-3xl font-bold">Privileges</h1>
        
        <div className="flex gap-2">
          <button
            className="border border-[rgba(0,0,0,0.4)] px-8 py-3 rounded-full font-semibold"
            onClick={() => router.push("/privileges/assignrole")}
          >
            Assign Role
          </button>
          <button
            className="bg-primary px-8 py-3 rounded-full font-semibold"
            onClick={() => router.push("/privileges/createrole")}
          >
            + Create Role
          </button>
        </div>
      </div>
      <span style={{marginTop:'-2%'}}>
        Find all of your company’s administrator accounts and their associate Priviligies.
      </span>
      
      <PrivilegesTable />
    </div>
  );
};

export default PrivilegesPage;
