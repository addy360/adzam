import React from "react";
import NavItem from "./NavItem";
import { AiOutlineHome, AiOutlineDollarCircle } from "react-icons/ai";
import { IoIosFootball } from "react-icons/io";
import { BsSearch } from "react-icons/bs";
import { BiCameraMovie } from "react-icons/bi";
import { CgScreen } from "react-icons/cg";
import { RiLiveLine } from "react-icons/ri";

const Nav = () => {
  return (
    <nav>
      <ul>
        <NavItem
          name="home"
          href="/"
          icon={<AiOutlineHome className="text-3xl" />}
        />

        <NavItem
          name="Movies"
          href="/movies"
          icon={<BiCameraMovie className="text-3xl" />}
        />

        <NavItem
          name="sports"
          href="/sports"
          icon={<IoIosFootball className="text-3xl" />}
        />

        <NavItem
          name="Search"
          href="/search"
          icon={<BsSearch className="text-3xl" />}
        />

        <NavItem
          name="Tv Series"
          href="/tvSeries"
          icon={<CgScreen className="text-3xl" />}
        />

        <NavItem
          name="Subscriptions"
          href="/subscription"
          icon={<AiOutlineDollarCircle className="text-3xl" />}
        />

        <NavItem
          name="Live TV"
          href="/liveTv"
          icon={<RiLiveLine className="text-3xl" />}
        />
      </ul>
    </nav>
  );
};

export default Nav;
