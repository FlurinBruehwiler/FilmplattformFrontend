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
  const [isSending, setIsSenting] = useState(false);

  const changeSearch = (childData: string) => setSearch(childData);

  const [SearchError, setSearchError] = useState("");
  const [ApiSearchResult, setApiSearchResult] = useState<
    SearchResultProps | undefined
  >(undefined);

  const submit = () => {
    if (isSending) return;

    setSearchError("");

    async function sendData() {
      setIsSenting(true);
      const request = await axios
        .get<SearchResultProps>("/Search/SearchMovies/" + search)
        .catch((error: any) => {
          setSearchError(error.response.data);
        });
      setIsSenting(false);
    }
    sendData();
  };

  return (
    <div className="w-[40rem]">
      <div className="flex mt-5 justify-between w-full mb-4">
        <div className="mr-4 w-full">
          <Textbox
            label={""}
            parentCallback={changeSearch}
            errorText={SearchError}
            placeholder={"Search..."}
          />
        </div>
        <div className="align-items flex-end mt-0">
          <Button
            text={"Search"}
            clickCallback={submit}
            isLoading={isSending}
          />
        </div>
      </div>
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
      <SearchResult
        results={[
          {
            title: "Dune",
            releaseDate: "2021",
            director: "Denis Villeneuve",
            posterUrl:
              "https://a.ltrbxd.com/resized/sm/upload/nx/8b/vs/gc/cDbNAY0KM84cxXhmj8f0dLWza3t-0-460-0-690-crop.jpg?k=11ccbe9f2b",
            id: 1,
          },
        ]}
      />
    </div>
  );
};
