interface ButtonProps {
  text: string;
  clickCallback: () => void;
}

export default (props: ButtonProps) => {
  return (
    <button
      className="bg-fp-300 hover:bg-buttonHover h-12 w-40 text-fp-500 rounded-xl mt-12 font-bold"
      onClick={props.clickCallback}
    >
      {props.text}
    </button>
  );
};
