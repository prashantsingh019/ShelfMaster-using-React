
function Bookcard({data}) {
 console.log(data);
 
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
        <div className="title text-xl font-bold">
           {data["title"]}
        </div>

        <div className="author"> {data["author"]}</div>
        <div className="flex justify-end">
          <button className="self-end bg-violet-600 p-1 rounded-md">view more</button>
          
        </div>
      </div>
    </div>
  );
}

export default  Bookcard;

// "author": "Hans Christian Andersen",
// "country": "Denmark",
// "imageLink": "images/fairy-tales.jpg",
// "language": "Danish",
// "link": "https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.\n",
// "pages": 784,
// "title": "Fairy tales",
// "year": 1836,
// "id": 2,
// "isPopular": false,
// "category": "Fairy Tales"