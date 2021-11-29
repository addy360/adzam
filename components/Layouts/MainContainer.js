import React from "react";
import Head from "next/head";
import Nav from "../Navigation/Nav";
const MainContainer = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title ? title : "Adzam | home of entertainment"}</title>
      </Head>
      <div className="bg-primary-500 text-white h-screen w-screen">
        <div className="fixed top-4 bottom-0 left-0 w-[7%] hover:w-[18%] overflow-hidden transition-all bg-primary z-10 ">
          <h1 className="text-2xl uppercase text-center mb-5">Adzam</h1>
          <Nav />
        </div>
        <div className="fixed top-4 bottom-0 right-0 w-[93%]  ">{children}</div>
      </div>
    </>
  );
};

export default MainContainer;
