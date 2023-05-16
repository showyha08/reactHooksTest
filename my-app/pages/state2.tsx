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
      <br></br>
      <Child1 text={name} />
      <br></br>
      <Child2 text={name} />
    </>
  );
}

function Child1({ text = "" }: { text: string }) {
  return <>子コンポーネント1: {text} </>;
}

function Child2({ text = "" }: { text: string }) {
  const [name2, setName2] = useState(text);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName2(e.target.value);
  };
  return (
    // 子コンポーネント2:は再描画されないようにみえる
    // これはReact.Fragmentのせい
    <>
      子コンポーネント2:
      <input type="text" onChange={handleChange} />
    </>
  );
}
