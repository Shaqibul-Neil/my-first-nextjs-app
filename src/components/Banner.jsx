"use client";

import { useRouter } from "next/navigation";

const Banner = () => {
  const router = useRouter();

  const handleBtn = () => {
    const password = prompt("Enter Your Password");
    if (password === "1234") {
      console.log(router);
      router.push("/dashboard");
    }
  };
  return (
    <div className="space-y-5 text-center bg-linear-60 from-sky-50 to-sky-200 text-black p-16">
      <h2 className="text-4xl">Welcome to Dev story</h2>
      <button
        onClick={handleBtn}
        className="px-4 py-2 bg-sky-500 text-white rounded-2xl cursor-pointer hover:text-black transition-all duration-300"
      >
        Share Story
      </button>
    </div>
  );
};

export default Banner;
