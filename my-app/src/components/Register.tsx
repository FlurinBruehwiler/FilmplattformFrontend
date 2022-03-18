import Button from "./Button";
import Input from "./Input";
import { AiFillPlusCircle } from "react-icons/ai";
import React, { useEffect, useState } from "react";
import axios from "../axios";

export default () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [isCreating, setCreating] = useState(false);

  const changeUsername = (childData: string) => setUsername(childData);
  const changePassword = (childData: string) => setPassword(childData);
  const changePasswordCheck = (childData: string) =>
    setPasswordCheck(childData);
  const changeEmail = (childData: string) => setEmail(childData);
  const changeFirstname = (childData: string) => setFirstname(childData);
  const changeLastname = (childData: string) => setLastname(childData);

  const submit = () => {
    if (isCreating) return;
    setCreating(true);
    async function sendData() {
      const request = await axios
        .post("/Auth/register", {
          username: username,
          password: password,
          name: lastname,
          vorname: firstname,
          email: email,
        })
        .catch((error) => {
          if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            console.log(error.request);
          } else {
            console.log("Error", error.message);
          }
          console.log(error.config);
        });
      setCreating(false);
      console.log(request);
    }
    sendData();
  };

  return (
    <div className="min-w-[25rem] flex flex-col items-center">
      <label
        id="profilepic"
        className="rounded-full flex justify-end w-40 h-40 mt-10 border-4 border-fp-200 cursor-pointer"
      >
        <div className="absolute w-4 h-4 m-3 bg-fp-500"></div>
        <AiFillPlusCircle color="#564E58" size="40px" className="absolute" />
        <input type="file" />
        <img
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
          className="object-cover rounded-full"
        ></img>
      </label>
      <div className="grid grid-cols-2 gap-x-5 gap-y-5 mt-10">
        <Input label={"Username"} parentCallback={changeUsername} />
        <Input label={"Email"} isEmail={true} parentCallback={changeEmail} />
        <Input label={"First Name"} parentCallback={changeFirstname} />
        <Input label={"Last Name"} parentCallback={changeLastname} />
        <Input label={"Password"} parentCallback={changePassword} />
        <Input label={"Password Check"} parentCallback={changePasswordCheck} />
      </div>
      <div className="flex justify-end">
        <Button text={"Create Account"} clickCallback={submit} />
      </div>
    </div>
  );
};
