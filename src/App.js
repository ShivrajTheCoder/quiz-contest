import Navbar from './components/Navbar';
import About from "./components/About";
import Home from "./components/Home";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './components/accountcomponents/Login';
import Signup from './components/accountcomponents/Signup';



function App() {

  return (
    <div>
      <Router>
      <Navbar />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/signup" component={Signup}/>
        </Switch>
      </Router>
    </div>
  );
}


export default App;
