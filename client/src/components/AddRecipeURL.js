import React, {useState} from "react";
import logo from "../logo.svg";
import "./App.css";
import axios from 'axios';
import firebase from "../firebase";
import 'firebase/auth';
import 'firebase/firestore';

function App() {
  const firestore = firebase.firestore();
  const auth = firebase.auth();
  const [data, setData] = useState(null);
  const [url, setUrl] = useState(null);
  //'https://www.bonappetit.com/recipe/lemony-tortellini-soup-with-spinach-and-dill';
  //'https://minimalistbaker.com/vegan-gluten-free-samoas/';
  //'https://www.seriouseats.com/recipes/2021/03/pasta-e-ceci-pasta-with-chickpeas.html';
  //'https://smittenkitchen.com/2006/09/lime-curd-tart/';
  //'https://www.thespruceeats.com/thin-mint-cookie-pie-5112872';
  //'https://www.allrecipes.com/recipe/7304/eclair-cake/';

  async function updateRecipeURL(event) {
    event.preventDefault()
    const recipeURL = event.target.url.value
    const result = await axios.post('/', {url: recipeURL});
    setData(result.data);
    setUrl(recipeURL)
  };

  function addRecipe(event){
    firestore.collection('recipes').add(
      {
        title: data.name,
        ingredients: data.ingredients,
        instructions: data.instructions,
        notes: "",
        imgURL: data.image,
        source: url,
        userId: auth.currentUser.uid
      })
  }

  if (!data) {
    return (
      <div>
        <img src={logo} className="App-logo" alt="logo" />
        <form onSubmit={updateRecipeURL}>
          <input type="text" name="url"></input>
        <button type="submit">Get Recipe</button>
        </form>
      </div>
    );
  } else {
    return (
      <div>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{data.name}</h1>
        <ul>{data.ingredients.map((item, index) => <li key={index}>{item}</li>)}</ul>
        <ul>{data.instructions.map((item, index) => <li key={index}>{item}</li>)}</ul>
        <button onClick={addRecipe}>Add to MyRecipes</button>
      </div>
    );
  }
}

export default App;