import { createSlice } from "@reduxjs/toolkit";
import { books_data } from '../utils/bookList';
const bookSlice = createSlice({
    name:'book',
    initialState: {
        book:books_data,
    },
    reducers:{
        addBook:(state,action)=>{
            state.book.push(action.payload)
            console.log(action);
        },
        filterBook:(state,action)=>{
            state.book = action.payload;
        }
    }
})



export const{addBook, filterBook} = bookSlice.actions;
export default bookSlice.reducer;