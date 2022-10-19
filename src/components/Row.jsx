import React from "react";

const row = (props) => {
  return (
    <div className="">
      <div className="w-52 text-white relative group">
        <img
          className="w-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${props.item?.backdrop_path}`}
          alt=""
        />
        <div className="w-full top-0 left-0 absolute h-full bg-black opacity-75 hidden group-hover:block m-0"></div>
        <div className="hidden absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-xs group-hover:block">
          {props.item?.title}
        </div>
      </div>
    </div>
  );
};

export default row;
