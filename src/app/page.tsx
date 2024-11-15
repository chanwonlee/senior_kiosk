"use client";
import {useRouter} from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const nextPage = (url: string) => {
    router.push(url);
  };

  return (
    <div className="flex flex-col min-h-screen">

      <div className="flex flex-col flex-grow items-center">

        <img className="" src="/png/page01_png/background.png" alt="background"/>

        <div className="flex flex-row mt-5">
          <img className="w-1/2 p-1 pl-6"
               src="/png/page01_png/button1.png" alt="button1"
               onClick={() => nextPage("/menu")}/>

          <img className="w-1/2 p-1 pr-6"
               src="/png/page01_png/button2.png" alt="button2"
               onClick={() => nextPage("/menu")}/>
        </div>
      </div>

      <div className="flex flex-row flex-grow items-center justify-end">
        <img className="w-1/3 mr-12"
             src="/png/page01_png/character.png" alt="character"/>
      </div>
    </div>
  );
}