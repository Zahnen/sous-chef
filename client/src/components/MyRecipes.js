import React, { useState } from 'react';
// import firebase from "firebase/app";
import firebase from "../firebase";
import 'firebase/auth';
import 'firebase/firestore';
import Recipe from './Recipe';
import { useCollectionData } from 'react-firebase-hooks/firestore';

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
        id: recipe.id
      }
      selectRecipe(firestoreRecipe);
    });
  }

  if (selectedRecipe == null) {
    return(
      <>
      {recipes && recipes.map((recipe, index) => 
            <div onClick={() => handleSelectingRecipe(recipe.id)} key={index}>
            <h1>{recipe.title}</h1>
            <h2>{recipe.author}</h2>
          </div>)}
      </>
    )
  } else {
    return(
      <>
      <button onClick={resetRecipe}>Back To Recipe List</button>
      <Recipe recipe={selectedRecipe} onDeselect={resetRecipe}/>
      </>
    )
  }
}
export default MyRecipes;