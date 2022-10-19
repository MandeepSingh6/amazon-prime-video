import React from "react";
import Rows from "./Rows";
const RowsHome = () => {
  const key = "88b1ae57b6a3cc5e1076c14d72ecb7ab";
  return (
    <div className="">
      <Rows
        url={`https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`}
        title={"Upcoming Movies"}
      />
      <Rows
        url={`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`}
        title={"Top Rated"}
      />
      <Rows
        url={`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=2`}
        title={"Popular"}
      />
      <Rows
        url={`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`}
        title={"Must Watch"}
      />
      <Rows
        url={`https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=horror&page=1`}
        title={"Horror"}
      />
    </div>
  );
};

export default RowsHome;
