import Head from "next/head";
import React from "react";
import Nav from "../Navigation/Nav";
const MainContainer = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title ? title : "Adzam | home of entertainment"}</title>
      </Head>
      <div className="bg-primary-500 text-white h-screen w-screen pt-5 overflow-y-auto overflow-x-hidden ">
        <div className=" h-full w-[88px] group  hover:w-[243px] fixed  top-0 bottom-0 left-0 overflow-hidden transition-all bg-primary z-20 ">
          <h1 className="md:text-2xl font-serif font-semibold animate-pulse uppercase text-center my-5 ">
            Adzam
          </h1>
          <Nav />
          <div className=" flex flex-col gap-3 mt-5  px-5 text-sm ">
            <button className="mx-auto inline-block w-full whitespace-nowrap px-3 py-1 text-center border border-transparent group-hover:border-white transition-all rounded-md ">
              Register
            </button>

            <button className="mx-auto inline-block px-3 w-full py-1 text-center whitespace-nowrap  rounded-md text-secondary group-hover:bg-secondary group-hover:text-white transition-all hover:shadow-md">
              Log In
            </button>
          </div>
        </div>
        <div className=" ml-[88px] " style={{ width: "calc(100vw - 88px)" }}>
          <div className=" h-full w-full overflow-x-hidden overflow-y-auto">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default MainContainer;
