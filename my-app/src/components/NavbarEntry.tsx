import NavbarEntryProps from "../interfaces/NavbarEntryProps";

export default (props: NavbarEntryProps) => {
  return (
    <button
      className="h-12 w-[100%] text-fp-500 font-bold bg-fp-300 hover:bg-fp-400 focus:outline-none rounded-xl"
      onClick={props.clickCallback}
    >
      {props.text}
    </button>
  );
};
