interface ButtonProps {
  text: string;
  isLoading: boolean;
  clickCallback?: () => void;
}

export default (props: ButtonProps) => {
  return (
    <button
      className="h-12 w-40 text-fp-500 rounded-xl font-bold bg-fp-300 hover:bg-fp-400
        focus:ring focus:ring-fp-100 focus:border-fp-100 focus:outline-none"
      disabled={props.isLoading}
      {...(props.clickCallback != undefined
        ? { onClick: props.clickCallback }
        : {})}
    >
      {props.text}
    </button>
  );
};
