"use client";

import Header from "@/components/header";
import { ChangeEventHandler, useState } from "react";

export default function Home() {
  const [userName, setUserName] = useState<string>("初期値");

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    event.preventDefault();
    setUserName(event.target.value);
  };

  return (
    <>
      <Header className="py-6" />
      <main className="bg-gray-300 px-5 py-5">
        <h1>/menu/page</h1>
        <form>
          <input
            className="rounded-md border px-2 py-1 text-black"
            value={userName}
            onChange={handleChange}
          />
        </form>
        <p>{userName}</p>
      </main>
    </>
  );
}
