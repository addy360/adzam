import React from "react";

const RowContainerItem = () => {
  return (
    <div className="w-[150px] md:w-[200px] h-[80px] md:h-[100px] cursor-pointer shadow-md hover:shadow-2xl hover:scale-110 transition-all flex-shrink-0  overflow-hidden rounded-md">
      <img
        src="https://source.unsplash.com/random"
        className="h-full w-full object-cover object-center"
        alt=""
      />
    </div>
  );
};

const RowContainer = ({ title }) => {
  return (
    <section className="my-5  w-full p-5  ">
      <h1 className="font-light md:text-2xl">{title}</h1>
      <div className="overflow-x-auto w-full p-5  flex md:gap-10 gap-5">
        <RowContainerItem />
        <RowContainerItem />
        <RowContainerItem />
        <RowContainerItem />
        <RowContainerItem />
        <RowContainerItem />
        <RowContainerItem />
      </div>
    </section>
  );
};

export default RowContainer;
