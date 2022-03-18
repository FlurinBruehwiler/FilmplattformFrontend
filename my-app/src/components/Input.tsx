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
    <div className="text-fp-100">
      <p className="font-bold">{props.label}</p>
      <input
        type={props.isEmail ? "email" : "text"}
        spellCheck="false"
        className="rounded-xl h-12 w-72 px-3 py-2 text-lg focus:outline-none focus:border-fp-100 selection:bg-fp-500 
        focus:ring focus:ring-fp-100 bg-fp-400 font-semibold"
        onChange={handleChange}
        value={username}
      />
    </div>
  );
};
