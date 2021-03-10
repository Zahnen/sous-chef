import React from 'react';
import AddRecipeURL from './AddRecipeURL';
import NewRecipeForm from './NewRecipeForm';
import Signin from './Signin';
import NavBar from './NavBar';
import Home from './Home';
import MyRecipes from './MyRecipes';
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
          <Route path="/addrecipe">
            <NewRecipeForm/>
          </Route>
          <Route path="/signin">
            <Signin/>
          </Route>
          <Route path="/myrecipes">
            <MyRecipes/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;