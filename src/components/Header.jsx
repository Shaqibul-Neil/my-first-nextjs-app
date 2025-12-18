"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NavLink from "./NavLink";

const Header = () => {
  const pathName = usePathname();
  console.log(pathName);
  if (pathName.startsWith("/dashboard")) return <></>;
  return (
    <header className="px-4 py-3 border-b border-gray-400 flex items-center justify-between">
      <Link href={"/"} className="text-lg font-semibold">
        Dev-story
      </Link>
      <nav className="space-x-5">
        {/* <a href="/about">About</a> */}
        <NavLink href="/about">About</NavLink>
        <NavLink href="/tutorials">Tutorials</NavLink>
        <NavLink href="/dashboard">Dashboard</NavLink>
        <NavLink href="/stories">Stories</NavLink>
        <NavLink href="/login">Login</NavLink>
        <NavLink href="/register">Register</NavLink>
      </nav>
    </header>
  );
};

export default Header;
