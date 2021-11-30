import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
const NavItem = ({ icon, href, name }) => {
  const { pathname } = useRouter();

  const activeClasses =
    pathname === href && `text-primary-50 bg-primary-50 bg-opacity-20`;

  return (
    <li className="block">
      <Link href={href}>
        <a
          className={`flex items-center w-full p-4 hover:text-primary-50 hover:bg-primary-50 hover:bg-opacity-10 cursor-pointer transition-colors ${activeClasses} `}
        >
          <span className="mx-5">{icon}</span>
          <span className="ml-2 text-sm whitespace-nowrap group-hover:opacity-100 opacity-0 transition-all ">
            {name}
          </span>
        </a>
      </Link>
    </li>
  );
};

export default NavItem;
