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
  return new Promise((resolve, reject) =>
    axios({
      method: "get",
      url: BASE_API + MOVIE_GENRE,
      params: { api_key, language: "en-US" },
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => resolve(response))
      .catch(error => reject(error))
  );
};

export const getMovieDetail = id => {
  return new Promise((resolve, reject) =>
    axios({
      method: "get",
      url: BASE_API + MOVIE + `${id}`,
      params: { api_key, language: "en-US" },
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(reponse => resolve(reponse))
      .catch(error => reject(error))
  );
};

export const getTotalPagesOfMoviesWithFilter = params => {
  console.log(params);
  return new Promise((resolve, reject) =>
    axios({
      method: "get",
      url: BASE_API + MOVIE_DISCOVER,
      params: { api_key, language: "en-US", ...params },
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(reponse => resolve(reponse.data.total_pages))
      .catch(error => reject(error))
  );
};

export const getRandomPageOfMoviesWithFilter = params => {
  return new Promise((resolve, reject) =>
    axios({
      method: "get",
      url: BASE_API + MOVIE_DISCOVER,
      params: { api_key, language: "en-US", ...params },
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(reponse => resolve(reponse))
      .catch(error => reject(error))
  );
};

export const getRandomPageOfMovies = page => {
  return new Promise((resolve, reject) =>
    axios({
      method: "get",
      url: BASE_API + MOVIE_POPULAR,
      params: { api_key, language: "en-US", page },
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => resolve(response))
      .catch(error => reject(error))
  );
};
