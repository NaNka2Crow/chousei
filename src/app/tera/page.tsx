import Button from "@/components/button";
import Calendar from "@/components/calendar";
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

        <section className="mx-5 flex w-full flex-col items-center bg-blue-200 px-10 py-5">
          <h2 className="my-3 text-xl font-bold">Button</h2>
          <Button onClick={handleClickButton} className="my-5 max-w-[200px]">
            ボタン
          </Button>
        </section>

        <section className="mx-5 flex w-full flex-col items-center bg-blue-200 px-10 py-5">
          <h2 className="my-3 text-xl font-bold">Calendar</h2>
          <Calendar />
        </section>
      </main>
    </>
  );
}
