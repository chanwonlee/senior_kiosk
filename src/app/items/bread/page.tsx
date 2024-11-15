"use client";
import { useRouter } from 'next/navigation';
import Image from 'next/image';

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

  const coffeeImages = [
    "/png/items/bread/1.png",
    "/png/items/bread/2.png",
    "/png/items/bread/3.png",
    "/png/items/bread/4.png",
    "/png/items/bread/5.png",
    "/png/items/bread/6.png",
  ];

  // 이미지를 2개씩 묶어 행 단위로 나누기
  const imageRows = [];
  for (let i = 0; i < coffeeImages.length; i += 2) {
    imageRows.push(coffeeImages.slice(i, i + 2));
  }

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-row items-center justify-between mx-8 mt-10 h-2/12">
        <NavigationButton
          src="/png/menu/backbutton.png"
          alt="back button"
          onClick={() => nextPage("/menu")}
          className="h-1/12 w-1/12"
        />

        <div className="flex-1 text-center mr-5 text-5xl font-['Paperlogy']">
          빵
        </div>
      </div>

      <div className="flex flex-row mt-5 items-center">
        <NavigationButton
          src="/png/items/undo_button.png"
          alt="undo button"
          onClick={() => nextPage("/items/juice")}
          className="w-1/12 pl-1"
        />

        <div className="flex flex-col flex-grow items-center">
          {imageRows.map((row, rowIndex) => (
            <div key={rowIndex} className="flex flex-row">
              {row.map((image, imageIndex) => (
                <Image
                  key={imageIndex}
                  className="w-1/2 p-1"
                  src={image}
                  alt={`coffee ${imageIndex + 1}`}
                  width={150}
                  height={150}
                  onClick={() => nextPage("/item")}
                />
              ))}
            </div>
          ))}
        </div>

        <NavigationButton
          src="/png/items/next_button.png"
          alt="next button"
          onClick={() => nextPage("/items/coffee")}
          className="w-1/12 pr-1"
        />
      </div>

      <div className="flex flex-row flex-grow items-center justify-between">
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