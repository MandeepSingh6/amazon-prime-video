import React, { useEffect, useState } from "react";
import axios from "axios";
import Row from "./Row";
const Rows = (props) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(props.url).then((res) => {
      setMovies(res.data.results);
    });
  }, []);

  return (
    <div className="">
      <h2 className=" pl-2 text-white mt-6">{props.title}</h2>
      <div className="pl-1 w-screen flex gap-1 overflow-x-scroll scrollbar-hide">
        {movies.map(
          (item, id) => item?.backdrop_path && <Row item={item} key={id} />
        )}
      </div>
    </div>
  );
};

export default Rows;
