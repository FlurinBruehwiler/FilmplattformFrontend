import SearchEntryProps from "../interfaces/SearchEntryProps";
import SearchResultProps from "../interfaces/SearchResultProps";
import SearchEntry from "./SearchEntry";

export default (props: SearchResultProps) => {
  return (
    <div className="w-full grid grid-cols-2 gap-5 mt-10">
      {props.results.map((result: SearchEntryProps, i) => {
        return i % 2 == 0 ? (
          <SearchEntry
            original_title={result.original_title}
            release_date={result.release_date}
            director={result.director}
            poster_path={result.poster_path}
            id={result.id}
            key={result.id.toString()}
          />
        ) : (
          <>
            <SearchEntry
              original_title={result.original_title}
              release_date={result.release_date}
              director={result.director}
              poster_path={result.poster_path}
              id={result.id}
              key={result.id.toString()}
            />
            <div className="w-full col-span-2 border-fp-200 border-solid border-[1px]"></div>
          </>
        );
      })}
    </div>
  );
};
