"use client";
import { ChangeEvent, useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  return (
    <>
      <div className="container">
        <input
          type="text"
          placeholder="Name"
          className="bg-slate-500"
          onChange={handleChange}
        />
      </div>
      <div className="container text-white">
        <p>{name}</p>
      </div>
    </>
  );
}
