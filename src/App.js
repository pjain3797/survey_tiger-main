import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Logo from "./logo.png";
import Menu from "./component/Menu";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CretaeSurvey from "./component/CreateSurvey";
import Published from "./component/Published";
import { useState } from "react";
import { Link } from "react-router-dom";

function App() {
  const [squestions, setSquestions] = useState([]);

  return (
    <>
      <div className="col-md-10 offset-md-1 col-12 text-center">
        <Router>
          <Link to="/">
            <img className="col-md-6" alt="logo" src={Logo} />
          </Link>

          <Switch>
            <Route path="/" component={Menu} exact />
            <Route path="/create" component={CretaeSurvey} exact>
              <CretaeSurvey
                squestions={squestions}
                setSquestions={setSquestions}
              ></CretaeSurvey>
            </Route>
            <Route path="/published">
              <Published questions={squestions} />
            </Route>
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
