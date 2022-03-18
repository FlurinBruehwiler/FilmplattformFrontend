import Button from "./Button";
import Input from "./Input";
import React, { useState } from "react";

export default () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  const changeUsername = (childData: string) => {
    console.log(childData);
    setUsername(childData);
  };
  const changePassword = (childData: string) => setPassword(childData);
  const changePasswordCheck = (childData: string) =>
    setPasswordCheck(childData);
  const changeEmail = (childData: string) => setEmail(childData);
  const changeFirstname = (childData: string) => setFirstname(childData);
  const changeLastname = (childData: string) => setLastname(childData);

  return (
    <div className="min-w-[25rem] flex flex-col items-center">
      <button
        id="profilepic"
        className="rounded-full flex flex-align w-40 h-40 mt-10"
      >
        <img
          src="https://www.cineclub.de/images/2007/06/shrek-3-2.jpg"
          className="object-cover rounded-full"
        ></img>
      </button>
      <div className="flex flex-row space-x-5">
        <div className="text-text">
          <Input
            label={"Username"}
            isEmail={false}
            parentCallback={changeUsername}
          />
          <Input
            label={"Password"}
            isEmail={false}
            parentCallback={changePassword}
          />
          <Input
            label={"Password Check"}
            isEmail={false}
            parentCallback={changePasswordCheck}
          />
        </div>
        <div className="text-text">
          <Input label={"Email"} isEmail={true} parentCallback={changeEmail} />
          <Input
            label={"First Name"}
            isEmail={false}
            parentCallback={changeFirstname}
          />
          <Input
            label={"Last Name"}
            isEmail={false}
            parentCallback={changeLastname}
          />
        </div>
      </div>
      <div className="flex justify-end">
        <Button text={"Create Account"} />
      </div>
    </div>
  );
};
