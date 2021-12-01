import React from "react";

const CarouselItem = ({ position, url }) => {
  const activeClasses = "left-1/2 transform -translate-x-1/2 scale group";
  const leftClasses =
    "-left-2/3 transform  translate-x-2/3 scale-90 hover:scale-95";
  const rightClasses =
    "-right-2/3 transform -translate-x-2/3 scale-90 hover:scale-95";
  const classes =
    position === "active"
      ? activeClasses
      : position === "left"
      ? leftClasses
      : position === "right"
      ? rightClasses
      : "";
  return (
    <div
      className={`  h-full w-[700px] rounded-md  inline-block absolute  shadow-md cursor-pointer transition-all overflow-hidden ${classes}`}
    >
      <img
        src={url}
        alt=""
        className="h-full  w-full object-cover object-center group-hover:scale-105 transition-all "
      />
    </div>
  );
};

const Pseudo = ({ which }) => {
  const after =
    "absolute top-0 left-0 bottom-0 w-[50px] bg-gradient-to-r from-black to-transparent ";
  const before =
    "absolute top-0 right-0 bottom-0 w-[50px] bg-gradient-to-l from-black to-transparent ";
  const classes = which === "after" ? after : before;
  return (
    <div
      className={`${classes} z-10 scale-y-90 transition-all group-hover:scale-y-95`}
    ></div>
  );
};

const Carousel = () => {
  const images = [
    "https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dHYlMjBzaG93fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://media.istockphoto.com/photos/black-female-singer-performing-on-stage-picture-id1268225652?b=1&k=20&m=1268225652&s=170667a&w=0&h=_1hHrZcwkp-X_OOsU8L4bovR8aA2485xDk4l0cIPAAc=",
    "https://media.istockphoto.com/photos/american-football-in-action-picture-id492784352?b=1&k=20&m=492784352&s=170667a&w=0&h=k51vKGRg6_iPdZtYOR48eFcbhpTfmA2IoZbsy6D1Ka8=",
  ];
  return (
    <div className="h-full w-full  mx-auto relative  overflow-hidden group whitespace-nowrap  ">
      <Pseudo />
      <CarouselItem position="left" url={images[0]} />
      <CarouselItem position="active" url={images[1]} />
      <CarouselItem position="right" url={images[2]} />
      <Pseudo which="after" />
    </div>
  );
};

export default Carousel;
