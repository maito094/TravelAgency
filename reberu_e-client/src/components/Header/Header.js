import { useContext } from 'react';

import { Link } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthContext';

export const Header = () => {

  const { isAuthenticated, userEmail } = useContext(AuthContext);


  const showCollapseMenu = (e) => {
    let navbar = e.currentTarget.parentNode.querySelector('#mainNav');

    if (navbar.classList.contains('collapse')) {
      navbar.classList.remove('collapse');
    } else {
      navbar.classList.add('collapse');
    }
  };

  return (
    <div className="tm-top-bar" id="tm-top-bar">
      <div className="container">
        <div className="row">
          <nav className="navbar navbar-expand-lg narbar-light">
            <Link className="navbar-brand mr-auto" to="/">
              <img src="img/logo.png" alt="Site logo" />
              Level
            </Link>
            <button
              onClick={showCollapseMenu}
              type="button"
              id="nav-toggle"
              className="navbar-toggler collapsed"
              data-toggle="collapse"
              data-target="#mainNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div id="mainNav" className="collapse navbar-collapse tm-bg-white">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Home <span className="sr-only">\(current\)</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/portfolio">
                    Portfolio
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/blogs">
                    Blog Entries
                  </Link>
                </li>
                {!isAuthenticated && (
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">
                      Login
                    </Link>
                  </li>
                )}
                {!isAuthenticated && (
                  <li className="nav-item">
                    <Link className="nav-link" to="/register">
                      Register
                    </Link>
                  </li>
                )}
                {isAuthenticated && (
                  <li className="nav-item">
                    <Link className="nav-link" to="/logout">
                      Logout
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};
