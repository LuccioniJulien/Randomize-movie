import {
  BASE_API,
  MOVIE_GENRE,
  MOVIE,
  MOVIE_POPULAR,
  MOVIE_DISCOVER
} from "../constant/api";
import axios from "axios";

import api_key from "../../env";

export const getMovieGenre = () => {
  return axios({
    method: "get",
    url: BASE_API + MOVIE_GENRE,
    params: { api_key, language: "en-US" },
    headers: {
      "Content-Type": "application/json"
    }
  });
};

export const getMovieDetail = id => {
  return axios({
    method: "get",
    url: BASE_API + MOVIE + `${id}`,
    params: { api_key, language: "en-US" },
    headers: {
      "Content-Type": "application/json"
    }
  });
};

export const getTotalPagesOfMoviesWithFilter = params => {
  return axios({
    method: "get",
    url: BASE_API + MOVIE_DISCOVER,
    params: { api_key, language: "en-US", ...params },
    headers: {
      "Content-Type": "application/json"
    }
  });
};

export const getRandomPageOfMoviesWithFilter = params => {
  return axios({
    method: "get",
    url: BASE_API + MOVIE_DISCOVER,
    params: { api_key, language: "en-US", ...params },
    headers: {
      "Content-Type": "application/json"
    }
  });
};

export const getRandomPageOfMovies = page => {
  return axios({
    method: "get",
    url: BASE_API + MOVIE_POPULAR,
    params: { api_key, language: "en-US", page },
    headers: {
      "Content-Type": "application/json"
    }
  });
};
