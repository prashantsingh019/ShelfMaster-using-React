import React from "react";

function SideBar() {
  return (
    <aside className="bg-violet-400">
      <ul>
        <li>Categories</li>
        <ul className="nested-ul">
          <li>Best seller</li>
          <li>Fiction</li>
          <li>Non-Fiction</li>
          <li>Novel</li>
          <li>Sci-Fi</li>
          <li>Spirtual</li>
          <li>Biography</li>
          <li>Auto-Biography</li>
          <li>Self-Help</li>
          <li>Adventure</li>
          <li>Horror</li>
          <li>History</li>
          <li>Business/Economics</li>
        </ul>
      </ul>
    </aside>
  );
}

export default SideBar;
