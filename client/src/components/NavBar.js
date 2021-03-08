import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
return(
  <nav className="navbar navbar-expand-lg navbar-light bg-white">
    <div className="container-fluid">
      <Link to="/catstone" className="navbar-brand" >Sous Chef</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/addrecipeurl">Add Recipe Via URL</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/addrecipe">Add Recipe Manually</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/signin">Signin</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
)}

export default NavBar;