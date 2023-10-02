"use client";

import axios from "axios";
import { useEffect, useState } from "react";

const TMDB_BASE_URL = "https://api.themoviedb.org/3/movie";
const API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNGI1YzJlYWEyZWMzYjg2OTc3MzFkZTQ0YTYwZmYyMiIsInN1YiI6IjY0ZjA2ZmU0ZTBjYTdmMDEyZWIyNTgyYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HRtG11lsk1mewElnHiLDoU8JgXGT_5VdkC9nmPGREyc";
type headingProps = {
  path: string;
  params: object;
};

interface Movie{
    title: string;
    release_date: number;
}

const Movies = () => {
  const [movies, setMovies] = useState([]);

  
  const getMovies = async ({ path, params }: headingProps) => {
    await axios
      .get(`${TMDB_BASE_URL}/${path}`, {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          Accept: "application/json",
        },
        params: params,
      })
      .then((response) => {
        const result = response.data.results;
        setMovies(result);
        console.log("Movies", result);
      })
      .catch((err) => {
        console.log("There was error in getting movies", err);
      });
  };

  useEffect(() => {
    getMovies({ path: "popular", params: {} });
  }, []);

  return (
    <div>
      {movies.map((movie: Movie) => (
        <div>
          <h1>{movie.title}</h1>
          <h6>{movie.release_date}</h6>
        </div>
      ))}
    </div>
  );
};

export default Movies;
