"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Page() {
  const router = useRouter();

  const [items, setItems] = useState<CartItem[]>([]);

  interface CartItem {
    name: string;
    price: number;
    quantity: number;
  }

  useEffect(() => {
    // Ensure the code runs only on the client side
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setItems(JSON.parse(storedCart));
    }
  }, []); // This runs only once when the component mounts on the client side

  const nextPage = (url: string) => {
    router.push(url);
  };

  const clearCartAndRedirect = (url: string) => {
    // 로컬 스토리지에서 장바구니 데이터 삭제
    localStorage.removeItem("cart");

    // 페이지 이동
    router.push(url);
  };

  const totalAmount = items.reduce(
    (total: number, item: CartItem) => total + item.price * item.quantity,
    0
  );

  const removeItem = (index: number) => {
    // 해당 항목을 삭제한 후 새로운 배열로 업데이트
    const updatedItems = items.filter((_: unknown, i: number) => i !== index);
    setItems(updatedItems);

    // 로컬 스토리지에 업데이트된 장바구니 저장
    localStorage.setItem("cart", JSON.stringify(updatedItems));
  };

  const updateQuantity = (index: number, operation: "increase" | "decrease") => {
    // 항목 수량 변경
    const updatedItems = [...items];
    if (operation === "increase") {
      updatedItems[index].quantity += 1;
    } else if (operation === "decrease" && updatedItems[index].quantity > 1) {
      updatedItems[index].quantity -= 1;
    }
    setItems(updatedItems);

    // 로컬 스토리지에 업데이트된 장바구니 저장
    localStorage.setItem("cart", JSON.stringify(updatedItems));
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-row items-center justify-between mx-8 my-4">
        <Image
          className="h-1/12 w-1/12"
          src="/png/menu/backbutton.png"
          alt="back button1"
          width={50}
          height={50}
          onClick={() => nextPage("/menu")}
        />
      </div>

      <div className="flex flex-col max-h-96 whitespace-nowrap overflow-y-auto">
        {items.length === 0 ? (
          <p className="text-center text-xl mt-4">장바구니가 비어 있습니다.</p>
        ) : (
          items.map((item: CartItem, index: number) => (
            <div
              key={index}
              className="bg-red-500 border-4 rounded-2xl border-red-600 text-2xl text-white p-4 mx-6 mb-2 text-center font-['Paperlogy']"
            >
              <div className="flex flex-col justify-between text-1xl items-center">
                <div>{item.name}</div>
                <div className="flex flex-row justify-between items-center w-full pt-3">
                  <div>₩{item.price}원</div>
                  <div className="flex items-center">
                    <button
                      onClick={() => updateQuantity(index, "decrease")}
                      className="text-black bg-white size-5 text-sm whitespace-nowrap rounded-full px-2"
                    >
                      -
                    </button>
                    <span className="mx-2">{item.quantity}개</span>
                    <button
                      onClick={() => updateQuantity(index, "increase")}
                      className="text-black bg-white size-5 text-sm whitespace-nowrap rounded-full px-2"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => removeItem(index)}
                    className="text-black bg-white size-5 text-sm whitespace-nowrap rounded-full"
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
          <div className="bg-red-500 border-4 rounded-2xl border-red-600 text-3xl w-full text-white p-4 mx-6 mb-2 text-center font-['Paperlogy']">
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
            onClick={() => clearCartAndRedirect("/payment/paper")}
          />
          <Image
            className="w-1/2 p-1"
            src="/png/cart/card.png"
            alt="card"
            width={200}
            height={200}
            onClick={() => clearCartAndRedirect("/payment/card")}
          />
        </div>
      </div>
    </div>
  );
}