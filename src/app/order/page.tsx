"use client";
import {useRouter} from 'next/navigation';

export default function Page() {
  const router = useRouter();

  const nextPage = (url: string) => {
    router.push(url);
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <div className="flex flex-row flex-grow items-center">
        <div className="flex flex-col">
          <img src="/png/cart/up.png" alt="up"/>
          <img className="w-1/3 mx-auto" src="/png/cart/price.png" alt="price"/>
          <div className="flex flex-row">
            <img className="w-1/2 p-1 pl-5"
                 src="/png/cart/paper.png" alt="paper"
                 onClick={() => nextPage("/payment/paper")}/>
            <img className="w-1/2 p-1 pr-5"
                 src="/png/cart/card.png" alt="card"
                 onClick={() => nextPage("/payment/card")}/>
          </div>
          <div className="flex flex-row flex-grow items-center justify-between">
            <img className="" src="/png/cart/down.png" alt="down"/>
          </div>
        </div>
      </div>
    </div>
  );
}