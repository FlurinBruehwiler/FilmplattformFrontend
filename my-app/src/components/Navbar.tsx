import NavbarEntryProps from "../interfaces/NavbarEntryProps";
import NavbarEntry from "./NavbarEntry";

interface NavbarProps {
  entries: NavbarEntryProps[];
}

export default (props: NavbarProps) => {
  return (
    <div className="flex justify-between bg-fp-300 rounded-xl">
      {props.entries.map((entry, i) => {
        return (
          <NavbarEntry
            text={entry.text}
            clickCallback={entry.clickCallback}
            key={i}
          />
        );
      })}
    </div>
  );
};
