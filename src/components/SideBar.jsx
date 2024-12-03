import React from "react";
import {category} from '../utils/bookList';
import { filterBook } from "../redux/bookSlice";
import { useSelector } from "react-redux";
import { useState } from "react"; 
function SideBar() {
  const data = useSelector((state) => state.books.book);
  const [select,setCategory] = useState(" ");
  console.log(select);
  
 data.map((book)=>{
    console.log(book["category"]);
  })
  const handleLiClick = (value) => {
      setCategory(value.toLowerCase());
  }
  const filter = data.filter((book) => book["category"] == "Fairy Tales");
  console.log(typeof filter);
  return (
    <aside className="bg-violet-400 pt-2 w-[200px]">
      <h2>Categories</h2>
      
      <ul className="nested-ul">
        {category.map((listItem,index) => {
           return <li key={index} onClick={()=>handleLiClick(listItem)}>{listItem}</li>
        })}

      </ul>
    </aside>
  );
}

export default SideBar;
