import Button from "./Button";
import NavButton from "./Navbutton";
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
    <div>
      <div className="flex flex-row items-center mt-5">
        <div className="justify-content:center mr-3">
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
      <div className="grid grid-cols-4 mt-2 rounded-xl" role="group">
        <NavButton text={"Film"} clickCallback={submit} isLoading={isSending} />
        <NavButton
          text={"Person"}
          clickCallback={submit}
          isLoading={isSending}
        />
        <NavButton
          text={"Liste"}
          clickCallback={submit}
          isLoading={isSending}
        />
        <NavButton text={"User"} clickCallback={submit} isLoading={isSending} />
      </div>
    </div>
  );
};
