import Button from "./Button";
import Textbox from "./Textbox";
import { AiFillPlusCircle } from "react-icons/ai";
import React, { useCallback, useEffect, useState } from "react";
import axios from "../axios";
import { useHistory } from "react-router-dom";

export default () => {
  const emailRegex =
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

  const history = useHistory();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [image, setImage] = useState<File>();
  const [imageUrl, setImageUrl] = useState("");

  const [isSending, setIsSenting] = useState(false);

  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordCheckError, setPasswordCheckError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [firstnameError, setFirstnameError] = useState("");
  const [lastnameError, setLastnameError] = useState("");

  const changeUsername = (childData: string) => setUsername(childData);
  const changePassword = (childData: string) => setPassword(childData);
  const changePasswordCheck = (childData: string) =>
    setPasswordCheck(childData);
  const changeEmail = (childData: string) => setEmail(childData);
  const changeFirstname = (childData: string) => setFirstname(childData);
  const changeLastname = (childData: string) => setLastname(childData);

  const submit = async () => {
    let hasErrors = false;
    if (isSending) return;
    console.log("Button press");
    if (!validate()) return;
    async function sendData() {
      setIsSenting(true);
      const request = await axios
        .post("/Auth/register", {
          username: username,
          password: password,
          name: lastname,
          vorname: firstname,
          email: email,
          profilePicture: image,
        })
        .catch((error: any) => {
          hasErrors = true;
          if (error.response.data.includes("Username")) {
            setUsernameError(error.response.data);
          } else {
            setEmailError(error.response.data);
          }
        });
      setIsSenting(false);
    }
    await sendData();
    if (hasErrors) return;
    history.push("/MovieDetails");
  };

  const imageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;
    if (!fileList) return;
    const i = fileList[0];
    setImage(i);
    console.log(i.name);
    setImageUrl(URL.createObjectURL(i));
    console.log(imageUrl);
  };

  const validate = (): boolean => {
    let isValid = true;
    setEmailError("");
    setFirstnameError("");
    setLastnameError("");
    setUsernameError("");
    setPasswordError("");
    setPasswordCheckError("");

    if (!emailRegex.test(email)) {
      setEmailError("No Valid Email");
      isValid = false;
    }
    if (firstname === "") {
      setFirstnameError("Field is required");
    }
    if (lastname === "") {
      setLastnameError("Field is required");
    }
    if (username === "") {
      setUsernameError("Field is required");
    }
    console.log(password.length);
    console.log(password);
    if (password.length < 6) {
      setPasswordError("At least 6 characters");
    } else if (password !== passwordCheck) {
      setPasswordCheckError("Passwords must match");
    }

    return isValid;
  };

  return (
    <div className="min-w-[25rem] flex flex-col items-center">
      <label
        id="profilepic"
        className="rounded-full flex justify-end w-40 h-40 mt-10 border-4 border-fp-200 cursor-pointer"
      >
        <div className="absolute w-4 h-4 m-3 bg-fp-500"></div>
        <AiFillPlusCircle color="#564E58" size="40px" className="absolute" />
        <input
          type="file"
          accept="image/*"
          multiple={false}
          onChange={imageChange}
        />
        <img
          src={
            imageUrl == ""
              ? "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              : imageUrl
          }
          className="object-cover rounded-full"
        ></img>
      </label>
      <div className="grid grid-cols-2 gap-x-5 gap-y-5 mt-10">
        <Textbox
          label={"Username"}
          parentCallback={changeUsername}
          errorText={usernameError}
        />
        <Textbox
          label={"Email"}
          type={"email"}
          parentCallback={changeEmail}
          errorText={emailError}
        />
        <Textbox
          label={"First Name"}
          parentCallback={changeFirstname}
          errorText={firstnameError}
        />
        <Textbox
          label={"Last Name"}
          parentCallback={changeLastname}
          errorText={lastnameError}
        />
        <Textbox
          label={"Password"}
          parentCallback={changePassword}
          type={"password"}
          errorText={passwordError}
        />
        <Textbox
          label={"Password Check"}
          parentCallback={changePasswordCheck}
          type={"password"}
          errorText={passwordCheckError}
        />
      </div>
      <div className="flex justify-end">
        <Button
          text={"Create Account"}
          clickCallback={submit}
          isLoading={isSending}
        />
      </div>
    </div>
  );
};
