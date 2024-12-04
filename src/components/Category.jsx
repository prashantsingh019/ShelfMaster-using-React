import React, { useState } from "react";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import Bookcard from "./Bookcard";

function Category() {
  const books = useSelector((state) => state.books.book);
  const param = useParams();
  const newArr = books.filter(
    (book) => book.category.toLowerCase() == param.name.toLowerCase()
  );

  return (
    <div className="flex-1 p-5 sticky top-0">
      <h1 className="text-3xl pb-2">Category: {param.name}</h1>
      <div className="books flex gap-2">
        {newArr
          ? newArr.map((book) => {
              return <Bookcard data={book} />;
            })
          : "No Book Available"}
      </div>
    </div>
  );
}

export default Category;
