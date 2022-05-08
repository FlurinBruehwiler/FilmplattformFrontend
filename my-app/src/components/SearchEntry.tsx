import SearchEntryProps from "../interfaces/SearchEntryProps";
import { Link } from "react-router-dom";

export default (props: SearchEntryProps) => {
  return (
    <Link to={"/MovieDetails/" + props.id}>
      <div
        className="text-fp-500 flex w-full justify-between rounded-2xl hover:bg-fp-300 cursor-pointer"
        key={props.id}
      >
        {console.log(props.id)}
        <img
          src={"https://image.tmdb.org/t/p/w154/" + props.poster_path}
          alt=""
          className="h-40 rounded-2xl"
        />
        <div className="flex flex-col w-full justify-between m-4">
          <p className="text-lg">{props.original_title}</p>
          <div className="flex items-end">
            <p>{props.release_date}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};
