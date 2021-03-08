import React from 'react';
import AddRecipeURL from './AddRecipeURL';
import NavBar from './NavBar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
      <NavBar/>
      <div className="container"> 
        <Switch>
          <Route path="/addrecipeurl">
            <AddRecipeURL/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;