import { IconContext } from "react-icons";

interface SidebarIconProps {
  icon: React.ReactNode;
  name: string;
}

export default (props: SidebarIconProps) => (
  <button
    className="relative flex items-center justify-center h-12 w-12 mt-2 mb-2 mx-auto bg-sidebarIcon 
  rounded-2xl hover:bg-buttonHover"
  >
    <IconContext.Provider
      value={{
        color: "white",
        size: "30px",
      }}
    >
      <div>{props.icon}</div>
    </IconContext.Provider>
  </button>
);