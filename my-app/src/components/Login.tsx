import Button from "./Button";
import Input from "./Input";

export default () => (
  <div className="min-w-[25rem] flex flex-col items center justify-center">
    <div className=" flex flex-row w-80">
      <div className="text-text">
        <Input label={"Username"} isEmail={false} inputName={"username"} />
        <Input label={"Password"} isEmail={false} inputName={"password"} />
      </div>
    </div>

    <div className="items center space-x-5">
      <Button text={"Login"} />
      <Button text={"Create Account"} />
    </div>
  </div>
);
