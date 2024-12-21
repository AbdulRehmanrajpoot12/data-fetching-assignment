"use client";
import React, { useState } from "react";

const HeaderSection = () => {

    const [isClick, setisClick] = useState(false);

    const toggleNavbar = () => {
        setisClick(!isClick)
    }

  return (
    <div className="bg-[#4ca1af]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
                <div className="flex items-center">
                    <div className="flex-shrink-0">
                        <h2 className="text-[26px] font-bold">Fetchify</h2>
                    </div>
                </div>

                <div className="hidden md:block">
                    <div className="ml-4 flex items-center space-x-4">
                        <a href="/server-side-data" className="hover:bg-[#f5f5f5] hover:text-black rounded-lg p-2 font-semibold">
                            Server-Side
                        </a>

                        <a href="/client-side-data" className="hover:bg-[#f5f5f5] hover:text-black rounded-lg p-2 font-semibold">
                            Client-Side
                        </a>
                    </div>
                </div>

                <div className="md:hidden flex items-center">
                    <button className="inline-flex items-center justify-centern p-2 rounded-md hover:text-black" 
                    onClick={toggleNavbar}>
                        {isClick ? (
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 50 50">
                                <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"/>
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 50 50">
                                <path d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"/>
                            </svg>
                        )}
                    </button>
                </div>
            </div>
        </div>
        {isClick && (
            <div className="md:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a href="/server-side-data" className="hover:bg-[#f5f5f5] hover:text-black block rounded-lg p-2 font-semibold">
                            Server-Side
                        </a>

                        <a href="/client-side-data" className="hover:bg-[#f5f5f5] hover:text-black block rounded-lg p-2 font-semibold">
                            Client-Side
                        </a>
                </div>
            </div>
        )}
    </div>
  );
};

export default HeaderSection;