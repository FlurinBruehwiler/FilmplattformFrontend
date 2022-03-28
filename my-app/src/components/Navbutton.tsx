interface NavButtonProps {
  text: string;
  clickCallback: () => void;
  isLoading: boolean;
}

export default (props: NavButtonProps) => {
  return (
    <button
      className="h-10 w-25 text-fp-500 font-bold bg-fp-300 hover:bg-fp-310
        focus:ring focus:ring-fp-100 focus:border-fp-100 focus:outline-none"
      onClick={props.clickCallback}
      disabled={props.isLoading}
    >
      {props.text}
    </button>
  );
};
