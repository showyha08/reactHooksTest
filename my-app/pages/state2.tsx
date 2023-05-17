"use client";
import React, { ChangeEvent, useState } from "react";

export default function State2() {
  const [name, setName] = useState("");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  return (
    <>
      <input type="text" onChange={handleChange} />
      <Child1 text={name} />
      {/* XML構文なので <br>ではエラー */}
      <br />
      <Child2 text={name} />
    </>
  );
}

function Child1({ text = "" }: { text: string }) {
  return <p>子コンポーネント1: {text}</p>;
}

function Child2({ text = "" }: { text: string }) {
  const [name2, setName2] = useState(text);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName2(e.target.value);
  };
  return (
    // ハイライトが当たらず子コンポーネント2:は再描画されていないようにみえる
    <>
      子コンポーネント2:
      <input type="text" onChange={handleChange} />
    </>
  );
}
