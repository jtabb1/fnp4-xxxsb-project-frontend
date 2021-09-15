import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import "./App.css";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import EmployeeContainer from "./components/EmployeeContainer";
// import CategoryDetails from "./components/CategoryDetails";

function App() {
  return (
    <Router>
      <div className="app-container">
        <div className="app-background" />
        <NavBar />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/employees">
            <EmployeeContainer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
