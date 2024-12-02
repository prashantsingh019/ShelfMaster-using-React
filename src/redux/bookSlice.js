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
        }
    }
})



export const{addBook} = bookSlice.actions;
export default bookSlice.reducer;