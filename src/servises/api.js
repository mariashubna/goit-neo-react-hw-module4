import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";

axios.defaults.headers.common["Authorization"] =
  "Client-ID XRE9C_9Z_HSCuUE9wswRGX3a6afW_cC1JfieO7mJPNg";

export const searchPhotos = async (query, page) => {
  const { data } = await axios("/search/photos", {
    params: {
      query,
      page,
      per_page: 24,
    },
  });
  return data;
};
