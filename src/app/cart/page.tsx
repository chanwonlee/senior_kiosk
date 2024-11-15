"use client";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  // items 배열 수정: 튜플을 객체로 변경
  const items = [
    { name: "콜라", price: 1000, quantity: 2 },
    { name: "녹차", price: 1500, quantity: 3 },
    { name: "커피", price: 3000, quantity: 3 },
  ];
  const nextPage = (url: string) => {
    router.push(url);
  };

  const totalAmount = items.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-row items-center justify-between mx-8 my-4">
        <img
          className="h-1/12 w-1/12"
          src="/png/menu/backbutton.png"
          alt="back button1"
          onClick={() => nextPage("/")}
        />
      </div>

      <div className="flex flex-col max-h-96 overflow-y-auto">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-red-500 border-4 rounded-2xl border-red-600 text-3xl text-white p-4 mx-6 mb-2 text-center font-['Paperlogy']"
          >
            {item.name} {item.price}원 | {item.quantity}개
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center justify-end mx-6 mt-auto">
        <div className="bg-red-500 border-4 rounded-2xl border-red-600 text-3xl w-full text-white p-4 mx-6 mb-2 text-center font-['Paperlogy']">
          총 금액: {totalAmount}원
        </div>
        <div className="flex flex-row mb-2">
          <img
            className="w-1/2 p-1"
            src="/png/cart/paper.png"
            alt="paper"
            onClick={() => nextPage("/payment/paper")}
          />
          <img
            className="w-1/2 p-1"
            src="/png/cart/card.png"
            alt="card"
            onClick={() => nextPage("/payment/card")}
          />
        </div>
      </div>
    </div>
  );
}