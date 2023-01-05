import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import $ from "jquery";

const TopBar = () => {
  const login = useSelector((state) => state.auth || {})
  const { isLoggedIn = false, user } = login

  useEffect( () => {
    $(document).foundation();
  }, [isLoggedIn])

  return <div className="top-bar">
            <div className="top-bar-left">
              <ul className="menu" id="mydropdown">
                <li className="menu-text">Site Title</li>
                <li><a href="#">Two</a></li>
                <li><a href="#">Three</a></li>
              </ul>
            </div>
            <div className="top-bar-right">
              {
                isLoggedIn ?
                <>
                  <ul className="dropdown menu" data-dropdown-menu>
                    <li>
                      <a href="#">{ user.attributes.email }</a>
                      <ul class="menu">
                        <li><Link to={'/logout'}>Logout</Link></li>
                      </ul>
                    </li>
                  </ul>
                </>
                :
                <>
                  <ul className="menu vertical">
                    <li><Link to={'/login'}>Login</Link></li>
                  </ul>
                </>
              }
            </div>
          </div>
}

export default TopBar;