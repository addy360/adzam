import React from "react";
import Link from "next/link";
const NavItem = ({ icon, href, name }) => {
  return (
    <li className="block">
      <Link href={href}>
        <a className="flex items-center w-full p-4 hover:text-primary-50 hover:bg-primary-50 hover:bg-opacity-30 cursor-pointer transition-colors ">
          <span className="mx-5">{icon}</span>
          <span className="ml-2 text-sm whitespace-nowrap">{name}</span>
        </a>
      </Link>
    </li>
  );
};

export default NavItem;
