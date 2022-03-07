import Button from "./components/Button";
import Sidebar from "./components/Sidebar";

export default () => (
  <div className="flex justify-center">
    <Sidebar />
    <Button text={"follow"} />
  </div>
);
