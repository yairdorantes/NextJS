"use client";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  const handleClick = () => {
    console.log("return ");
    router.push("/products");
  };
  return (
    <div className="p-6">
      <h1>login</h1>
      <button onClick={handleClick}>return button</button>
    </div>
  );
};

export default Page;
