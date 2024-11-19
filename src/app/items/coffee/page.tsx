"use client";
import {useRouter} from 'next/navigation';
import Image from 'next/image';

const NavigationButton = ({src, alt, onClick, className}: {
  src: string,
  alt: string,
  onClick: () => void,
  className: string
}) => (
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
    router.push(`${url}?itemName=${itemName}&price=${price}&code=${code}`); // 수량을 쿼리로 전달
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
          커피
        </div>
      </div>

      <div className="flex flex-row flex-1 items-center px-2">
        <NavigationButton
          src="/png/items/undo_button.png"
          alt="undo button"
          onClick={() => nextPage("/items/bread")}
          className="w-1/12"
        />

        <div className="flex flex-col flex-1 h-[60vh] justify-between gap-3 px-2">
          <div className="flex flex-row w-full gap-2 h-1/3">
            <div
              className="flex-1 flex-col text-base border-red-600 border-4 rounded-2xl flex items-center justify-center text-center text-black bg-white font-['Paperlogy']"
              onClick={() => nextPageWithQuery("/item", "바닐라라떼", 3000, "coffee/1")}>
              <Image src={"/png/items/coffee/1.png"} alt={"coffee1"}
                     width={90}
                     height={90}
              ></Image>
              <div>바닐라 라떼</div>
            </div>
            <div
              className="flex-1 flex-col text-base border-red-600 border-4 rounded-2xl flex items-center justify-center text-center text-black bg-white font-['Paperlogy']"
              onClick={() => nextPageWithQuery("/item", "아메리카노", 2500, "coffee/2")}>
              <Image src={"/png/items/coffee/2.png"} alt={"coffee2"}
                     width={100}
                     height={100}
              ></Image>
              <div>아메리카노</div>
            </div>
          </div>

          <div className="flex flex-row w-full gap-2 h-1/3">
            <div
              className="flex-1 flex-col text-base border-red-600 border-4 rounded-2xl flex items-center justify-center text-center text-black bg-white font-['Paperlogy']"
              onClick={() => nextPageWithQuery("/item", "연유라떼", 3000, "coffee/3")}>
              <Image src={"/png/items/coffee/3.png"} alt={"coffee3"}
                     width={100}
                     height={100}
              ></Image>
              <div>연유 라떼</div>
            </div>
            <div
              className="flex-1 flex-col text-base border-red-600 border-4 rounded-2xl flex items-center justify-center text-center text-black bg-white font-['Paperlogy']"
              onClick={() => nextPageWithQuery("/item", "바닐라라떼", 3500, "coffee/4")}>
              <Image src={"/png/items/coffee/4.png"} alt={"coffee4"}
                     width={80}
                     height={80}
              ></Image>
              <div>카페 라떼</div>
            </div>
          </div>

          <div className="flex flex-row w-full gap-2 h-1/3">
            <div
              className="flex-1 flex-col text-base border-red-600 border-4 rounded-2xl flex items-center justify-center text-center text-black bg-white font-['Paperlogy']"
              onClick={() => nextPageWithQuery("/item", "카페모카", 3500, "coffee/5")}>
              <Image src={"/png/items/coffee/5.png"} alt={"coffee5"}
                     width={100}
                     height={100}
              ></Image>
              <div>카페 모카</div>
            </div>
            <div
              className="flex-1 flex-col text-base border-red-600 border-4 rounded-2xl flex items-center justify-center text-center text-black bg-white font-['Paperlogy']"
              onClick={() => nextPageWithQuery("/item", "카푸치노", 3500, "coffee/6")}>
              <Image src={"/png/items/coffee/6.png"} alt={"coffee6"}
                     width={80}
                     height={80}
              ></Image>
              <div>카푸치노</div>
            </div>
          </div>
        </div>
        <NavigationButton
          src="/png/items/next_button.png"
          alt="next button"
          onClick={() => nextPage("/items/tea")}
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