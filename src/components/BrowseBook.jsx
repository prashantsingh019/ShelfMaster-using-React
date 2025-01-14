import { useSelector } from "react-redux";
import Bookcard from "./Bookcard";
import { useState } from "react";
const BrowseBook = () => {
  const data = useSelector((state) => state.books.book);
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState(data);

  const handleClick = () => {
    const searchFilter = filtered.filter((book) => {
      return (
        book.author.toLowerCase().includes(search.toLowerCase()) ||
        book.title.toLowerCase().includes(search.toLowerCase())
      );
    });
    setFiltered(searchFilter);
    setSearch('');
    if(search == ''){
       setFiltered(books_data);
    };
    
  };

  return (
    <div className="flex-1">
      <h1 className="text-center text-5xl text-bold font-mono">Browse Book Page</h1>
      <div className="bg-gray-300 flex justify-center mt-5 gap-2 p-2 mb-2">
        <input
          type="text"
          placeholder="search books here"
          className="p-2 rounded w-80 outline-none"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <button
          className="bg-gray-500 py-1 px-3 rounded-md text-white active:bg-gray-300 "
          onClick={handleClick}

        >
          Search
        </button>
      </div>
      <main className="flex justify-center flex-wrap gap-2">
        {filtered.map((book) => {
          return <Bookcard data={book} key={book.id}/>;
        })}
      </main>
    </div>
  );
};

export default BrowseBook;
