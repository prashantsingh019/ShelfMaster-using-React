import React from "react";
import { category } from "../utils/bookList";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

function SideBar() {
  const navigate = useNavigate();
  const data = useSelector((state) => state.books.book);
  const handleCategory = (value) => {
    const formattedCategory = value.replace(/ /g, "-");
    navigate(`/category/${formattedCategory}`);
  };
  return (
    <aside className="bg-violet-400 pt-2">
      <h2>Categories</h2>

      <ul className="nested-ul">
        {category.map((listItem, index) => {
          return (
            <li
              onClick={() => handleCategory(listItem)}
              key={index}
              className="cursor-pointer side-bar-li"
            >
              {listItem}
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

export default SideBar;
