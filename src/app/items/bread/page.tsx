"use client";
import Image from 'next/image';
import {useRouter} from "next/navigation";

const NavigationButton = ({ src, alt, onClick, className }: { src: string, alt: string, onClick: () => void, className: string }) => (
  <Image
    className={className}
    src={src}
    alt={alt}
    width={50}
    height={50}
    onClick={onClick}
  />
);

export default function Page() {
  const router = useRouter();

  const nextPage = (url: string) => {
    router.push(url);
  };

  const nextPageWithQuery = (url: string, itemName: string, price: number, code: string) => {
    router.push(`${url}?itemName=${encodeURIComponent(itemName)}&price=${price}&code=${encodeURIComponent(code)}`);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-row items-center justify-between mx-8 mt-5 pb-3">
        <NavigationButton
          src="/png/menu/backbutton.png"
          alt="back button"
          onClick={() => nextPage("/menu")}
          className="size-2/12"
        />

        <div className="flex-1 text-center mr-5 text-5xl text-black font-['Paperlogy']">
          빵
        </div>
      </div>

      <div className="flex flex-row flex-1 items-center px-2">
        <NavigationButton
          src="/png/items/undo_button.png"
          alt="undo button"
          onClick={() => nextPage("/items/juice")}
          className="w-1/12"
        />

        <div className="flex flex-col flex-1 h-[60vh] justify-between gap-3 px-2">
          <div className="flex flex-row w-full gap-2 h-1/3">
            <div className="flex-1 flex-col text-base border-red-600 border-4 rounded-2xl flex items-center justify-center text-center text-black bg-white font-['Paperlogy']"
              onClick={() => nextPageWithQuery("/item", "녹차케이크", 9000, "bread/1")}>
              <Image src={"/png/items/bread/1.png"} alt={"bread1"}
                     width={110}
                     height={110}
              ></Image>
              <div>녹차 케이크</div>
            </div>
            <div
              className="flex-1 flex-col text-base border-red-600 border-4 rounded-2xl flex items-center justify-center text-center text-black bg-white font-['Paperlogy']"
              onClick={() => nextPageWithQuery("/item", "딸기초코케이크", 12000, "bread/2")}>
              <Image src={"/png/items/bread/2.png"} alt={"bread1"}
                     width={110}
                     height={110}
              ></Image>
              <div>딸기 초코 케이크</div>
            </div>
          </div>

          <div className="flex flex-row w-full gap-2 h-1/3">
            <div
              className="flex-1 flex-col text-base border-red-600 border-4 rounded-2xl flex items-center justify-center text-center text-black bg-white font-['Paperlogy']"
              onClick={() => nextPageWithQuery("/item", "딸기케이크", 10000, "bread/3")}>
              <Image src={"/png/items/bread/3.png"} alt={"bread3"}
                     width={110}
                     height={110}
              ></Image>
              <div>딸기 케이크</div>
            </div>
            <div
              className="flex-1 flex-col text-base border-red-600 border-4 rounded-2xl flex items-center justify-center text-center text-black bg-white font-['Paperlogy']"
              onClick={() => nextPageWithQuery("/item", "딸기크로와상", 6000, "bread/4")}>
              <Image src={"/png/items/bread/4.png"} alt={"bread4"}
                     width={120}
                     height={120}
              ></Image>
              <div>딸기 크로와상</div>
            </div>
          </div>

          <div className="flex flex-row w-full gap-2 h-1/3">
            <div
              className="flex-1 flex-col text-base border-red-600 border-4 rounded-2xl flex items-center justify-center text-center text-black bg-white font-['Paperlogy']"
              onClick={() => nextPageWithQuery("/item", "사과파이", 3000, "bread/5")}>
              <Image src={"/png/items/bread/5.png"} alt={"bread5"}
                     width={120}
                     height={120}
              ></Image>
              <div>사과파이</div>
            </div>
            <div
              className="flex-1 flex-col text-base border-red-600 border-4 rounded-2xl flex items-center justify-center text-center text-black bg-white font-['Paperlogy']"
              onClick={() => nextPageWithQuery("/item", "점심세트", 15000, "bread/6")}>
              <Image src={"/png/items/bread/6.png"} alt={"bread6"}
                     width={120}
                     height={120}
              ></Image>
              <div>점심세트</div>
            </div>
          </div>
        </div>

        <NavigationButton
          src="/png/items/next_button.png"
          alt="next button"
          onClick={() => nextPage("/items/coffee")}
          className="w-1/12"
        />
      </div>

      <div className="flex flex-row h-[25vh] mt-auto items-end">
        <Image
          className="w-1/2 ml-7"
          src="/png/items/words.png"
          alt="words"
          width={150}
          height={150}
        />
        <Image
          className="w-1/3 mr-12"
          src="/png/page01_png/character.png"
          alt="character"
          width={150}
          height={150}
        />
      </div>
    </div>
  );
}