"use client";
import {useState} from "react";
import {useRouter} from "next/navigation";
import Image from "next/image";

export default function Page() {
  const router = useRouter();
  const [quantity, setQuantity] = useState(1); // 기본 수량 1로 설정

  const nextPage = (url: string) => {
    router.push(url);
  };

  const plus = () => {
    setQuantity(prevQuantity => Math.min(prevQuantity + 1, 9)); // 최대 수량을 10으로 설정
  };

  const minus = () => {
    setQuantity(prevQuantity => Math.max(prevQuantity - 1, 1)); // 최소 수량을 1로 설정
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="relative">
        <Image src="/png/item/background.png"
               alt="background"
               width={600}
               height={600}
        />
        <div
          className="absolute top-3/4 left-1/2 transform -translate-x-1/2 text-5xl pt-2 whitespace-nowrap font-['Paperlogy']">
          가격:3500원
        </div>
      </div>
      <div className="flex flex-col flex-grow items-center">
        <div className="flex flex-col mt-8">
          <div
            className="border-4 rounded-2xl border-red-600 text-5xl p-4 flex flex-row items-center justify-between">
            <div className="flex flex-row items-center">
              <div className="ml-2 pr-2 whitespace-nowrap font-['Paperlogy']">수량:</div>
              <div className="font-['Paperlogy']">{quantity}</div>
            </div>
            <div className="flex flex-row items-center justify-end">
              <Image className="size-3/12 mr-2" src="/png/item/minus.png"
                     alt={"minus"}
                     width={50}
                     height={50}
                     onClick={minus}/>
              <Image className="size-3/12 ml-2" src="/png/item/plus.png"
                     alt={"plus"}
                     width={50}
                     height={50}
                     onClick={plus}/>
            </div>
          </div>

          <div
            className="bg-red-500 border-4 rounded-2xl border-red-600 text-4xl text-white text-center p-4 justify-between mt-4 font-['Paperlogy']"
            onClick={() => nextPage("menu")}>
            장바구니에 넣기
          </div>
        </div>
      </div>
    </div>
  );
}