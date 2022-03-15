import React, { useEffect, useState } from "react";
interface InputProps {
  label: string;
  isEmail: boolean;
  inputName: string;
}

export default (props: InputProps) => {
  const [username, setusername] = useState(0);
  function logonChange() {
    console.log(username);
  }

  useEffect(() => console.log(username), [username]);
  return (
    <div className="text-text">
      <p>{props.label}</p>
      <input
        type={props.isEmail ? "email" : "text"}
        name={props.inputName}
        className="rounded-xl h-10 w-48"
        onChange={() => {setusername(value), console.log()});
        }
      />
    </div>
  );
};
