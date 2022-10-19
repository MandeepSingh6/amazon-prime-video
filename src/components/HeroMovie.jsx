import React, { useEffect, useState } from "react";

const HeroMovie = (props) => {
  return (
    <div className="">
      <div className="w-screen max-h-80 mt-2 text-white relative">
        <img
          className="snap-center w-full  max-h-80 object-cover"
          src={`https://image.tmdb.org/t/p/original/${props.item?.backdrop_path}`}
          alt=""
        />
      </div>
    </div>
  );
};

export default HeroMovie;
