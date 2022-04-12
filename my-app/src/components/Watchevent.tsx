import { MdModeEdit, MdOutlineExpandMore } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";

interface WatcheventProps {
  user: string;
  date: string;
  rating: number;
  comment: string;
  isOwn: boolean;
}

export default (props: WatcheventProps) => {
  return (
    <button
      className="h-[100%] w-[100%] text-fp-500 rounded-2xl font-bold bg-transparent hover:bg-transparent
          focus:ring focus:ring-fp-500 focus:outline-none mb-3 border-[1px] pl-5 pr-3 pt-1 pb-1"
    >
      {props.isOwn ? (
        <div className="flex justify-between">
          <p className="text-sm">{props.date}</p>
          <div className="flex">
            <p className="mr-5">{props.rating}</p>
            <MdModeEdit size="24px" />
            <div className="ml-1">
              <MdOutlineExpandMore size="24px" />
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-between">
          <p>{props.user}</p>
          <p className="text-sm">{props.date}</p>
          <p>{props.rating}</p>
        </div>
      )}
    </button>
  );
};
