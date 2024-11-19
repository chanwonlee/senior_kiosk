"use client";

import {useRouter, useSearchParams} from "next/navigation";
import Image from "next/image";
import React, {Suspense, useState, useEffect} from "react";

export default function Page() {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <Suspense>
      <SearchParamsComponent/>
    </Suspense>
  );
}

function SearchParamsComponent() {
  const [quantity, setQuantity] = useState(1);
  const router = useRouter();

  const searchParams = useSearchParams();
  const itemName = searchParams.get("itemName");
  const price = searchParams.get("price");
  const formattedPrice = (price ? Number(price) : 0).toLocaleString('ko-KR');
  const code = searchParams.get("code");

  interface CartItem {
    name: string;
    price: number;
    quantity: number;
    code: string;
  }

  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("cart") || "[]")
  );

  const nextPage = (url: string) => {
    router.push(url);
  };

  const plus = () => {
    setQuantity((prevQuantity) => Math.min(prevQuantity + 1, 10));
  };

  const minus = () => {
    setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1));
  };

  const addToCart = () => {
    const existingItemIndex: number = items.findIndex(
      (item: CartItem) => item.code === code
    );

    if (existingItemIndex !== -1) {
      const updatedItems = [...items];
      updatedItems[existingItemIndex].quantity += quantity;
      setItems(updatedItems);
      localStorage.setItem("cart", JSON.stringify(updatedItems));
    } else {
      const newItem = {name: itemName, price: parseInt(price || "0"), quantity, code};
      const updatedItems = [...items, newItem];
      setItems(updatedItems);
      localStorage.setItem("cart", JSON.stringify(updatedItems));
    }
    router.push("/cart");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="w-full bg-gradient-to-b from-red-400 to-white flex flex-col items-center justify-center">
        <div className="flex flex-row flex-grow size-full items-center justify-between mt-6">
          <Image
            className="size-2/12 p-1 ml-6"
            src="/png/menu/backbutton.png"
            alt="Back button"
            width={40}
            height={50}
            onClick={() => nextPage(`/items/${code?.split("/")[0]}`)}
          />
        </div>
        <div
          className="size-[28vh] mt-8 bg-white rounded-full flex items-center justify-center shadow-lg mb-4">
          <Image
            className="object-cover"
            width={150}
            height={150}
            src={`/png/items/${code}.png`}
            alt="item"
          />
        </div>
        <div className="text-center pt-5">
          <p className="text-3xl font-bold text-gray-700">{itemName}</p>
          <p className="text-4xl font-semibold text-gray-900 pt-4">₩{formattedPrice}원</p>
        </div>
      </div>

      <div className="flex flex-col flex-grow items-center">
        <div className="flex flex-col mt-8 w-full px-4">
          <div
            className="border-4 rounded-2xl border-red-600 text-4xl p-4 flex flex-row items-center justify-between">
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