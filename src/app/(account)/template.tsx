"use client";
import React, { useState } from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [input, setInput] = useState("");
  return (
    <>
      <h1>Relative routes to useraccount</h1>
      {children}
      <input
        className="text-black bg-white"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </>
  );
};

export default Layout;
