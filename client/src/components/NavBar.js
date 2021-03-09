import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
return(
  <>
  <nav className="navbar navbar-expand-lg navbar-light bg-white">
    <div className="container-fluid">
      <Link to="/" className="navbar-brand" >Sous Chef</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target=".navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/addrecipeurl">Add Recipe Via URL</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/addrecipe">Add Recipe Manually</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/myrecipes">My Recipes</Link>
          </li>
        </ul>
        <div class="collapse navbar-collapse text-right navbarNav">
            <ul class="navbar-nav ms-auto flex-nowrap">
            <li className="nav-item text-right">
              <Link className="nav-link active m-2" aria-current="page" to="/signin">Signin</Link>
            </li>
            </ul>
        </div>
      </div>
    </div>
  </nav>
  </>

)}

export default NavBar;