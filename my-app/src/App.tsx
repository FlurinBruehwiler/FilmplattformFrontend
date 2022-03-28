import Register from "./components/Register";
import Login from "./components/Login";
import MovieDetails from "./components/MovieDetails";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./components/Search";

export default () => (
  <Router>
    <div className="flex justify-center min-h-screen bg-fp-500">
      <div>
        <Sidebar />
        <div>
          <Switch>
            <Route exact path="/">
              <Register />
            </Route>
            <Route exact path="/Login">
              <Login />
            </Route>
            <Route exact path="/MovieDetails">
              <MovieDetails />
            </Route>
            <Route exact path="/Search">
              <Search />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  </Router>
);
