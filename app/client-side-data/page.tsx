"use client";
import React, { useEffect, useState } from "react";
import HeaderSection from "@/components/header/page";
import Image from "next/image";

interface csrData {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const ClientData = () => {
  const [inloading, setinLoading] = useState(false);
  const [indata, setinData] = useState<csrData[]>([]);
  const [error, setError] = useState<string | null>(null); // Add error state

  useEffect(() => {
    const fetchData = async () => {
      setinLoading(true);
      setError(null); // Reset error state before fetching
      try {
        const solution = await fetch("https://fakestoreapi.com/products");
        if (!solution.ok) {
          throw new Error(`Failed to fetch: ${solution.statusText}`);
        }
        const parsedSolution: csrData[] = await solution.json();
        console.log("Client-Side Data", parsedSolution);
        setinData(parsedSolution);
      } catch (error) {
        setError("Error fetching data. Please try again later."); // Set error message
        console.error("Error fetching data:", error);
      } finally {
        setinLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {inloading ? (
        <div className="flex items-center justify-center min-h-screen text-[18px] font-semibold">
          <p>Loading ....</p>
        </div>
      ) : error ? (
        <div className="flex items-center justify-center min-h-screen text-[18px] font-semibold text-red-500">
          <p>{error}</p> {/* Display error message */}
        </div>
      ) : (
        <div>
          <HeaderSection />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-8">
            {indata.map((solution , index) => (
              <div
                key={index}
                className="bg-[#4ca1af] rounded-lg p-4 text-[14px] lg:text-[18px] font-semibold text-white space-y-3 transition-transform transform hover:scale-105 hover:bg-[#388087] hover:shadow-lg">
                <Image
                  src={solution.image}
                  width={200}
                  height={200}
                  alt={solution.title}
                  className="w-full h-40 object-contain mt-2"
                  priority
                />
                <p className="text-[20px] underline">{solution.title}</p>
                <p>Category: {solution.category}</p>
                <p>Price: ${solution.price}</p>
                <p>Description: <span className="text-[14px]">{solution.description}</span></p>
                <p>
                  Rating: {solution.rating.rate} ({solution.rating.count} reviews)
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ClientData;
