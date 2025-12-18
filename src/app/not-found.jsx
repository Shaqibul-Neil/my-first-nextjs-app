import Link from "next/link";
import React from "react";

const NotFound404 = () => {
  return (
    <div className="flex justify-center items-center min-h-screen flex-col gap-5">
      <h2>404 Your page not found my first app</h2>
      <Link href={"/"} className="underline">
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound404;
