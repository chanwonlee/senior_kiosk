"use client";
import {useRouter} from 'next/navigation';
import Image from "next/image";

export default function Page() {
  const router = useRouter();

  const nextPage = (url: string) => {
    router.push(url);
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <div className="flex flex-col flex-grow items-center">
        <Image src="/png/payment/paper.png" alt="paper"
               width={600}
               height={600}
               onClick={() => nextPage("/end")}/>
      </div>
    </div>
  );
}