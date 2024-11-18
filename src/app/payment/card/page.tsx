"use client";
import {useRouter} from 'next/navigation';
import Image from "next/image";
import React from "react";

export default function Page() {
  const router = useRouter();

  const nextPage = (url: string) => {
    router.push(url);
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <div className="absolute flex flex-row flex-grow items-center justify-between mx-8 mt-4">
        <Image
          className="h-[10vh] w-[8vh]"
          src="/png/menu/backbutton.png"
          alt="Back button"
          width={100}
          height={100}
          onClick={() => nextPage("/")}
        />
      </div>
      <div className="flex flex-col flex-grow items-center">
        <Image src="/png/payment/card.png" alt="card"
               width={600}
               height={600}
               onClick={() => nextPage("/end")}/>
      </div>
    </div>
  );
}