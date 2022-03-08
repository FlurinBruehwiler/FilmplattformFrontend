import Button from "./components/Button";
import MovieDetails from "./components/MovieDetails";
import Sidebar from "./components/Sidebar";

export default () => (
  <div className="flex justify-center bg-background h-screen w-screen">
    <Sidebar />
    <MovieDetails />
  </div>
);
