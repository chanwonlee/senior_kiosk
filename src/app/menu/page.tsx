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
      <div className="flex flex-row flex-grow items-center justify-between mx-8 mt-2">
        <Image
          className="h-1/12 w-1/12"
          src="/png/menu/backbutton.png"
          alt="Back button"
          width={50}
          height={50}
          onClick={() => nextPage("/")}
        />
        <Image
          className="h-2/12 w-2/12 p-1"
          src="/png/menu/cart.png"
          alt="Cart"
          width={50}
          height={50}
          onClick={() => nextPage("/cart")}
        />
      </div>

      <div className="flex flex-col flex-grow items-center">
        <div className="flex flex-row mt-2">
          <Image
            className="w-1/2 p-1 pl-6"
            src="/png/menu/button1.png"
            alt="Coffee"
            width={200}
            height={200}
            onClick={() => nextPage("/items/coffee")}
          />
          <Image
            className="w-1/2 p-1 pr-6"
            src="/png/menu/button2.png"
            alt="Tea"
            width={200}
            height={200}
            onClick={() => nextPage("/items/tea")}
          />
        </div>
        <div className="flex flex-row">
          <Image
            className="w-1/2 p-1 pl-6"
            src="/png/menu/button3.png"
            alt="Juice"
            width={200}
            height={200}
            onClick={() => nextPage("/items/juice")}
          />
          <Image
            className="w-1/2 p-1 pr-6"
            src="/png/menu/button4.png"
            alt="Bread"
            width={200}
            height={200}
            onClick={() => nextPage("/items/bread")}
          />
        </div>
      </div>

      <div>
        <Image
          className="flex w-full p-3 pl-5 pr-5"
          src="/png/menu/button5.png"
          alt="Pay"
          width={200}
          height={60}
          onClick={() => nextPage("/cart")}
        />
      </div>

      <div className="flex flex-row flex-grow items-center justify-between">
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