import React from "react";
import Carousel from "../components/Carousel";
import MainContainer from "../components/Layouts/MainContainer";
import RowContainer from "../components/Layouts/RowContainer";

const TvSeries = () => {
  return (
    <MainContainer title="Tv Series">
      <section className="h-[200px] md:h-[400px] overflow-hidden ">
        <Carousel />
      </section>

      <RowContainer title="Action" />
      <RowContainer title="Drama" />
      <RowContainer title="Crime" />
    </MainContainer>
  );
};

export default TvSeries;
