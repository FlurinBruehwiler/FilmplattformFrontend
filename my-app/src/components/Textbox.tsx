import React, { useEffect, useState } from "react";
interface InputProps {
  label: string;
  type?: string;
  placeholder?: string;
  parentCallback: (childData: string) => void;
  errorText: string;
}

export default (props: InputProps) => {
  const [value, setValue] = useState("");

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  useEffect(() => {
    props.parentCallback(value);
  });

  return (
    <div>
      <p className="font-bold text-fp-500">{props.label}</p>
      <input
        type={props.type != undefined ? props.type : "text"}
        spellCheck="false"
        className="rounded-xl h-12 w-72 px-3 py-2 text-lg focus:outline-none focus:border-fp-100 selection:bg-fp-500 
        focus:ring focus:ring-fp-300 bg-fp-500 font-semibold placeholder-fp-110"
        onChange={handleChange}
        placeholder={props.placeholder != undefined ? props.placeholder : ""}
        value={value}
      />
      <p className="text-fp-300">{props.errorText}</p>
    </div>
  );
};
