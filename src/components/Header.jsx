import { Link } from "react-router";
import { useState } from "react";
function Header() {
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
        name:bookName,
        url:coverUrl,
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
    }
    };
  return (
    <nav className="bg-violet-400 flex items-center justify-between text-2xl p-1 text-white">
      <div className="appName tracking-wide font-semibold">ShelfMaster</div>

      <div className="nav-links flex items-center">
        <ul className="navbar p-2 m-0 flex gap-3 text-xl items-center">
          <li>
            <Link to="/" class="nav-link">
            Home
            </Link>
          </li>

          <li>
            <Link to="/browse+book+page" class="nav-link">
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
            {showForm && (
              <div className="addBookForm absolute">
                <h4>Add Book Form</h4>
                <div className="form-controls">
                  <input
                    type="text"
                    placeholder="paste cover url here"
                    id="category"
                    value={coverUrl}
                    onChange={(e) => setCoverUrl(e.target.value)}
                  />
                </div>
                <div className="form-controls">

                  <input
                    type="text"
                    placeholder="enter book name"
                    id="bookName"
                    value={bookName}
                    onChange={(e) => setBookName(e.target.value)}
                  />
                </div>
                <div className="form-controls">
                  <input
                    type="text"
                    placeholder="enter author name"
                    id="authorName"
                    value={authorName}
                    onChange={(e) => setAuthorName(e.target.value)}
                  />
                </div>

                <div className="form-controls">
                  <input
                    type="text"
                    placeholder="enter category for this book"
                    id="category"
                    value={category}
                    onChange={(e) => setcategoryName(e.target.value)}
                  />
                </div>
               
                <div className="form-controls">
                  <button
                    className="bg-yellow-400 px-2 py-1 rounded-lg"
                    onClick={collectData}
                  >
                    Add+ Book
                  </button>
                </div>
              </div>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
