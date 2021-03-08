import React from "react";
import firebase from "../firebase";
import 'firebase/auth';
import 'firebase/firestore';

function NewRecipeForm(){
  const firestore = firebase.firestore();
  const auth = firebase.auth();

  function getItemsFromTextArea(str) {
		return str.split(",").map(x => x.trim());
	}

  function addRecipeToFirestore(event) {
    event.preventDefault();
    firestore.collection('recipes').add(
      {
        title: event.target.title.value,
        author: event.target.author.value,
        ingredients: getItemsFromTextArea(event.target.ingredients.value),
        instructions: getItemsFromTextArea(event.target.instructions.value),
        // imgURL: url,
        userId: auth.currentUser.uid
      }
    )
  }
  
  return (
    <>
      <div className="container" style={{width: '48rem'}}>
        <form onSubmit={addRecipeToFirestore}>
          <div className="mb-3">
            <label name="title" className="form-label">Title</label>
            <input
              className="form-control"
              type="text"
              name="title"
              placeholder="Title" />
          </div>
          <div className="mb-3">
            <label name="author" className="form-label">Author</label>
            <input
              className="form-control"
              type="text"
              name="author"
              placeholder="Author" />
          </div>
          <div className="mb-3">
            <label name="ingredients" className="form-label">Ingredients</label>
            <textarea
              className="form-control"
              type="textarea"
              name="ingredients"
              placeholder="Ingredients (separate entries with commas)" />
          </div>
          <div className="mb-3">
            <label name="instructions" className="form-label">Instructions</label>
            <textarea
              className="form-control"
              type="textarea"
              name="instructions"
              placeholder="Instructions (separate entries with commas)" />
          </div>
          <div className="mb-3">
            <label name="image" className="form-label">Default file input example</label>
            <input className="form-control" type="file" name="image" />
          </div>
          <button variant="success" type="submit">Add Recipe</button>
        </form>
      </div>
    </>
  );
}

export default NewRecipeForm;