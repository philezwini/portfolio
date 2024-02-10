// Navigation.js
import React from 'react';
import {Link} from 'react-router-dom'

const Navigation = () => {
    return (
      <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
        <div class="container-fluid justify-content-center">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse flex-grow-0" id="navbarSupportedContent">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link class="nav-link" to="/">Home</Link>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Research</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Publications</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Teaching</a>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
};

export { Navigation };
