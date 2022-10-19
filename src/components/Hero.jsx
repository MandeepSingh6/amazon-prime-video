import React, { useEffect, useState } from "react";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
import axios from "axios";
import HeroMovie from "./HeroMovie";

const Hero = () => {
  const winWidth = window.innerWidth;
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=88b1ae57b6a3cc5e1076c14d72ecb7ab&language=en-US&page=1"
      )
      .then((res) => {
        setMovies(res.data.results.slice(0, 8));
      });
  }, []);

  const slideLeft = () => {
    let slider = document.querySelector("#slider");
    slider.scrollLeft = slider.scrollLeft - winWidth;
  };
  const slideRight = (e) => {
    let slider = document.querySelector("#slider");
    slider.scrollLeft = slider.scrollLeft + winWidth;
  };

  return (
    <div className="">
      <div className="w-screen max-h-80 text-white relative">
        <AiOutlineLeft
          onClick={slideLeft}
          className="z-10 absolute top-[50%] -translate-y-[50%] left-1 cursor-pointer text-2xl"
        />

        <AiOutlineRight
          onClick={slideRight}
          className="z-10 absolute top-[50%] -translate-y-[50%] right-4 cursor-pointer text-2xl"
        />
        <div
          id="slider"
          className="snap-x snap-mandatory flex overflow-x-scroll scroll-smooth whitespace-nowrap scroll-smoothe scrollbar-hide relative">
          {movies.map(
            (item, id) =>
              item?.backdrop_path && <HeroMovie item={item} key={id} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
