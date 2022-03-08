interface InputProps {
  label: string;
  isEmail: boolean;
  inputName: string;
}

export default (props: InputProps) => (
  <div className="text-text">
    <p>{props.label}</p>
    <input
      type={props.isEmail ? "email" : "text"}
      name={props.inputName}
      className="rounded-xl h-10 w-48"
    />
  </div>
);
