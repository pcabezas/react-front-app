import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import $ from "jquery";

const TopBar = () => {
  const login = useSelector((state) => state.auth || {})
  const { isLoggedIn = false } = login

  useEffect( () => {
    $(document).foundation();
  }, [isLoggedIn])

  return <div className="top-bar">
            <div className="top-bar-left">
              <ul className="dropdown menu" id="mydropdown" data-dropdown-menu>
                <li className="menu-text">Site Title</li>
                <li>
                  <a href="#">One</a>
                  <ul className="menu vertical">
                    <li><a href="#">One</a></li>
                    <li><a href="#">Two</a></li>
                    <li><a href="#">Three</a></li>
                  </ul>
                </li>
                <li><a href="#">Two</a></li>
                <li><a href="#">Three</a></li>
              </ul>
            </div>
            <div className="top-bar-right">
              {
                isLoggedIn ?
                <>
                  <ul className="menu">
                    <li>Logeado || {`${ isLoggedIn }`}</li>
                  </ul>
                </>
                :
                <>
                  <ul className="menu">
                    <Link to={'/login'}>Login</Link>
                  </ul>
                </>
              }
            </div>
          </div>
}

export default TopBar;