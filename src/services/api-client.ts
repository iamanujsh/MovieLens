import axios from "axios";

export default axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "7863fb9d4d21f8ba7cd67ac8ab423546",
  },
});
