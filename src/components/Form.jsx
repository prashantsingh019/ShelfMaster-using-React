import { useDispatch } from "react-redux";
import { addBook } from "../redux/bookSlice";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router";

const Form = ({ fn }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    author: "",
    country: "",
    imageLink: "",
    language: "",
    link: "",
    pages: "",
    title: "",
    year: "",
    id: "",
    isPopular: "",
    category: "",
  });

  const dispatching = (data) => {
    const newBook = { ...data, id: uuidv4() };
    dispatch(addBook(newBook));
  };

  const handleForm = (e) => {
    e.preventDefault();
    alert("button clicked");
    console.log(formData);
    fn(false);
    dispatching(formData);
    navigate("/browse+book+page")
  };
  const handleChange = (e) => {
    const { value, name } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="form absolute text-center right-5 top-15 flex justify-center flex-col items-center bg-gray-400 rounded-lg">
      <h3>New Book Form</h3>
      <div className="form-container opacity-100 px-5">
        <form onSubmit={handleForm}>
          <div className="form-controls">
            <input
              type="text"
              name="title"
              placeholder="book name"
              onChange={handleChange}
              value={formData.title}
              required
            />
          </div>
          <div className="form-controls">
            <input
              type="text"
              name="author"
              placeholder="author"
              onChange={handleChange}
              value={formData.author}
              required
            />
          </div>
          <div className="form-controls">
            <input
              type="text"
              name="country"
              placeholder="country"
              onChange={handleChange}
              value={formData.country}
              required
            />
          </div>
          <div className="form-controls">
            <input
              type="text"
              name="language"
              placeholder="language"
              onChange={handleChange}
              value={formData.language}
              required
            />
          </div>
          <div className="form-controls">
            <input
              type="text"
              name="year"
              placeholder="publication Year"
              onChange={handleChange}
              value={formData.year}
              required
            />
          </div>
          <div className="form-controls">
            <input
              type="text"
              name="category"
              placeholder="category"
              onChange={handleChange}
              value={formData.category}
              required
            />
          </div>
          <div className="form-controls">
            <input
              type="url"
              name="imageLink"
              placeholder="provideUrl"
              onChange={handleChange}
              value={formData.imageLink}
              required
            />
          </div>
          <div className="form-controls">
            <input
              type="text"
              name="pages"
              placeholder="pages"
              onChange={handleChange}
              value={formData.pages}
              required
            />
          </div>

          <div className="form-controls">
            <input type="submit" name="submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
