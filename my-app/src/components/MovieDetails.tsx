import { IconContext } from "react-icons";
import { AiFillClockCircle, AiFillHeart } from "react-icons/ai";
import { BsCardList, BsFillShareFill } from "react-icons/bs";
import { FaComments, FaRegComments } from "react-icons/fa";

export default () => (
  <div className="max-w-[50rem] grid grid-cols-movieDetails text-text gap-x-10">
    <div className="w-auto h-60 col-span-3 bg-gradient-to-t from-background overflow-hidden">
      <img
        className="object-fill"
        src="https://clownmagazine.co.uk/Dune%20-%20Film%20Poster.jpg"
        alt="Dune Banner"
      />
    </div>

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
        exclusive supply of the most precious resource in existence-a commodity
        capable of unlocking humanity’s greatest potential-only those who can
        conquer their fear will survive.
      </p>
    </div>
    <div>
      <IconContext.Provider
        value={{
          color: "white",
          size: "40px",
        }}
      >
        <div className="grid grid-cols-2">
          <a className="hover:bg-buttonHover px-7 py-4 bg-button rounded-tl-2xl">
            {" "}
            <AiFillHeart />
            <p className="text-center">Like</p>
          </a>
          <a className="hover:bg-buttonHover px-7 py-4 bg-button rounded-tr-2xl">
            {" "}
            <AiFillClockCircle />
            <p className="text-center">Like</p>
          </a>
          <a className="hover:bg-buttonHover px-7 py-4 bg-button rounded-bl-2xl">
            {" "}
            <BsFillShareFill />
            <p className="text-center">Like</p>
          </a>
          <a className="hover:bg-buttonHover px-7 py-4 bg-button rounded-br-2xl">
            {" "}
            <BsCardList />
            <p className="text-center">List</p>
          </a>
          <a className="hover:bg-buttonHover px-7 py-4 bg-button rounded-l-2xl mt-5">
            {" "}
            <BsFillShareFill />
            <p className="text-center">Rating</p>
          </a>
          <a className="hover:bg-buttonHover px-7 py-4 bg-button rounded-r-2xl mt-5">
            {" "}
            <FaComments />
            <p className="text-center">Ratings</p>
          </a>
        </div>
      </IconContext.Provider>
    </div>
  </div>
);
