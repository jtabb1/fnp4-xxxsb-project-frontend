import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import "./App.css";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import EeContainer from "./components/EeContainer";
// import CategoryDetails from "./components/CategoryDetails";
// import JoinTable from "./components/JoinTable";

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
            <EeContainer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
