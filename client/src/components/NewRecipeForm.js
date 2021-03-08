import React from "react";
import firebase from "../firebase";
import 'firebase/firestore';


function NewRecipeForm(){
  const firestore = firebase.firestore();
  function addRecipeToFirestore(event) {
    event.preventDefault();
    console.log(event.target.title.value);
    console.log(event.target.author.value);
    console.log(event.target.ingredients.value);
    console.log(event.target.instructions.value);
    firestore.collection('recipes').add(
      {
        title: event.target.title.value,
        author: event.target.author.value,
        ingredients: event.target.ingredients.value,
        instructions: event.target.instructions.value
      }
    )
    console.log(event.target.title.value);
    console.log("done");
  }
  return (
    <>
      <div className="container" style={{width: '48rem'}}>
        <form onSubmit={addRecipeToFirestore}>
          <div class="mb-3">
            <label for="title" className="form-label">Title</label>
            <input
              className="form-control"
              type="text"
              name="title"
              placeholder="Title" />
          </div>
          <div class="mb-3">
            <label for="author" className="form-label">Author</label>
            <input
              className="form-control"
              type="text"
              name="author"
              placeholder="Author" />
          </div>
          <div class="mb-3">
            <label for="ingredients" className="form-label">Ingredients</label>
            <textarea
              className="form-control"
              type="textarea"
              name="ingredients"
              placeholder="Ingredients (separate entries with commas)" />
          </div>
          <div class="mb-3">
            <label for="instructions" className="form-label">Instructions</label>
            <textarea
              className="form-control"
              type="textarea"
              name="instructions"
              placeholder="Instructions (separate entries with commas)" />
          </div>
          <div class="mb-3">
            <label for="image" class="form-label">Default file input example</label>
            <input class="form-control" type="file" name="image" />
          </div>
          <button variant="success" type="submit">Add Recipe</button>
        </form>
      </div>
    </>
  );
}

export default NewRecipeForm;