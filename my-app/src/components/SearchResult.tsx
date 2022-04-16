import SearchResultProps from "../interfaces/SearchResultProps";
import SearchEntry from "./SearchEntry";

export default (props: SearchResultProps) => {
  return (
    <div className="w-[40rem] grid grid-cols-2 gap-5 mt-10">
      <SearchEntry
        title={props.results[0].title}
        releaseDate={props.results[0].releaseDate}
        director={props.results[0].director}
        posterUrl={props.results[0].posterUrl}
        id={props.results[0].id}
      />
      <SearchEntry
        title={props.results[0].title}
        releaseDate={props.results[0].releaseDate}
        director={props.results[0].director}
        posterUrl={props.results[0].posterUrl}
        id={props.results[0].id}
      />
      <div className="w-full col-span-2 border-fp-200 border-solid border-[1px]"></div>
      <SearchEntry
        title={props.results[0].title}
        releaseDate={props.results[0].releaseDate}
        director={props.results[0].director}
        posterUrl={props.results[0].posterUrl}
        id={props.results[0].id}
      />
      <SearchEntry
        title={props.results[0].title}
        releaseDate={props.results[0].releaseDate}
        director={props.results[0].director}
        posterUrl={props.results[0].posterUrl}
        id={props.results[0].id}
      />
      <div className="w-full col-span-2 border-fp-200 border-solid border-[1px]"></div>
      <SearchEntry
        title={props.results[0].title}
        releaseDate={props.results[0].releaseDate}
        director={props.results[0].director}
        posterUrl={props.results[0].posterUrl}
        id={props.results[0].id}
      />
      <SearchEntry
        title={props.results[0].title}
        releaseDate={props.results[0].releaseDate}
        director={props.results[0].director}
        posterUrl={props.results[0].posterUrl}
        id={props.results[0].id}
      />
      <div className="w-full col-span-2 border-fp-200 border-solid border-[1px]"></div>
    </div>
  );
};
