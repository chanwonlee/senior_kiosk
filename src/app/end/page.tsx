"use client";
import {useRouter} from 'next/navigation';
import Image from "next/image";

export default function Page() {
  const router = useRouter();

  const clearCartAndRedirect = (url: string) => {
    localStorage.removeItem("cart");
    router.push(url);
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <div className="flex flex-col flex-grow items-center">
        <Image src="/png/end/background.png" alt="up"
               width={600}
               height={600}
               onClick={() => clearCartAndRedirect("/")}/>
      </div>
    </div>
  );
}