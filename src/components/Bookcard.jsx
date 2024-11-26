function Bookcard(props) {
  return (
    <div className="card flex flex-col gap-2 py-2 px-5 bg-gray-400 w-[22%] rounded-lg justify-between">
      <div className="img_container flex justify-center">
        <img
          src={props.data[1].volumeInfo.imageLinks.smallThumbnail}
          alt="_broken"
          className="p-0"
          width={"100px"}
          height={"100px"}
        />
      </div>
      <div className="text-sect">
        <div className="title text-xl font-bold">
          {props.data[1].volumeInfo.title}
        </div>

        <div className="author">{props.data[1].volumeInfo.authors[0]}</div>
        <div className="flex justify-end">
          <button className="self-end bg-violet-600 p-1 text-white rounded-md">view more</button>
        </div>
      </div>
    </div>
  );
}

export default Bookcard;
