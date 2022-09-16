import { combineReducers, configureStore, createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    setUser: (state, action) => {
      const user = action.payload;
      if (user === null) return null;
      return {
        user,
      };
    },
  },
});

const movieSlice = createSlice({
  name: "movie",
  initialState: [],
  reducers: {
    setMovieList: (state, action) => {
      const movies = action.payload;
      if (movies === null) return null;
      return [...movies];
    },
  },
});

const searchListSlice = createSlice({
  name: "searchList",
  initialState: [],
  reducers: {
    setSearchList: (state, action) => {
      const movies = action.payload;
      if (movies === null) return null;
      return [...movies];
    },
  },
});

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    activeTheme: "light",
  },
  reducers: {
    toggleTheme: (state) => {
      return {
        activeTheme: state.activeTheme === "light" ? "dark" : "light",
      };
    },
  },
});

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
  },
  reducers: {
    signIn: (state, action) => {
      state.user = action.payload;
    },
    logOut: (state, action) => {
      state.user = null;
    },
  },
});
const homeTagsSlice = createSlice({
  name: "homeTags",
  initialState: [],
  reducers: {
    setHomeTags: (state, action) => {
      const tags = action.payload;
      if (tags === null) return null;
      return [...tags];
    },
  },
});
const homeNewReleasesSlice = createSlice({
  name: "homeNewReleases",
  initialState: [],
  reducers: {
    setHomeNewReleases: (state, action) => {
      const musics = action.payload;
      if (musics === null) return null;
      return [...musics];
    },
  },
});
export const { signIn,logOut } = authSlice.actions;
export const { setUser } = userSlice.actions;
export const { toggleTheme } = themeSlice.actions;
export const { setMovieList } = movieSlice.actions;
export const { setSearchList } = searchListSlice.actions;
export const { setHomeTags } = homeTagsSlice.actions;
export const { setHomeNewReleases } = homeNewReleasesSlice.actions;
export const store = configureStore({
  reducer: combineReducers({
    user: userSlice.reducer,
    theme: themeSlice.reducer,
    movie: movieSlice.reducer,
    searchList: searchListSlice.reducer,
    auth: authSlice.reducer,
    homeTags:homeTagsSlice.reducer,
    homeNewReleases:homeNewReleasesSlice.reducer
  }),
});
