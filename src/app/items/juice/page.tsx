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
          주스
        </div>
      </div>

      <div className="flex flex-row flex-1 items-center px-2">
        <NavigationButton
          src="/png/items/undo_button.png"
          alt="undo button"
          onClick={() => nextPage("/items/tea")}
          className="w-1/12"
        />

        <div className="flex flex-col flex-1 h-[60vh] justify-between gap-2 px-2">
          <div className="flex flex-row w-full gap-2 h-1/3">
            <div
              className="flex-1 flex-col text-base border-red-600 border-4 rounded-2xl flex items-center justify-center text-center text-black bg-white font-['Paperlogy']"
              onClick={() => nextPageWithQuery("/item", "딸기주스", 3500, "juice/1")}>
              <Image src={"/png/items/juice/1.png"} alt={"juice1"}
                     width={90}
                     height={90}
              ></Image>
              <div>딸기주스</div>
            </div>
            <div
              className="flex-1 flex-col text-base border-red-600 border-4 rounded-2xl flex items-center justify-center text-center text-black bg-white font-['Paperlogy']"
              onClick={() => nextPageWithQuery("/item", "라임주스", 3000, "juice/2")}>
              <Image src={"/png/items/juice/2.png"} alt={"juice2"}
                     width={95}
                     height={95}
              ></Image>
              <div>라임주스</div>
            </div>
          </div>

          <div className="flex flex-row w-full gap-2 h-1/3">
            <div
              className="flex-1 flex-col text-base border-red-600 border-4 rounded-2xl flex items-center justify-center text-center text-black bg-white font-['Paperlogy']"
              onClick={() => nextPageWithQuery("/item", "블루베리주스", 3500, "juice/3")}>
              <Image src={"/png/items/juice/3.png"} alt={"juice3"}
                     width={90}
                     height={90}
              ></Image>
              <div>블루베리주스</div>
            </div>

            <div
              className="flex-1 flex-col text-base border-red-600 border-4 rounded-2xl flex items-center justify-center text-center text-black bg-white font-['Paperlogy']"
              onClick={() => nextPageWithQuery("/item", "수박주스", 4000, "juice/4")}>
              <Image src={"/png/items/juice/4.png"} alt={"juice4"}
                     width={100}
                     height={100}
              ></Image>
              <div>수박주스</div>
            </div>
          </div>

          <div className="flex flex-row w-full gap-2 h-1/3">

            <div
              className="flex-1 flex-col text-base border-red-600 border-4 rounded-2xl flex items-center justify-center text-center text-black bg-white font-['Paperlogy']"
              onClick={() => nextPageWithQuery("/item", "오렌지주스", 3000, "juice/5")}>
              <Image src={"/png/items/juice/5.png"} alt={"juice5"}
                     width={100}
                     height={100}
              ></Image>
              <div>오렌지주스</div>
            </div>

            <div
              className="flex-1 flex-col text-base border-red-600 border-4 rounded-2xl flex items-center justify-center text-center text-black bg-white font-['Paperlogy']"
              onClick={() => nextPageWithQuery("/item", "자몽주스", 3500, "juice/6")}>
              <Image src={"/png/items/juice/6.png"} alt={"juice6"}
                     width={70}
                     height={70}
              ></Image>
              <div>자몽주스</div>
            </div>
          </div>
        </div>

        <NavigationButton
          src="/png/items/next_button.png"
          alt="next button"
          onClick={() => nextPage("/items/bread")}
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