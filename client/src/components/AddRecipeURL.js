import React, {useState} from "react";
import logo from "../logo.svg";
import "./App.css";
import axios from 'axios';

function App() {
  const [data, setData] = useState(null);
  //'https://www.bonappetit.com/recipe/lemony-tortellini-soup-with-spinach-and-dill';
  //'https://minimalistbaker.com/vegan-gluten-free-samoas/';
  //'https://www.seriouseats.com/recipes/2021/03/pasta-e-ceci-pasta-with-chickpeas.html';
  //'https://smittenkitchen.com/2006/09/lime-curd-tart/';
  //'https://www.thespruceeats.com/thin-mint-cookie-pie-5112872';
  //'https://www.allrecipes.com/recipe/7304/eclair-cake/';
  //'https://www.allrecipes.com/recipe/7304/eclair-cake/';
    //'https://www.allrecipes.com/recipe/7304/eclair-cake/';




  async function updateRecipeURL(event) {
    event.preventDefault()
    const recipeURL = event.target.url.value
    const result = await axios.post('/', {url: recipeURL});
    setData(result.data);
  };

  if (!data) {
    return (
      <div>
        <img src={logo} className="App-logo" alt="logo" />
        <form onSubmit={updateRecipeURL}>
          <input type="text" name="url"></input>
        <button type="submit">Get Recipe</button>
        </form>
        <p>LOADING...</p>
      </div>
    );
  } else {
    return (
      <div>
        <img src={logo} className="App-logo" alt="logo" />
        <ul>{data.ingredients.map((item, index) => <li key={index}>{item}</li>)}</ul>
        <ul>{data.instructions.map((item, index) => <li key={index}>{item}</li>)}</ul>
      </div>
    );
  }
}

export default App;