"use client";
import {useRouter} from 'next/navigation';
import Image from "next/image";

export default function Home() {
  const router = useRouter();

  const nextPage = (url: string) => {
    router.push(url);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-col flex-grow items-center">
        <Image className="" src="/png/page01_png/background.png" alt="background"
               width={600}
               height={600}/>

        <div className="flex flex-row mt-5">
          <Image className="w-1/2 p-1 pl-6"
                 src="/png/page01_png/button1.png" alt="button1"
                 width={200}
                 height={200}
                 onClick={() => nextPage("/menu")}/>

          <Image className="w-1/2 p-1 pr-6"
                 src="/png/page01_png/button2.png" alt="button2"
                 width={200}
                 height={200}
                 onClick={() => nextPage("/menu")}/>
        </div>
      </div>

      <div className="flex flex-row flex-grow items-center justify-end">
        <Image className="w-1/3 mr-12"
               width={200}
               height={200}
               src="/png/page01_png/character.png" alt="character"/>
      </div>
    </div>
  );
}