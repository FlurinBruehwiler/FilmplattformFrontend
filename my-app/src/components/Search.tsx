import Button from "./Button";
import Navbar from "./Navbar";
import Textbox from "./Textbox";
import { AiFillPlusCircle } from "react-icons/ai";
import React, { useEffect, useState } from "react";
import axios from "../axios";
import SearchResult from "./SearchResult";
import SearchResultProps from "../interfaces/SearchResultProps";

export default () => {
  const [search, setSearch] = useState("");
  const [isSending, setIsSending] = useState(false);

  const changeSearch = (childData: string) => setSearch(childData);

  const [SearchError, setSearchError] = useState("");
  const [ApiSearchResult, setApiSearchResult] = useState<
    SearchResultProps | undefined
  >(undefined);

  const submit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    if (isSending) return;

    setSearchError("");

    async function sendData() {
      console.log("searching with keyword     : " + search);
      setIsSending(true);
      axios
        .get<SearchResultProps>("/Search/SearchMovies/" + search)
        .then((response) => {
          setApiSearchResult(response.data);
          console.log("getting data: " + JSON.stringify(response.data));
        })
        .catch((error: any) => {
          setSearchError(error.response.data);
        });
      setIsSending(false);
    }
    sendData();
  };

  return (
    <div className="w-[60rem]">
      <form onSubmit={submit} className="flex mt-5 justify-between w-full mb-4">
        <div className="mr-4 w-full">
          <Textbox
            label={""}
            parentCallback={changeSearch}
            errorText={SearchError}
            placeholder={"Search..."}
          />
        </div>
        <div className="align-items flex-end mt-0">
          <Button text={"Search"} isLoading={isSending} />
        </div>
      </form>
      <Navbar
        entries={[
          {
            text: "Film",
            clickCallback: () => {},
          },
          {
            text: "Person",
            clickCallback: () => {},
          },
          {
            text: "Liste",
            clickCallback: () => {},
          },
          {
            text: "User",
            clickCallback: () => {},
          },
        ]}
      ></Navbar>
      {isSending || ApiSearchResult == undefined ? (
        <div></div>
      ) : (
        <SearchResult results={ApiSearchResult.results} />
      )}
    </div>
  );
};
