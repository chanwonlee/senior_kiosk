"use client";
import {useRouter} from 'next/navigation';

export default function Page() {
  const router = useRouter();

  const nextPage = (url: string) => {
    router.push(url);
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <div className="flex flex-col flex-grow items-center">
        <img src="/png/payment/card.png" alt="card"
             onClick={() => nextPage("/end")}/>
      </div>
    </div>
  );
}