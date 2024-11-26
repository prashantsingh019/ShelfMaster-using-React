import Bookcard from "./Bookcard.JSX";
import "./style.css";
import { useState, useEffect } from "react";
function Main() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://www.googleapis.com/books/v1/volumes?q=subject:fiction"
        );
        if (!response.ok) {
          throw new Error("Issue while fetching data from Api");
        }
        const result = await response.json();

        setData(result.items);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <main>

      
      <section className="book-section flex flex-wrap p-2 gap-2">
        {Object.entries(data).map((book) => {
          return <Bookcard data={book} key={book[1].id} />;
        })}
      </section>
    </main>
  );
}

export default Main;
