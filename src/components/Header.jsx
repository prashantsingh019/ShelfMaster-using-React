import { Link } from "react-router";
import { useState } from "react";
import { addBook } from "../redux/bookSlice";
import { useDispatch } from "react-redux";
import Form from "./Form";

function Header() {
  const dispatch = useDispatch();
  const [showForm, setShowForm] = useState(false);
  const [bookName, setBookName] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [category, setcategoryName] = useState("");
  const [coverUrl,setCoverUrl] = useState("");
  const toggleForm = () => {
    setShowForm((prev) => !prev);
  };
  const collectData = () => {
    
    if(bookName == '' || authorName == '' || category == ''){
      alert('please fill required details then submit')
    }else{
      let addedBook = {
        title:bookName,
        imageLink:coverUrl,
        author:authorName,
        category:category

      }
      console.log(addedBook);
      
      setCoverUrl('')
      setBookName('') 
      setAuthorName('') 
      setcategoryName('')
      setShowForm(false);
      alert('New book added succesfully');
      dispatch(addBook({addedBook}))
    }
    };
  return (
    <nav className="bg-violet-400 flex items-center justify-between text-2xl p-1 text-white">
      <div className="appName tracking-wide font-semibold">ShelfMaster</div>

      <div className="nav-links flex items-center">
        <ul className="navbar p-2 m-0 flex gap-3 text-xl items-center">
          <li>
            <Link to="/" className="nav-link">
            Home
            </Link>
          </li>

          <li>
            <Link to="/browse+book+page" className="nav-link">
            Browse Books
            </Link>
          </li>

          <li>
            <button
              className="bg-yellow-400 px-2 py-1 rounded-lg text-gray-600"
              onClick={toggleForm}
            >
              {showForm ? "hide form" : "Add+ Book"}
            </button>
            {showForm && <Form fn={setShowForm}/>}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
