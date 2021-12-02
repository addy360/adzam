import React from "react";
import Carousel from "../components/Carousel";
import MainContainer from "../components/Layouts/MainContainer";
import RowContainer from "../components/Layouts/RowContainer";

const Movies = () => {
  return (
    <MainContainer title="Moviess">
      <section className="h-[200px] md:h-[400px] overflow-hidden ">
        <Carousel />
      </section>

      <RowContainer title="English" />
      <RowContainer title="Bongo Movies" />
    </MainContainer>
  );
};

export default Movies;
