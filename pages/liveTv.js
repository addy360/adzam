import React from "react";
import Carousel from "../components/Carousel";
import MainContainer from "../components/Layouts/MainContainer";
import RowContainer from "../components/Layouts/RowContainer";

const LiveTv = () => {
  return (
    <MainContainer title="Live Tv">
      <section className="h-[200px] md:h-[400px] overflow-hidden ">
        <Carousel />
      </section>

      <RowContainer title="Sports" />
      <RowContainer title="Music" />
      <RowContainer title="News" />
      <RowContainer title="Documentary" />
    </MainContainer>
  );
};

export default LiveTv;
