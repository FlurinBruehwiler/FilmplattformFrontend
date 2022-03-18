import Register from "./components/Register";
import Login from "./components/Login";
import MovieDetails from "./components/MovieDetails";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default () => (
  <Router>
    <div className="flex justify-center min-h-screen bg-background">
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
          </Switch>
        </div>
      </div>
    </div>
  </Router>
);
