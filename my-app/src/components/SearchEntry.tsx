import SearchEntryProps from "../interfaces/SearchEntryProps";

export default (props: SearchEntryProps) => {
  return (
    <div className="text-fp-500 flex w-full justify-between rounded-2xl hover:bg-fp-300 cursor-pointer">
      <img src={props.posterUrl} alt="" className="h-40 rounded-2xl" />
      <div className="flex flex-col w-full justify-between m-4">
        <div className="flex justify-between">
          <p className="text-4xl">{props.title}</p>
          <div className="flex items-end">
            <p>{props.releaseDate}</p>
          </div>
        </div>
        <p className="text-xl">{props.director}</p>
      </div>
    </div>
  );
};
