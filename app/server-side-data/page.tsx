import React from "react";
import HeaderSection from "@/components/header/page";
interface ssrData {
  id: number;
  name: string;
  type: string;
  available: boolean;
}

const serverfetch = async () => {

  const answer = await fetch("https://simple-books-api.glitch.me/books/");

  const parsedAnswer: ssrData[] = await answer.json();

  return (
    <div>
      <HeaderSection/>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-3 p-8">
        {parsedAnswer.map((Answer, index)=> (
          <div>
            <div key={index} className="bg-[#4ca1af] rounded-lg gap-2 p-4 text-[14px] lg:text-[18px] font-semibold space-y-3 transition-transform transform hover:scale-105 lg:hover:scale-95 hover:bg-[#388087] hover:shadow-lg">
              <p>Id: {Answer.id}</p>
              <p>Name: {Answer.name}</p>
              <p>Type: {Answer.type}</p>
              <p>
                Available:<span className={Answer.available ? "text-green-500" : "text-red-500"}>
                  {`${Answer.available}`}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default serverfetch;