import React, { useState } from "react";
import { useHistory } from "react-router-dom"; 
import firebase from "../firebase";
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

function NewRecipeForm(){
  const firestore = firebase.firestore();
  const auth = firebase.auth();
  const [image, setImage] = useState(null);
  const [isLoaded, setLoading] = useState(true);
  const history = useHistory();

  function getItemsFromTextArea(str) {
		return str.split(",").map(x => x.trim());
	}

  const handleChange = e => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  async function getUrl(event) {
    event.preventDefault();
    const imageRef = firebase.storage().ref("images").child(`${image.name}`);
    await imageRef.put(image);
    return setLoading(false);
  }

  async function addRecipeToFirestore(event) {
    event.preventDefault();
    const imageRef = firebase.storage().ref("images").child(`${image.name}`);
    const receivedUrl = await imageRef.getDownloadURL().then(setLoading(false));
    firestore.collection('recipes').add(
      {
        title: event.target.title.value,
        author: event.target.author.value,
        ingredients: getItemsFromTextArea(event.target.ingredients.value),
        instructions: getItemsFromTextArea(event.target.instructions.value),
        notes: event.target.notes.value,
        imgURL: receivedUrl,
        userId: auth.currentUser.uid
      }
    );
    history.push("/myrecipes")
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
            <label name="notes" className="form-label">Recipe Notes</label>
            <textarea
              className="form-control"
              type="textarea"
              name="notes"
              placeholder="Recipe Notes" />
          </div>
          <div className="mb-3">
            <label name="image" className="form-label">Photo</label>
            <input className="form-control" type="file" name="image" onChange={handleChange} />
          </div>
          {isLoaded ? <button style={{marginTop: '20px', marginRight: '20px'}} className="btn btn-outline-dark" onClick={getUrl}>Begin Upload</button> : <button style={{marginTop: '20px', marginRight: '20px'}} className="btn btn-outline-dark" type="submit">Complete</button>}
        </form>
      </div>
    </>
  );
}

export default NewRecipeForm;