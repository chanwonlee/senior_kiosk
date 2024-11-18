"use client";
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function Page() {
  const router = useRouter();

  const nextPage = (url: string) => {
    router.push(url);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-row flex-grow items-center justify-between mx-6 mt-2">
        <Image
          className="size-2/12"
          src="/png/menu/backbutton.png"
          alt="Back button"
          width={100}
          height={100}
          onClick={() => nextPage("/")}
        />
        <Image
          className="size-3/12 p-1"
          src="/png/menu/cart.png"
          alt="Cart"
          width={100}
          height={100}
          onClick={() => nextPage("/cart")}
        />
      </div>

      <div className="flex flex-col h-[34vh] flex-grow items-center gap-2 px-10">
        <div className="flex flex-row w-full gap-2">
          <div
            onClick={() => nextPage("/items/coffee")}
            className="flex-1 h-[20vh] text-6xl border-red-600 border-4 rounded-2xl flex items-center justify-center text-center text-red-500 font-['Paperlogy'] cursor-pointer"
          >
            커피
          </div>
          <div
            onClick={() => nextPage("/items/tea")}
            className="flex-1 h-[20vh] text-6xl border-red-600 border-4 rounded-2xl flex items-center justify-center text-center text-red-500 font-['Paperlogy'] cursor-pointer"
          >
            차
          </div>
        </div>
        <div className="flex flex-row w-full gap-2">
          <div
            onClick={() => nextPage("/items/juice")}
            className="flex-1 h-[20vh] text-6xl border-red-600 border-4 rounded-2xl flex items-center justify-center text-center text-red-500 font-['Paperlogy'] cursor-pointer"
          >
            과일<br/>주스
          </div>
          <div
            onClick={() => nextPage("/items/bread")}
            className="flex-1 h-[20vh] text-6xl border-red-600 border-4 rounded-2xl flex items-center justify-center text-center text-red-500 font-['Paperlogy'] cursor-pointer"
          >
            빵
          </div>
        </div>
      </div>

      <div
        className="bg-red-500 border-4 rounded-2xl border-red-600 text-5xl text-white p-4 mx-6 mb-2 text-center font-['Paperlogy'] cursor-pointer"
        onClick={() => nextPage("/cart")}
      >
        결제하기
      </div>

      <div className="flex flex-row h-[25vh] mt-auto items-end">
        <Image
          className="w-1/2 ml-7"
          src="/png/menu/words.png"
          alt="Words"
          width={150}
          height={50}
        />
        <Image
          className="w-1/3 mr-12"
          src="/png/page01_png/character.png"
          alt="Character"
          width={150}
          height={150}
        />
      </div>
    </div>
  );
}