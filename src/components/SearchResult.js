import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function SearchResult() {
  const { movie } = useParams();
  const [check, setcheck] = useState();
  console.log(movie);

  const url = `https://imdb-api.com/en/API/Search/k_23gkyn82/${movie}`;
  useEffect(() => {
    async function fun1() {
      const result = await axios.get(url);
      console.log(result.data.results);
      setcheck(result.data.results)
    }
    fun1();
  },[url]);
  console.log(check)

  return (
    <div className="movieCards">
      {check?.map((movie) => {
        return (
          <div className="movieCard">
            <Link className= 'searchLink' to={`/movie/${movie.id}`}> 
              <img alt='img' src={movie.image} className="searchImg" />
              <h2 className="searchTitle">{movie.title}</h2>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default SearchResult;
