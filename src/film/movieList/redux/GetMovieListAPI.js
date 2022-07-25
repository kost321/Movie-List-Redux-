import { COUNT_OF_ITEMS_ON_PAGE } from "../../../constants";

export const getPostsFromServer = async (count) => {
  const response = await fetch(
    `http://localhost:4000/movies?offset=${count}&limit=${COUNT_OF_ITEMS_ON_PAGE}`
  );
  const responseInJson = await response.json();
  return responseInJson;
};

export const getPostsFromServerFilter = async (filter) => {
  const response = await fetch(`http://localhost:4000/movies?filter=${filter}&limit=${COUNT_OF_ITEMS_ON_PAGE}`);
  const responseInJson = await response.json();
  const posts = responseInJson.data;
  return posts;
};

export const getPostsFromServerSort = async (typeOrder, currentFilter) => {
  const response = await fetch(
    `http://localhost:4000/movies?sortBy=vote_average&sortOrder=${typeOrder}&filter=${currentFilter}&limit=${COUNT_OF_ITEMS_ON_PAGE}`
  );
  const responseInJson = await response.json();
  const posts = responseInJson.data;
  return posts;
};

export const getPostsFromServerSearch = async (value) => {
  const response = await fetch(
    `http://localhost:4000/movies?search=${value}%20&searchBy=title&limit=${COUNT_OF_ITEMS_ON_PAGE}`
  );
  const responseInJson = await response.json();
  const posts = responseInJson.data;
  return posts;
};

export const getPostFromServerById = async (id) => {
  const response = await fetch(`http://localhost:4000/movies/${id}`);
  const post = await response.json();
  return post;
};

export const deletePostsFromServer = async (id) => {
  await fetch(`http://localhost:4000/movies/${id}`, { method: "DELETE" });
};

export const editPostFromServer = async (paramDispatch) => {
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: paramDispatch.valueTitle,
      release_date: paramDispatch.valueRelease,
      poster_path: paramDispatch.valueUrl,
      overview: paramDispatch.valueOverview,
      runtime: +paramDispatch.valueRuntime,
      id: paramDispatch.id,
      genres:[paramDispatch.valueGenres],
    }),
  };
  const response = await fetch(`http://localhost:4000/movies`, requestOptions);
  const post = await response.json();
  return post;
};

export const addPostFromServer = async (paramDispatch) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: paramDispatch.valueTitle,
      release_date: paramDispatch.valueRelease,
      poster_path: paramDispatch.valueUrl,
      overview: paramDispatch.valueOverview,
      runtime: +paramDispatch.valueRuntime,
      genres: [paramDispatch.valueGenres],
    }),
  };
  const response = await fetch(`http://localhost:4000/movies`, requestOptions);
  const post = await response.json();
  return post;
};
