import Button from "./Button";
import Textbox from "./Textbox";
import { AiFillPlusCircle } from "react-icons/ai";
import React, { useEffect, useState } from "react";
import axios from "../axios";
import { useHistory } from "react-router-dom";

export default () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isSending, setIsSenting] = useState(false);

  const changeUsername = (childData: string) => setUsername(childData);
  const changePassword = (childData: string) => setPassword(childData);

  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const history = useHistory();

  const submit = async () => {
    if (isSending) return;
    let hasErrors = false;

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
          console.log(error);
          hasErrors = true;
          if (error.response.data.includes("User")) {
            setUsernameError(error.response.data);
          } else {
            setPasswordError(error.response.data);
          }
        });
      setIsSenting(false);
    }
    await sendData();
    if (hasErrors) return;
    history.push("/Search");
  };

  return (
    <div className="min-w-[25rem] flex flex-col mt-20">
      <Textbox
        label={"Username"}
        parentCallback={changeUsername}
        errorText={usernameError}
      />
      <div className="h-5"></div>
      <Textbox
        label={"Password"}
        parentCallback={changePassword}
        type={"password"}
        errorText={passwordError}
      />
      <div className="flex justify-center mt-10">
        <Button text={"Login"} isLoading={isSending} clickCallback={submit} />
      </div>
    </div>
  );
};
