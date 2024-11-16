"use client";
import {useState} from "react";
import {useRouter, useSearchParams} from "next/navigation";
import Image from "next/image";

export default function Page() {
  const [quantity, setQuantity] = useState(1);
  const router = useRouter();
  const searchParams = useSearchParams();
  const itemName = searchParams.get("itemName");
  const price = searchParams.get("price");
  const code = searchParams.get("code");

  interface CartItem {
    name: string;
    price: number;
    quantity: number;
    code: string;
  }

  const [items, setItems] = useState(JSON.parse(localStorage.getItem("cart") || "[]"));

  const plus = () => {
    setQuantity((prevQuantity) => Math.min(prevQuantity + 1, 10));
  };

  const minus = () => {
    setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1));
  };

  const addToCart = () => {
    // 현재 항목이 장바구니에 이미 있는지 확인
    const existingItemIndex:number = items.findIndex((item:CartItem) => item.code === code);

    if (existingItemIndex !== -1) {
      // 기존 항목이 있으면 수량을 추가
      const updatedItems = [...items];
      updatedItems[existingItemIndex].quantity += quantity;
      setItems(updatedItems);
      localStorage.setItem("cart", JSON.stringify(updatedItems));
    } else {
      // 새 항목이면 장바구니에 추가
      const newItem = {name: itemName, price: parseInt(price || "0"), quantity, code};
      const updatedItems = [...items, newItem];
      setItems(updatedItems);
      localStorage.setItem("cart", JSON.stringify(updatedItems));
    }
    router.push("/cart");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="h-[60vh] bg-gradient-to-b from-red-400 to-white flex flex-col items-center justify-center">
        <div className="size-[32vh] bg-white rounded-full flex items-center justify-center shadow-lg mb-4">
          <Image
            className="object-cover"
            width={150}
            height={150}
            src={`/png/items/${code}.png`}
            alt="item"
          />
        </div>
        <div className="text-center pt-10">
          <p className="text-3xl font-bold text-gray-700">{itemName}</p>
          <p className="text-4xl font-semibold text-gray-900 pt-4">{price}</p>
        </div>
      </div>

      <div className="flex flex-col flex-grow items-center">
        <div className="flex flex-col mt-8">
          <div
            className="border-4 rounded-2xl border-red-600 text-4xl p-4 flex flex-row items-center justify-between"
          >
            <div className="flex flex-row items-center">
              <div className="ml-2 pr-2 whitespace-nowrap text-4xl text-black font-['Paperlogy']">수량:</div>
              <div className="text-black text-4xl font-['Paperlogy']">{quantity}</div>
            </div>
            <div className="flex flex-row justify-end">
              <Image
                className="size-[4vh] mr-1"
                src="/png/item/minus.png"
                alt={"minus"}
                width={50}
                height={50}
                onClick={minus}
              />
              <Image
                className="size-[4vh] ml-1"
                src="/png/item/plus.png"
                alt={"plus"}
                width={50}
                height={50}
                onClick={plus}
              />
            </div>
          </div>
          <div
            className="bg-red-500 border-4 rounded-2xl border-red-600 text-4xl text-white text-center p-4 justify-between mt-4 font-['Paperlogy']"
            onClick={addToCart}
          >
            장바구니에 넣기
          </div>
        </div>
      </div>
    </div>
  );
}