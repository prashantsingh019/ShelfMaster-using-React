import { Link } from "react-router";
function Bookcard({ data }) {
  return (
    <div className="card flex flex-col gap-2 py-2 px-5 bg-[#FFE5B4] w-[22%] rounded-lg justify-between shadow-lg">
      <div className="img_container flex justify-center">
        <img
          src={`https://raw.githubusercontent.com/benoitvallon/100-best-books/master/static/${data["imageLink"]}`}
          alt="_broken"
          className="p-0"
          width={"100px"}
          height={"100px"}
        />
      </div>
      <div className="text-sect">
        <div className="title text-xl font-bold">{data["title"]}</div>

        <div className="author"> {data["author"]}</div>
        <div className="flex justify-end">
          <button className="self-end bg-violet-600 p-1 rounded-md text-white">
            <Link to={`books/${data.id}`}>view details</Link>
           
          </button>
        </div>
      </div>
    </div>
  );
}

export default Bookcard;


