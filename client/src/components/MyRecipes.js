import React, {useState} from 'react';
// import firebase from "../firebase";
import firebase from "firebase/app";

function MyRecipes() {
  const recipeRef = firebase.firestore().collection('recipes');
  const [data, setData] = useState([]);

  async function getRecipes() {
  const snapshot  = await recipeRef.get();
  const array = snapshot.docs.map((doc, index) => {
    return doc.data()
  })
  setData(array);
  console.log(array);
  console.log(data);
}

  return(
    <>
    <button onClick={getRecipes}>Hello</button>
    </>
  )
}
export default MyRecipes;
