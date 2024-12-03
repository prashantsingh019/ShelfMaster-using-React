import Bookcard from "./Bookcard.JSX";
import { useState } from "react";
import { useSelector } from "react-redux";

function Home({ searchText, data }) {
  
  const books = useSelector((state) => state.books.book);

  return (
    <main className="book-section flex flex-wrap gap-x-3 gap-y-1 justify-center pt-2">
      {books.map((book) => {
        return <Bookcard data={book} key={book["id"]}/>
      })}
    </main>
  );
}

export default Home;
