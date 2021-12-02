import React, { useEffect, useState } from "react";

const RowContainerItem = () => {
  const [url, setUrl] = useState(null);
  useEffect(() => {
    fetchRandomImage();
  }, []);

  const fetchRandomImage = async () => {
    const apiUrl = "https://source.unsplash.com/random";
    const res = await fetch(apiUrl);
    setUrl(res.url);
  };
  return (
    <div className="w-[150px] md:w-[200px] h-[80px] md:h-[100px] cursor-pointer shadow-md hover:shadow-2xl hover:scale-110 transition-all flex-shrink-0  overflow-hidden rounded-md">
      {!url ? (
        <h4>Loading</h4>
      ) : (
        <img
          src={url}
          className="h-full w-full object-cover object-center"
          alt=""
        />
      )}
    </div>
  );
};

const RowContainer = ({ title }) => {
  return (
    <section className="md:my-5 my-2  w-full md:p-5 p-2 ">
      <h1 className="font-light md:text-2xl">{title}</h1>
      <div className="overflow-x-auto w-full md:p-5 p-2 flex md:gap-10 gap-5">
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
