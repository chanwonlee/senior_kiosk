"use client";
import {useRouter} from 'next/navigation';

export default function Page() {
  const router = useRouter();

  const nextPage = (url: string) => {
    router.push(url);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-row flex-grow items-center justify-between mx-8 mt-2 h-2/12">
        <img
          className="h-1/12 w-1/12"
          src="/png/menu/backbutton.png"
          alt="back button1"
          onClick={() => nextPage("/menu")}
        />

        <div className="flex-1 text-center text-4xl font-['Paperlogy']">
          빵
        </div>
      </div>

      <div className="flex flex-row flex-grow items-center">
        <img className="w-1/12 pl-1"
             src="/png/items/undo_button.png" alt="undo_button"
             onClick={() => nextPage("/items/juice")}/>

        <div className="flex flex-col flex-grow items-center">
          <div className="flex flex-row">
            <img className="w-1/2 p-1 pl-2"
                 src="/png/items/bread/1.png" alt="1"
                 onClick={() => nextPage("/item")}/>
            <img className="w-1/2 p-1 pr-2"
                 src="/png/items/bread/2.png" alt="2"
                 onClick={() => nextPage("/item")}/>
          </div>

          <div className="flex flex-row">
            <img className="w-1/2 p-1 pl-2"
                 src="/png/items/bread/3.png" alt="3"
                 onClick={() => nextPage("/item")}/>
            <img className="w-1/2 p-1 pr-2"
                 src="/png/items/bread/4.png" alt="4"
                 onClick={() => nextPage("/item")}/>
          </div>

          <div className="flex flex-row">
            <img className="w-1/2 p-1 pl-2"
                 src="/png/items/bread/5.png" alt="5"
                 onClick={() => nextPage("/item")}/>
            <img className="w-1/2 p-1 pr-2"
                 src="/png/items/bread/6.png" alt="6"
                 onClick={() => nextPage("/item")}/>
          </div>
        </div>

        <img className="w-1/12 pr-1"
             src="/png/items/next_button.png" alt="next_button"
             onClick={() => nextPage("/items/coffee")}/>
      </div>

      <div className="flex flex-row flex-grow items-center justify-between">
        <img className="w-1/2 ml-7"
             src="/png/items/words.png" alt="words"/>
        <img className="w-1/3 mr-12"
             src="/png/page01_png/character.png" alt="character"/>
      </div>
    </div>
  );
}