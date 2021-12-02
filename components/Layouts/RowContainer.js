import React from "react";

const RowContainerItem = () => {
  return (
    <div className="w-[200px] h-[100px] cursor-pointer shadow-md hover:shadow-2xl hover:scale-110 transition-all flex-shrink-0  overflow-hidden rounded-md">
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
      <h1 className="font-light text-2xl">{title}</h1>
      <div className="overflow-x-auto w-full p-5  flex gap-10">
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
