import axios from "../axios";
import { SetStateAction, useEffect, useState } from "react";
import { IconContext } from "react-icons";
import { AiFillClockCircle, AiFillHeart } from "react-icons/ai";
import { BsCardList, BsFillShareFill } from "react-icons/bs";
import { FaComments, FaRegComments } from "react-icons/fa";
import MovieDetailsModel from "../interfaces/MovieDetailsModel";
import Navbar from "./Navbar";
import Watchevent from "./Watchevent";
import { useParams } from "react-router-dom";

export default () => {
  const [movieDetails, setMovieDetails] = useState<
    MovieDetailsModel | undefined
  >(undefined);

  const params: any = useParams();
  const userId = params.movieId;

  useEffect(() => {
    async function fetchData() {
      axios
        .get<MovieDetailsModel>("/Movies/GetMovieDetails/" + userId)
        .then(
          (response: {
            data: SetStateAction<MovieDetailsModel | undefined>;
          }) => {
            setMovieDetails(response.data);
          }
        )
        .catch((error: any) => {});
    }
    fetchData();
  }, []);

  return movieDetails == undefined ? (
    <div>Loading...</div>
  ) : (
    <div className="text-fp-500">
      <div className="absolute w-[60rem] h-[30rem] left-[50%] translate-x-[-50%]">
        <div className="absolute bg-banner w-full h-full"></div>
        <div
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movieDetails.backdropURL})`,
          }}
          className={"w-full h-full bg-cover"}
        ></div>
      </div>
      <div className="w-[50rem] grid grid-cols-movieDetails text-text gap-x-10 pt-80 content-center relative">
        <div className="row-span-2">
          <img
            className="h-[60] rounded-2xl border-solid border-[1px] "
            src={"https://image.tmdb.org/t/p/w500" + movieDetails.posterURL}
            alt="Dune Poster"
          />
        </div>

        <div className="flex flex-row items-end col-span-2 mb-5">
          <h1 className="text-2xl font-bold">{movieDetails.title}</h1>
        </div>
        <div>
          <p className="font-thin mb-3">{movieDetails.shortDescription}</p>
          <p>{movieDetails.longDescription}</p>
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
      <div className="flex w-full my-10">
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
      <Navbar
        entries={[
          {
            text: "Cast",
            clickCallback: () => {},
          },
          {
            text: "Crew",
            clickCallback: () => {},
          },
          {
            text: "Details",
            clickCallback: () => {},
          },
          {
            text: "Genre",
            clickCallback: () => {},
          },
        ]}
      ></Navbar>
      <div className="grid grid-cols-4 mt-10 gap-y-5 gap-x-3 mb-20 relative">
        <div className="border-[1px] col-start-3 absolute h-full translate-x-[-1rem]"></div>
        {movieDetails.people
          .filter((x) => x.department == "Actor")
          .map((x) => (
            <>
              <p>{x.name}</p>
              <p>{x.name}</p>
            </>
          ))}
      </div>
    </div>
  );
};
