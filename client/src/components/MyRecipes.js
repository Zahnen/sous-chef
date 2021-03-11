import React, { useState } from 'react';
// import firebase from "firebase/app";
import firebase from "../firebase";
import 'firebase/auth';
import 'firebase/firestore';
import Recipe from './Recipe';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import './MyRecipes.css';


function MyRecipes() {
  const auth = firebase.auth();
  const firestore = firebase.firestore();
  const recipeRef = firestore.collection('recipes');
  const uid = auth.currentUser.uid;
  const userRecipeRef = firebase.firestore().collection('recipes').where("userId", "==", uid);
  const [recipes] = useCollectionData(userRecipeRef, { idField: 'id' });
  const [selectedRecipe, selectRecipe] = useState(null);

  function resetRecipe(){
    selectRecipe(null);
  }

  function handleSelectingRecipe(id){
    recipeRef.doc(id).get().then((recipe) => {
      const firestoreRecipe = {
        title: recipe.get("title"),
        author: recipe.get("author"),
        imgURL: recipe.get("imgURL"),
        ingredients: recipe.get("ingredients"),
        instructions: recipe.get("instructions"),
        source: recipe.get("source"),
        id: recipe.id
      }
      selectRecipe(firestoreRecipe);
    });
  }
  if (uid === null){
    return (
      <h1>Loading</h1>
    )
  }
  else if (selectedRecipe == null) {
    return(
      <>
      <section className="hero-section">
      <div className="card-grid">
      {recipes && recipes.map((recipe, index) =>
            <div className="card" onClick={() => handleSelectingRecipe(recipe.id)} key={index}>
            <div className="card__background">
            <div className="card__content">
            <h3 className="card__heading">{recipe.title}</h3>
            <p>{recipe.author}</p>
            <div className="image-cropper">
            <img src={recipe.imgURL} alt="recipe hero" className="profile-pic"></img>
            </div>
          </div>
          </div>
          </div>)}
          </div>
      </section>
      </>
    )
  } else {
    return(
      <>
      <button onClick={resetRecipe} className="btn btn-outline-dark">Back To Recipe List</button>
      <p></p>
      <Recipe recipe={selectedRecipe} onDeselect={resetRecipe}/>
      </>
    )
  }
}
export default MyRecipes;