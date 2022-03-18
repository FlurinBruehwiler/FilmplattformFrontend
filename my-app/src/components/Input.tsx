import React, { useState } from "react";
interface InputProps {
  label: string;
  isEmail?: boolean;
  parentCallback: (childData: string) => void;
}

export default (props: InputProps) => {
  const [username, setUsername] = useState("");

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setUsername(e.currentTarget.value);
    props.parentCallback(username);
  };

  return (
    <div className="text-text">
      <p>{props.label}</p>
      <input
        type={props.isEmail ? "email" : "text"}
        className="rounded-xl h-10 w-48 text-black"
        onChange={handleChange}
        value={username}
      />
    </div>
  );
};
