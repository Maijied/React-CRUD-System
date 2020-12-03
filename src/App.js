
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import Home from "./components/pages/Home";
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Navbar from './components/Layout/Navbar';
import {BrowserRouter as Router, Route, Switch  } from "react-router-dom";
import NotFound from './components/pages/NotFound';
import AddUser from "./components/pages/users/AddUser";
import EditUser from "./components/pages/users/EditUser";
import User from "./components/pages/users/User";



function App() {
  return (
    <Router>
      <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/users/add" component={AddUser}/>
        <Route exact path="/users/edit/:id" component={EditUser}/>
        <Route component={NotFound} />
        <Route exact path="/users/:id" component={User}/>
      </Switch>
      
    </div>
    </Router>
  );
}

export default App;
