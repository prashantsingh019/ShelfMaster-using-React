import { Link, useParams } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faLink,faFile,faHouse } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from "react-redux";

function BookDetails() {
  const params = useParams();
  const data = useSelector((state) => state.books.book);
  const selectedBook = data.filter((book) => book.id == params.id);
  
  
  return (
    <div className="flex-1 p-5">
        <div className="flex bg-gray-950 justify-between">
        <div className="w-72 ">
            <img src={`https://raw.githubusercontent.com/benoitvallon/100-best-books/master/static/${selectedBook[0].imageLink}`} alt="" width={"100%"} className="rounded-sm"/>
        </div>
        <div className="bg-violet-400 flex-1 p-5">
         <h1 className="text-2xl font-bold">{selectedBook[0].title}</h1>
        <div className="other-info  text-white text-xl mt-2 font-bold">
         <h3>by  {selectedBook[0].author}</h3>
         <h3>Pages    {selectedBook[0].pages}</h3>
         <h3>Language {selectedBook[0].language}</h3>
         <h3>Country {selectedBook[0].country}</h3>
         <h3>Publication Year {selectedBook[0].year}</h3>
         <h3>Category {selectedBook[0].category}</h3></div>
        </div>
        </div>
      <div className="flex gap-2">
      <button className="text-xl bg-gray-500 p-1 rounded text-white mt-2">
        <Link to="/">
          <FontAwesomeIcon icon={faHouse} /> Home
        </Link>
      </button>
      <button className="text-xl bg-gray-500 p-1 rounded text-white mt-2">
       <Link to="/browse+book+page">
          Back to Browse
        </Link>
      </button>
      <button className="text-xl bg-gray-500 p-1 rounded text-white mt-2">
       <a href={`${selectedBook[0].link}`}>
          Read More using wikipedia
        </a>
      </button>
      </div>
      </div>
    
  );
}

export default BookDetails;
