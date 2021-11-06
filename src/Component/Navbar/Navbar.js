import React from "react";
import './Navbar.css'
import { Link} from 'react-router-dom'
const Navbar = () => {

  return (
    <div className="head">
<nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          
          <Link className="navbar-brand" to='/home'>
          Softsensor.AI
          </Link>
          
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to='/home'>
                  Home
                </Link>
              </li>
            </ul>
            

                    
            <form className="d-flex"> 
               <input
                className="form-control me-2 input"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
