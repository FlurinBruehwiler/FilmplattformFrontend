import SidebarIcon from "./SidebarIcon";
import { AiOutlineSearch, AiOutlineClockCircle } from "react-icons/ai";
import { BiMoviePlay } from "react-icons/bi";
import {
  BsCardList,
  BsFillPersonCheckFill,
  BsFillPersonPlusFill,
} from "react-icons/bs";

export default () => (
  <div
    className="fixed top-0 left-0 h-screen w-16 m-0
  flex flex-col bg-fp-190 text-text shadow-lg align-middle justify-between"
  >
    <div>
      <SidebarIcon
        icon={<AiOutlineSearch />}
        name={"Search"}
        destination={"/Search"}
      />
      <SidebarIcon
        icon={<BiMoviePlay />}
        name={"Watched Movies"}
        destination={"/Search"}
      />
      <SidebarIcon
        icon={<AiOutlineClockCircle />}
        name={"Watched Movies"}
        destination={"/Search"}
      />
      <SidebarIcon
        icon={<BsCardList />}
        name={"Watched Movies"}
        destination={"/Search"}
      />
    </div>
    <div>
      <SidebarIcon
        icon={<BsFillPersonPlusFill />}
        name={"Watched Movies"}
        destination={"/Register"}
      />
      <SidebarIcon
        icon={<BsFillPersonCheckFill />}
        name={"Watched Movies"}
        destination={"/Login"}
      />
    </div>
  </div>
);
