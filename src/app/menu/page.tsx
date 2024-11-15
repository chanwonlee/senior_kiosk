"use client";
import {useRouter} from 'next/navigation';

export default function Page() {
  const router = useRouter();

  const nextPage = (url: string) => {
    router.push(url);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-row flex-grow items-center justify-between mx-8 mt-2">
        <img className="h-1/12 w-1/12 "
             src="/png/menu/backbutton.png" alt="back button1"
             onClick={() => nextPage("/")}/>
        <img className="h-2/12 w-2/12 p-1"
             src="/png/menu/cart.png" alt="cart"
             onClick={() => nextPage("/cart")}/>
      </div>
      <div className="flex flex-col flex-grow items-center">
        <div className="flex flex-row mt-2">
          <img className="w-1/2 p-1 pl-6"
               src="/png/menu/button1.png" alt="coffee"
               onClick={() => nextPage("/items/coffee")}/>
          <img className="w-1/2 p-1 pr-6"
               src="/png/menu/button2.png" alt="tea"
               onClick={() => nextPage("/items/tea")}/>
        </div>
        <div className="flex flex-row">
          <img className="w-1/2 p-1 pl-6"
               src="/png/menu/button3.png" alt="juice"
               onClick={() => nextPage("/items/juice")}/>
          <img className="w-1/2 p-1 pr-6"
               src="/png/menu/button4.png" alt="bread"
               onClick={() => nextPage("/items/bread")}/>
        </div>
      </div>

      <div>
        <img className="flex w-full p-3 pl-5 pr-5"
             src="/png/menu/button5.png" alt="pay"
             onClick={() => nextPage("/cart")}/>
      </div>

      <div className="flex flex-row flex-grow items-center justify-between">
        <img className="w-1/2 ml-7"
             src="/png/menu/words.png" alt="words"/>
        <img className="w-1/3 mr-12"
             src="/png/page01_png/character.png" alt="character"/>
      </div>
    </div>
  );
}