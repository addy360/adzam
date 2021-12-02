import Carousel from "../components/Carousel";
import MainContainer from "../components/Layouts/MainContainer";
import RowContainer from "../components/Layouts/RowContainer";

export default function Home() {
  return (
    <MainContainer>
      <section className="h-[200px] md:h-[400px] overflow-hidden ">
        <Carousel />
      </section>

      <RowContainer title="MAX live" />
      <RowContainer title="MAX series" />
      <RowContainer title="MAX highlights" />
      <RowContainer title="MAX movies" />
    </MainContainer>
  );
}
