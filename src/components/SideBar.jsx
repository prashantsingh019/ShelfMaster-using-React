import React from "react";
import {category} from '../utils/bookList';
function SideBar() {
  return (
    <aside className="bg-violet-400 pt-2">
      <h2>Categories</h2>
      <ul className="nested-ul">
        {category.map((listItem) => {
           return <li>{listItem}</li>
        })}

      </ul>
    </aside>
  );
}

export default SideBar;
