interface ButtonProps {
  text: string;
}

export default (props: ButtonProps) => (
  <button className="bg-gray-800 h-12 w-32 text-white rounded-xl mt-12">
    {props.text}
  </button>
);
