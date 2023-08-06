import Button from "@/components/button";
import { MouseEventHandler } from "react";

export default function Home() {
  const handleClickButton: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    console.log("clicked");
  };

  return (
    <>
      <main className="flex flex-col items-center bg-gray-300 px-5 py-5">
        <h1 className="my-2 text-3xl font-bold">/tera</h1>
        <section className="flex w-full max-w-xl flex-col items-center bg-blue-200 px-10 py-5">
          <h2 className="my text-xl font-bold">Button</h2>
          <Button onClick={handleClickButton} className="my-5 max-w-[200px]">
            ボタン
          </Button>
        </section>
      </main>
    </>
  );
}
