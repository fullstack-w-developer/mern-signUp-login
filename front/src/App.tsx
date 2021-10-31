import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import './App.css';
import Login from './components/login/Login';
import SignUp from './components/signUp/SignUp';
import Home from './components/Home';
import { useState } from "react";

function App() {
  const [fullName, setFullName] = useState("")
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={() => (<Login setFullName={setFullName} />)} />
          <Route path="/signUp" component={SignUp} />
          <Route path="/home" component={() => (<Home fullName={fullName} />)} />
          <Route component={() => <Redirect to="/" />} />
        </Switch>
      </Router>
      <div>
      </div>
    </div>
  );
}

export default App;
