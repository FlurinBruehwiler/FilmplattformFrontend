import Button from "./Button";
import Textbox from "./Textbox";
import { AiFillPlusCircle } from "react-icons/ai";
import React, { useEffect, useState } from "react";
import axios from "../axios";

export default () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isSending, setIsSenting] = useState(false);

  const changeUsername = (childData: string) => setUsername(childData);
  const changePassword = (childData: string) => setPassword(childData);

  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const submit = () => {
    if (isSending) return;

    setUsernameError("");
    setPasswordError("");

    async function sendData() {
      setIsSenting(true);
      const request = await axios
        .post("/Auth/login", {
          username: username,
          password: password,
        })
        .catch((error: any) => {
          if (error.response.data.includes("User")) {
            setUsernameError(error.response.data);
          } else {
            setPasswordError(error.response.data);
          }
        });
      setIsSenting(false);
    }
    sendData();
  };

  return (
    <div className="min-w-[25rem] flex flex-col items-center">
      <div className="grid grid-cols-2 gap-x-5 gap-y-5 mt-52">
        <Textbox
          label={"Username"}
          parentCallback={changeUsername}
          errorText={usernameError}
        />
        <Textbox
          label={"Password"}
          parentCallback={changePassword}
          type={"password"}
          errorText={passwordError}
        />
      </div>
      <div className="flex justify-end mt-5">
        <Button
          text={"Create Account"}
          clickCallback={submit}
          isLoading={isSending}
        />
      </div>
    </div>
  );
};
