import React from "react";

const row = (props) => {
  return (
    <div className="">
      <div className="w-52 bg-black text-white">
        <img
          className="w-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${props.item?.backdrop_path}`}
          alt=""
        />
      </div>
    </div>
  );
};

export default row;
