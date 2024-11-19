"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import React, { useState, useEffect } from "react";

export default function Page() {
  const router = useRouter();

  const [items, setItems] = useState<CartItem[]>([]);

  interface CartItem {
    name: string;
    price: number;
    quantity: number;
  }

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setItems(JSON.parse(storedCart));
    }
  }, []);

  const nextPage = (url: string) => {
    router.push(url);
  };

  const totalAmount = items.reduce(
    (total: number, item: CartItem) => total + item.price * item.quantity,
    0
  ).toLocaleString('ko-KR');

  const removeItem = (index: number) => {
    const updatedItems = items.filter((_: unknown, i: number) => i !== index);
    setItems(updatedItems);

    localStorage.setItem("cart", JSON.stringify(updatedItems));
  };

  const updateQuantity = (index: number, operation: "increase" | "decrease") => {
    const updatedItems = [...items];
    if (operation === "increase") {
      if (updatedItems[index].quantity == 99) {
        updatedItems[index].quantity = 99;
      }
      else {
        updatedItems[index].quantity += 1;
      }
    } else if (operation === "decrease" && updatedItems[index].quantity > 1) {
      updatedItems[index].quantity -= 1;
    }
    setItems(updatedItems);

    localStorage.setItem("cart", JSON.stringify(updatedItems));
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-row items-center justify-between mx-8 my-4">
        <Image
          className="size-2/12"
          src="/png/menu/backbutton.png"
          alt="back button1"
          width={50}
          height={50}
          onClick={() => nextPage("/menu")}
        />
      </div>

      <div className="flex flex-col max-h-96 whitespace-nowrap overflow-y-auto">
        {items.length === 0 ? (
          <p className="text-center text-4xl text-black font-['Paperlogy'] mt-4">장바구니가 비어 있습니다.</p>
        ) : (
          items.map((item: CartItem, index: number) => (
            <div
              key={index}
              className="bg-white border-4 rounded-2xl border-red-600 text-2xl text-black p-4 mx-6 mb-2 text-center font-['Paperlogy']"
            >
              <div className="flex flex-col justify-between text-1xl items-center">
                <div>{item.name}</div>
                <div className="flex flex-row justify-between items-center w-full pt-2">
                  <div>₩{item.price.toLocaleString('ko-KR')}원</div>
                  <div className="flex items-center">
                    <Image
                      className="size-[4vh] mr-1"
                      src="/png/item/minus.png"
                      alt={"minus"}
                      width={50}
                      height={50}
                      onClick={() => updateQuantity(index, "decrease")}
                    />

                    <span className="mx-2">{item.quantity}개</span>
                    <Image
                      className="size-[4vh] ml-1"
                      src="/png/item/plus.png"
                      alt={"plus"}
                      width={50}
                      height={50}
                      onClick={() => updateQuantity(index, "increase")}
                    />
                  </div>
                  <button
                    onClick={() => removeItem(index)}
                    className="text-white bg-red-500 size-10 text-sm whitespace-nowrap rounded-full"
                  >
                    삭제
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="flex flex-col items-center justify-end mx-6 mt-auto">
        {items.length > 0 && (
          <div
            className="bg-red-500 border-4 rounded-2xl border-red-600 text-3xl w-full text-white p-4 mx-6 mb-2 text-center font-['Paperlogy']">
            총 금액: {totalAmount}원
          </div>
        )}
        <div className="flex flex-row mb-2">
          <Image
            className="w-1/2 p-1"
            src="/png/cart/paper.png"
            alt="paper"
            width={200}
            height={200}
            onClick={() => nextPage("/payment/paper")}
          />
          <Image
            className="w-1/2 p-1"
            src="/png/cart/card.png"
            alt="card"
            width={200}
            height={200}
            onClick={() => nextPage("/payment/card")}
          />
        </div>
      </div>
    </div>
  );
}