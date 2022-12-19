import { Link, Outlet, useLocation } from "react-router-dom";
import { Fragment, useContext, useEffect } from "react";
import { UserContext, UserProvider } from "../contexts/user.context";
import{ ReactComponent as CrownLogo } from '../../assets/crown.svg';
import {SignOutUser, auth, onAuthStateChangedHandler, createUserDocumentFromAuth} from '../../utils/firebase/firebase.utils';
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropDown from "../cart-dropdown/cart-dropdown.component";
import "./navigation.styles.scss";

const Navigation = ({user}) => {

    const currentUser = user
    const SignOutHandler = async () => {
      await SignOutUser(auth);
      //setCurrentUser(null);
    }

    return (
      <Fragment>
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
          <div className="container-fluid">
            <Link className="navbar-brand" to="#">
                <CrownLogo className="logo"/>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
              <ul className="navbar-nav text-end">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">HomePage</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/shop">Shop</Link>
                </li>
                {currentUser 
                ?      
                <li className="nav-item">
                  <Link className="nav-link" to="/auth" onClick={SignOutHandler}>Sign out</Link>
                </li>
                :
                <li className="nav-item">
                  <Link className="nav-link" to="/auth">Authentication</Link>
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