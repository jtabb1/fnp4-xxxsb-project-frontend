import { Switch, Route } from "react-router-dom";
// import "./App.css";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
// import Home from "./components/Home";
import Employee from "./components/Employee";
import EmployeeContainer from "./components/EmployeeContainer";
// import CategoryDetails from "./components/CategoryDetails";

function App() {

  // return (
  //   <main>
  //     <h1>
  //       <Link to="/">Working Fun</Link>
  //     </h1>
  //     <Switch>
  //       <Route exact path="/">
  //         <Home />
  //       </Route>
  //       <Route exact path="/employees/:id">
  //         <Camper />
  //       </Route>
  //     </Switch>
  //   </main>
  // );

  return (
      <div className="app-container">
        {/* <div className="app-background" /> */}
        <NavBar />

        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>

          <Route exact path="/employees">
            <EmployeeContainer />
          </Route>

          <Route exact path="/employees/:id">
            <Employee />
          </Route>
        </Switch>

      </div>
  );
}

export default App;
