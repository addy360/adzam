import React from "react";

const NavItem = ({ icon, href, name }) => {
  return (
    <li className="block">
      <a
        href="#"
        className="flex items-center p-4 hover:text-primary-50 hover:bg-primary-50 hover:bg-opacity-30 cursor-pointer transition-colors "
      >
        {icon}
      </a>
    </li>
  );
};

export default NavItem;
