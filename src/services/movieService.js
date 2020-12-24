import http from "../services/httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/movies";

function movieUrl(id) {
  return `${apiEndpoint}/${id}`;
}

export function getMovies() {
  return http.get(apiEndpoint);
}

export function getMovie(movieId) {
  return http.get(movieUrl(movieId));
}

export function saveMovie(movie) {
  if (movie._id) {
    const body = { ...movie };
    delete body._id;
    return http.put(movieUrl(movie._Id), body);
  }

  return http.post(apiEndpoint, movie);
  // return http.post(apiEndpoint + "/" + movieId);
}

export function deleteMovie(movieId) {
  return http.delete(movieUrl(movieId));
}
