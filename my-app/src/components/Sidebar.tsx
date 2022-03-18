import SidebarIcon from "./SidebarIcon";
import { AiOutlineSearch, AiOutlineClockCircle } from "react-icons/ai";
import { BiMoviePlay } from "react-icons/bi";
import { BsCardList, BsFillPersonFill } from "react-icons/bs";

export default () => (
  <div
    className="fixed top-0 left-0 h-screen w-16 m-0
  flex flex-col bg-fp-100 text-text shadow-lg align-middle justify-between"
  >
    <div>
      <SidebarIcon icon={<AiOutlineSearch />} name={"Search"} />
      <SidebarIcon icon={<BiMoviePlay />} name={"Watched Movies"} />
      <SidebarIcon icon={<AiOutlineClockCircle />} name={"Watched Movies"} />
      <SidebarIcon icon={<BsCardList />} name={"Watched Movies"} />
    </div>
    <SidebarIcon icon={<BsFillPersonFill />} name={"Watched Movies"} />
  </div>
);
