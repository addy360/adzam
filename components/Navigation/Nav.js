import React from "react";
import NavItem from "./NavItem";
import { AiOutlineHome } from "react-icons/ai";
const Nav = () => {
  return (
    <nav>
      <ul>
        <NavItem name="home" icon={<AiOutlineHome className="mx-7" />} />

        <NavItem name="home" icon={<AiOutlineHome className="mx-7" />} />

        <NavItem name="home" icon={<AiOutlineHome className="mx-7" />} />

        <NavItem name="home" icon={<AiOutlineHome className="mx-7 " />} />
      </ul>
    </nav>
  );
};

export default Nav;
