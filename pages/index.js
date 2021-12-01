import Carousel from "../components/Carousel";
import MainContainer from "../components/Layouts/MainContainer";

export default function Home() {
  return (
    <MainContainer>
      <section className="h-[200px] md:h-[400px] overflow-hidden ">
        <Carousel />
      </section>
    </MainContainer>
  );
}
