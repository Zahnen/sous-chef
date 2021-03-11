import React from "react";
import firebase from "../firebase";
import PropTypes from "prop-types";
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

function EditRecipeForm(props){
  const firestore = firebase.firestore();
  const {recipe} = props;

  function getItemsFromTextArea(str) {
		return str.split(",").map(x => x.trim());
	}

  async function updateRecipe(event) {
    event.preventDefault();
    const propertiesToUpdate = {
      title: event.target.title.value,
      author: event.target.author.value,
      ingredients: getItemsFromTextArea(event.target.ingredients.value),
      instructions: getItemsFromTextArea(event.target.instructions.value),
      notes: event.target.notes.value,
      imgURL: recipe.imgURL,
    }
    firestore.collection('recipes').doc(recipe.id).update(propertiesToUpdate);
  }

  return (
    <>
      <div className="container" style={{width: '48rem'}}>
        <form onSubmit={updateRecipe}>
          <div className="mb-3">
            <label name="title" className="form-label">Title</label>
            <input
              className="form-control"
              type="text"
              name="title"
              defaultValue={recipe.title} />
          </div>
          <div className="mb-3">
            <label name="author" className="form-label">Author</label>
            <input
              className="form-control"
              type="text"
              name="author"
              defaultValue={recipe.author} />
          </div>
          <div className="mb-3">
            <label name="ingredients" className="form-label">Ingredients</label>
            <textarea
              className="form-control"
              type="textarea"
              name="ingredients"
              defaultValue={(recipe.ingredients).join(', ')} />
          </div>
          <div className="mb-3">
            <label name="instructions" className="form-label">Instructions</label>
            <textarea
              className="form-control"
              type="textarea"
              name="instructions"
              defaultValue={(recipe.ingredients).join(', ')} />
          </div>
          <div className="mb-3">
            <label name="notes" className="form-label">Recipe Notes</label>
            <textarea
              className="form-control"
              type="textarea"
              name="notes"
              defaultValue={recipe.notes} />
          </div>
          <button type="submit">Save Changes</button>
        </form>
      </div>
    </>
  );
}

EditRecipeForm.propTypes = {
  recipe: PropTypes.object
};

export default EditRecipeForm;