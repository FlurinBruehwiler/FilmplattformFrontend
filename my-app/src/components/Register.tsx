import Button from "./Button";
import Input from "./Input";

export default () => (
  <div className="min-w-[25rem] flex flex-col items-center">
    <button
      id="profilepic"
      className="rounded-full flex flex-align w-40 h-40 mt-10"
    >
      <img
        src="https://www.cineclub.de/images/2007/06/shrek-3-2.jpg"
        className="object-cover rounded-full"
      ></img>
    </button>
    <div className=" flex flex-row space-x-5">
      <div className="text-text">
        <Input label={"Username"} isEmail={false} inputName={"username"} />
        <Input label={"Password"} isEmail={false} inputName={"password"} />
        <Input
          label={"Password Check"}
          isEmail={false}
          inputName={"password_check"}
        />
      </div>
      <div className="text-text">
        <Input label={"Email"} isEmail={true} inputName={"email"} />
        <Input label={"First Name"} isEmail={false} inputName={"firstname"} />
        <Input label={"Last Name"} isEmail={false} inputName={"lastname"} />
      </div>
    </div>
    <div className="flex justify-end">
      <Button text={"Create Account"} />
    </div>
  </div>
);
