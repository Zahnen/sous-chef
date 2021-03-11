import React, {useState} from "react";
import spinner from "./../img/Spinner.svg"
import "./App.css";
import axios from 'axios';
import firebase from "../firebase";
import 'firebase/auth';
import 'firebase/firestore';
import { useHistory } from "react-router-dom"; 


function App() {
  const firestore = firebase.firestore();
  const auth = firebase.auth();
  const history = useHistory();
  const [data, setData] = useState(null);
  const [url, setUrl] = useState(null);

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
    history.push("/myrecipes");
  }

  if (!data) {
    return (
      <>
        <div style={{marginBottom: '5%'}}>
            <img src={spinner} width="180px" className="App-logo d-block mx-auto img-fluid w-70" alt="logo" />
            <p>Enter a link to a recipe in the box below and let Sous Chef do the rest of the work. If it all looks good, click "Add Recipe" to import the recipe into your recipe box.</p>
        <form onSubmit={updateRecipeURL}>
          <input className="form-control" type="text" name="url"></input>
        <button style={{marginTop: '20px', marginLeft: 'auto'}} className="btn btn-outline-dark" type="submit">Get Recipe</button>
        </form>
      </div>
      </>
    );
  } else {
    return (
      <div style={{marginBottom: '5%'}}>
        <img src={spinner} width="180px" className="App-logo d-block mx-auto img-fluid w-70" alt="logo" />
        <h1>{data.name}</h1>
        <h3 style={{fontWeight: "bold"}}>Ingredients</h3>
        <ul>{data.ingredients.map((item, index) => <li key={index}>{item}</li>)}</ul>
        <h3 style={{fontWeight: "bold"}}>Instructions</h3>
        <ul>{data.instructions.map((item, index) => <li key={index}>{item}</li>)}</ul>
        <button style={{marginTop: '20px', marginLeft: 'auto'}} className="btn btn-outline-dark" onClick={addRecipe}>Add to MyRecipes</button>
      </div>
    );
  }
}

export default App;