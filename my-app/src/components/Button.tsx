interface ButtonProps {
  text: string;
  clickCallback: () => void;
  isLoading: boolean;
}

export default (props: ButtonProps) => {
  return (
    <button
      className="h-12 w-40 text-fp-500 rounded-xl mt-12 font-bold bg-fp-300 hover:bg-fp-310
        focus:ring focus:ring-fp-100 focus:border-fp-100 focus:outline-none"
      onClick={props.clickCallback}
      disabled={props.isLoading}
    >
      {props.text}
    </button>
  );
};
