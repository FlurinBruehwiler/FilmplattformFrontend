import { IconContext } from "react-icons";
import { AiFillClockCircle, AiFillHeart } from "react-icons/ai";
import { BsCardList, BsFillShareFill } from "react-icons/bs";
import { FaComments, FaRegComments } from "react-icons/fa";
import Watchevent from "./Watchevent";

export default () => (
  <div className="text-fp-500">
    <div className="absolute w-[60rem] h-[30rem] left-[50%] translate-x-[-50%]">
      <div className="absolute bg-banner w-[100%] h-[100%]"></div>
      <div className="bg-[url('https://clownmagazine.co.uk/Dune%20-%20Film%20Poster.jpg')] w-[100%] h-[100%] bg-cover"></div>
    </div>
    <div className="w-[50rem] grid grid-cols-movieDetails text-text gap-x-10 pt-80 content-center relative">
      <img
        className="h-[60] rounded-2xl border-text border-solid border-[1px] row-span-2"
        src="https://a.ltrbxd.com/resized/sm/upload/nx/8b/vs/gc/cDbNAY0KM84cxXhmj8f0dLWza3t-0-460-0-690-crop.jpg?k=11ccbe9f2b"
        alt="Dune Poster"
      />
      <div className="flex flex-row items-end col-span-2 mb-5">
        <h1 className="text-5xl font-bold">Dune</h1>
        <p className="mx-7">2021</p>
        <a href="">Directed by Denis Villeneuve</a>
      </div>
      <div>
        <p>BEYOND FEAR, DESTINY AWAITS.</p>
        <p>
          Paul Atreides, a brilliant and gifted young man born into a great
          destiny beyond his understanding, must travel to the most dangerous
          planet in the universe to ensure the future of his family and his
          people. As malevolent forces explode into conflict over the planet’s
          exclusive supply of the most precious resource in existence-a
          commodity capable of unlocking humanity’s greatest potential-only
          those who can conquer their fear will survive.
        </p>
      </div>

      <div>
        <IconContext.Provider
          value={{
            color: "white",
            size: "40px",
          }}
        >
          <div className="grid grid-cols-2 bg-fp-300 rounded-2xl grid-rows-2 h-[180px] cursor-pointer">
            <a className="hover:bg-fp-400 bg-fp-300 rounded-2xl flex justify-center items-center flex-col">
              {" "}
              <AiFillHeart />
              <p className="text-center">Like</p>
            </a>
            <a className="hover:bg-fp-400 bg-fp-300 rounded-2xl flex justify-center items-center flex-col">
              {" "}
              <AiFillClockCircle />
              <p className="text-center">Watchlist</p>
            </a>
            <a className="hover:bg-fp-400 bg-fp-300 rounded-2xl flex justify-center items-center flex-col">
              {" "}
              <BsFillShareFill />
              <p className="text-center">Share</p>
            </a>
            <a className="hover:bg-fp-400 bg-fp-300 rounded-2xl flex justify-center items-center flex-col">
              {" "}
              <BsCardList />
              <p className="text-center">List</p>
            </a>
          </div>
          <div className="grid grid-cols-2 bg-fp-300 rounded-2xl grid-rows-1 h-[90px] mt-5 cursor-pointer">
            <a className="hover:bg-fp-400 bg-fp-300 rounded-2xl flex justify-center items-center flex-col">
              {" "}
              <p className="text-2xl">4.5</p>
              <p className="text-center">Avg. Rating</p>
            </a>
            <a className="hover:bg-fp-400 bg-fp-300 rounded-2xl flex justify-center items-center flex-col">
              {" "}
              <FaComments />
              <p className="text-center">Ratings</p>
            </a>
          </div>
        </IconContext.Provider>
      </div>
    </div>
    <div className="flex w-[100%] mt-10">
      <div className="w-[50%] mr-5">
        <p>Your Watchevents:</p>
        <div className="flex flex-col mt-2">
          <Watchevent
            user={"Flurin Brühwiler"}
            date={"13.09.2022"}
            rating={4}
            comment={"A very good Movie"}
            isOwn={true}
          />
          <Watchevent
            user={"Flurin Brühwiler"}
            date={"13.09.2022"}
            rating={4}
            comment={"A very good Movie"}
            isOwn={true}
          />
        </div>
      </div>
      <div className="w-[50%] ml-5">
        <p>Your Friends Watchevents:</p>
        <div className="flex flex-col mt-2">
          <Watchevent
            user={"Hen47rik"}
            date={"20.09.2021"}
            rating={3}
            comment={"A very good Movie"}
            isOwn={false}
          />
        </div>
      </div>
    </div>
  </div>
);
