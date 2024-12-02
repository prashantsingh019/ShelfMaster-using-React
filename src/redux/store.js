import { configureStore } from "@reduxjs/toolkit";
import booksGetData from './bookSlice'
const store = configureStore({
    reducer:{
      books:booksGetData,
    }
});

export default store;