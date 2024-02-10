import axios from "axios";
const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNjMwYzljOTUyYTJlYWE4NjI2YWZiY2VmMTBmZWQ0YyIsInN1YiI6IjY1MTMwMzE5ZTFmYWVkMDEzYTBjYTA3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vKDM-c92tZ6pvilaFfBNkuOlTtAg7rX7Vum8QlVOkBg";
const headers = {
  authorization: "bearer " + TMDB_TOKEN,
};
export const fetchDataFromApi = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, { headers, params });
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
