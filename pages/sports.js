import React from "react";
import Carousel from "../components/Carousel";
import MainContainer from "../components/Layouts/MainContainer";
import RowContainer from "../components/Layouts/RowContainer";

const Sports = () => {
  return (
    <MainContainer title="sports">
      <section className="h-[200px] md:h-[400px] overflow-hidden ">
        <Carousel />
      </section>

      <RowContainer title="Leagues" />
      <RowContainer title="Recent Added Sports" />
      <RowContainer title="Friendly Match" />
    </MainContainer>
  );
};

export default Sports;
