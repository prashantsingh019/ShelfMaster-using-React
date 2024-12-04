import React from "react";
import { category } from "../utils/bookList";
import { filterBook } from "../redux/bookSlice";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Link } from "react-router";

function SideBar() {
  const data = useSelector((state) => state.books.book);

  return (
    <aside className="bg-violet-400 pt-2 w-[200px]">
      <h2>Categories</h2>

      <ul className="nested-ul">
        {category.map((listItem, index) => {
          return (
            <Link to={`${listItem.toLowerCase()}`}>
              <li key={index} onClick={() => handleLiClick(listItem)}>
                {listItem}
              </li>
            </Link>
          );
        })}
      </ul>
    </aside>
  );
}

export default SideBar;
