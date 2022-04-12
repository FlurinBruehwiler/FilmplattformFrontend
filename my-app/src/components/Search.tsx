import Button from "./Button";
import Navbar from "./Navbar";
import Textbox from "./Textbox";
import { AiFillPlusCircle } from "react-icons/ai";
import React, { useEffect, useState } from "react";
import axios from "../axios";

export default () => {
  const [search, setSearch] = useState("");
  const [isSending, setIsSenting] = useState(false);

  const changeSearch = (childData: string) => setSearch(childData);

  const [SearchError, setSearchError] = useState("");

  const submit = () => {
    if (isSending) return;

    setSearchError("");

    async function sendData() {
      setIsSenting(true);
      const request = await axios
        .get("/Search/SearchMovies/search" + search)
        .catch((error: any) => {
          setSearchError(error.response.data);
        });
      setIsSenting(false);
    }
    sendData();
  };

  return (
    <div className="w-[40rem]">
      <div className="flex mt-5 justify-between w-[100%] mb-4">
        <div className="mr-4 w-[100%]">
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
    </div>
  );
};
