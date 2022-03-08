interface ButtonProps {
  text: string;
}

export default (props: ButtonProps) => (
  <button className="bg-button hover:bg-buttonHover h-12 w-32 text-text rounded-xl mt-12">
    {props.text}
  </button>
);
