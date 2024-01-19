"use client";

import React, { useState } from "react";
import Modal from "./Modal";
import FindLocationSvg from "../Svgs/FindLocationSvg";
import Image from "next/image";

const FindDistanceModal = () => {
  const [openDistanceModal, setOpenDistanceModal] = useState(false);
  return (
    <Modal
      modalOpener={
        <button className="h-11 flex gap-2 px-4 py-2 border border-[rgba(0,0,0,0.20)] rounded-full">
          <FindLocationSvg />
          <span>Find Distance</span>
        </button>
      }
      modalContent={
        <div className="flex flex-col px-5 py-4 min-w-[700px] min-h-[500px]">
          <div className="flex justify-between">
            <p className="text-themetext font-semibold">
              Find distance between two places
            </p>
            <button
              onClick={() => setOpenDistanceModal(false)}
              className="h-8 w-8 shadow-lg flex items-center justify-center"
            >
              <Image src="/svgs/cross.svg" width={20} height={20} />
            </button>
          </div>
          <div className="mt-7 px-5 py-4 w-full rounded-md border border-[#D6D6D6] h-16 flex justify-between">
            <input
              className="outline-none border-none w-full"
              type="search"
              name="locationsearch"
              id="locationsearch"
              placeholder="Type"
            />
            <Image src="/svgs/location2.svg" width={16} height={20} />
          </div>
          <div className="flex justify-between items-start mt-5 max-w-[70%]">
            <div className="flex gap-2 items-center">
              <div className="h-8 w-8 flex items-center justify-center shadow-md rounded-full">
                <Image src="/svgs/target.svg" width={19} height={19} />
              </div>
              <span className="font-semibold">My current location</span>
            </div>
            <div className="flex flex-col items-center justify-center mt-3">
              <Image src="/svgs/distanceline.svg" width={30} height={152} />
              <div className="flex gap-2 p-3 rounded-full w-[250px] shadow-md">
                <Image
                  className="rounded-full h-14 w-14"
                  src="/imgs/prop-1.png"
                  width={54}
                  height={54}
                />
                <div className="flex flex-col py-1 justify-between">
                  <p className="font-semibold">Boston Valley</p>
                  <p className="text-themetext text-xs">
                    alfazal market near kotli ajk
                  </p>
                </div>
              </div>
              <button className="bg-primary py-3 text-black rounded-full w-48 text-sm font-bold mt-8">
                View on Map
              </button>
            </div>
          </div>
        </div>
      }
      openModal={openDistanceModal}
      setOpenModal={setOpenDistanceModal}
    />
  );
};

export default FindDistanceModal;
