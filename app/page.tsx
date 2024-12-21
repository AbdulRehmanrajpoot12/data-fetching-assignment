import React from "react";
import Link from "next/link";
import HeaderSection from "@/components/header/page";

export default function Home () {
  return(
    <div>
      <HeaderSection />
      
      <div className="flex items-center justify-center min-h-screen">
        <div className="flex flex-col bg-[#4ca1af] p-10 items-center justify-center rounded-xl gap-1">

          <h1 className="flex items-center justify-center font-bold gap-4">Data Fetching Website</h1>

          <p className="flex text-[16px]">Select how you'd like to fetch data!</p>

          <Link href="/server-side-data" className="mt-4 px-4 py-2 bg-white text-[#4ca1af] font-semibold rounded-md shadow-md hover:underline hover:bg-gray-100">
          Server-Side Data
          </Link>

          <Link href="/client-side-data" className="mt-4 px-4 py-2 bg-white text-[#4ca1af] font-semibold rounded-md shadow-md hover:underline hover:bg-gray-100">
          Client-Side Data
          </Link>
        </div>
      </div>
    </div>
  );
};