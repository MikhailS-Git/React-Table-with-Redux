import { configureStore, combineReducers } from "@reduxjs/toolkit";
import postsReducer from "./postsSlice";
import searchReducer from "./searchSlice";

const rootReducer = combineReducers({
    posts: postsReducer,
    search: searchReducer
})

const store = configureStore({
    reducer: rootReducer
})

export default store