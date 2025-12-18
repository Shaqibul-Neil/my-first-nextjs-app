import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children }) => {
  const pathName = usePathname();

  return (
    <Link
      className={`${pathName.startsWith(href) && "bg-sky-500 px-2 py-2"}`}
      href={href}
    >
      {children}
    </Link>
  );
};

export default NavLink;
