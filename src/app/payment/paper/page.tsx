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
      <div className="absolute size-2/6 mt-2">
        <Image
          className="ml-6"
          src="/png/menu/backbutton.png"
          alt="Back button"
          width={50}
          height={50}
          onClick={() => nextPage(`/cart`)}
        />
      </div>

      <div className="flex flex-col flex-grow items-center">
        <Image src="/png/payment/paper.png" alt="paper"
               width={600}
               height={600}
               onClick={() => nextPage("/end")}/>
      </div>
    </div>
  );
}