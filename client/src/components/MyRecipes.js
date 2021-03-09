import React, {useState} from 'react';
import firebase from "firebase/app";
import { useCollectionData } from 'react-firebase-hooks/firestore';


function MyRecipes() {
  const recipeRef = firebase.firestore().collection('recipes');
  const [recipes] = useCollectionData(recipeRef.orderBy('title'), { idField: 'id' });

  return(
    <>
    {recipes && recipes.map((recipe, index) => 
          <div key={index}>
          <h1>{recipe.title}</h1>
          <h2>{recipe.author}</h2>
        </div>)}
    </>
  )
}
export default MyRecipes;
