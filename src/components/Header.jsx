import Link from "next/link";

const Header = () => {
  return (
    <header className="px-4 py-3 border-b border-gray-400 flex items-center justify-between">
      <Link href={"/"} className="text-lg font-semibold">
        Dev-story
      </Link>
      <nav className="space-x-5">
        {/* <a href="/about">About</a> */}
        <Link href="/about">About</Link>
        <Link href="/tutorials">Tutorials</Link>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/stories">Stories</Link>
        <Link href="/login">Login</Link>
        <Link href="/register">Register</Link>
      </nav>
    </header>
  );
};

export default Header;
