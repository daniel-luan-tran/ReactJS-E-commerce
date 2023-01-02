import { Link, Outlet, useLocation } from "react-router-dom";
import { Fragment, useContext, useEffect } from "react";
import { UserContext, UserProvider } from "../contexts/user.context";
import{ ReactComponent as CrownLogo } from '../../assets/crown.svg';
import {SignOutUser, auth, onAuthStateChangedHandler, createUserDocumentFromAuth} from '../../utils/firebase/firebase.utils';
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropDown from "../cart-dropdown/cart-dropdown.component";
import "./navigation.styles.scss";
import $ from "jquery";
import { NavigationContext } from "../contexts/navigation.context";

const Navigation = ({user}) => {
    const {navigation, setNavigation} = useContext(NavigationContext)
    const currentUser = user

    const SignOutHandler = async () => {
      await SignOutUser(auth);
      //setCurrentUser(null);
    }

    const collapseTrigger = () => {
      let ele = $("#navbar-toggler");
      let isExpanded = ele.attr("aria-expanded");
      
      if (isExpanded == "false") {
        $("#navbar-toggler .menu-icon").removeClass("active");
      } else {
        $("#navbar-toggler .menu-icon").addClass("active");
      }
    }

    const navigateHandler = (e) => {
      const link = e.target.to;
      setNavigation(link);
    }

    return (
      <Fragment>
        <nav className="navbar navbar-expand-lg navbar-light main-background fixed-top" style={{zIndex: "2"}}>
          <div className="container-fluid">
            <Link className="navbar-brand nav-link" to="/" onClick={(e) => {navigateHandler(e)}}>
                <CrownLogo className="logo"/>
            </Link>
            <button id="navbar-toggler" onClick={collapseTrigger} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              {/* <span className="navbar-toggler-icon"></span> */}
              <div className="menu-icon">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
              <ul className="navbar-nav text-end link-hover">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/" onClick={(e) => {navigateHandler(e)}}>HomePage</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/shop" onClick={(e) => {navigateHandler(e)}}>Shop</Link>
                </li>
                {currentUser 
                ?      
                <li className="nav-item">
                  <Link className="nav-link" to="/auth" onClick={(e) => {SignOutHandler(); navigateHandler(e)}}>Sign out</Link>
                </li>
                :
                <li className="nav-item">
                  <Link className="nav-link" to="/auth" onClick={(e) => {navigateHandler(e)}}>Authentication</Link>
                </li>
                }
                <li className="nav-item d-flex justify-content-end" >
                  <CartIcon />
                </li>
                <CartDropDown />
              </ul>
            </div>
          </div>
        </nav>
        <Outlet/>
      </Fragment>
    )
}

export default Navigation