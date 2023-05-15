"use client";
import { ChangeEvent, useState } from "react";

export default function State() {
  const [name, setName] = useState("");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  return (
    <>
      <input type="text" onChange={handleChange} />
      <p>{name}</p>
    </>
  );
}
