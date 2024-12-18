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
          차
        </div>
      </div>

      <div className="flex flex-row flex-1 items-center px-2">
        <NavigationButton
          src="/png/items/undo_button.png"
          alt="undo button"
          onClick={() => nextPage("/items/coffee")}
          className="w-1/12"
        />

        <div className="flex flex-col flex-1 h-[60vh] justify-between gap-2 px-2">
          <div className="flex flex-row w-full gap-2 h-1/3">
            <div
              className="flex-1 flex-col text-base border-red-600 border-4 rounded-2xl flex items-center justify-center text-center text-black bg-white font-['Paperlogy']"
              onClick={() => nextPageWithQuery("/item", "국화차", 3000, "tea/1")}>
              <Image src={"/png/items/tea/1.png"} alt={"tea"}
                     width={120}
                     height={120}
              ></Image>
              <div>국화차</div>
            </div>
            <div
              className="flex-1 flex-col text-base border-red-600 border-4 rounded-2xl flex items-center justify-center text-center text-black bg-white font-['Paperlogy']"
              onClick={() => nextPageWithQuery("/item", "녹차", 2500, "tea/2")}>
              <Image src={"/png/items/tea/2.png"} alt={"tea2"}
                     width={130}
                     height={130}
              ></Image>
              <div>녹차</div>
            </div>
          </div>

          <div className="flex flex-row w-full gap-2 h-1/3">
            <div
              className="flex-1 flex-col text-base border-red-600 border-4 rounded-2xl flex items-center justify-center text-center text-black bg-white font-['Paperlogy']"
              onClick={() => nextPageWithQuery("/item", "레몬차", 3000, "tea/3")}>
              <Image src={"/png/items/tea/3.png"} alt={"tea3"}
                     width={100}
                     height={100}
              ></Image>
              <div>레몬차</div>
            </div>
            <div
              className="flex-1 flex-col text-base border-red-600 border-4 rounded-2xl flex items-center justify-center text-center text-black bg-white font-['Paperlogy']"
              onClick={() => nextPageWithQuery("/item", "루이보스차", 3000, "tea/4")}>
              <Image src={"/png/items/tea/4.png"} alt={"tea4"}
                     width={110}
                     height={110}
              ></Image>
              <div>루이보스차</div>
            </div>
          </div>

          <div className="flex flex-row w-full gap-2 h-1/3">
            <div
              className="flex-1 flex-col text-base border-red-600 border-4 rounded-2xl flex items-center justify-center text-center text-black bg-white font-['Paperlogy']"
              onClick={() => nextPageWithQuery("/item", "복숭아차", 3500, "tea/5")}>
              <Image src={"/png/items/tea/5.png"} alt={"tea5"}
                     width={70}
                     height={70}
              ></Image>
              <div>복숭아차</div>
            </div>
            <div
              className="flex-1 flex-col text-base border-red-600 border-4 rounded-2xl flex items-center justify-center text-center text-black bg-white font-['Paperlogy']"
              onClick={() => nextPageWithQuery("/item", "페퍼민트차", 3500, "tea/6")}>
              <Image src={"/png/items/tea/6.png"} alt={"tea6"}
                     width={120}
                     height={120}
              ></Image>
              <div>페퍼민트차</div>
            </div>
          </div>
        </div>

        <NavigationButton
          src="/png/items/next_button.png"
          alt="next button"
          onClick={() => nextPage("/items/juice")}
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