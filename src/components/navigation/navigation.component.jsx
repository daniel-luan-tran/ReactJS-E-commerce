import { Link, Outlet } from "react-router-dom"
import { Fragment } from "react"
import{ ReactComponent as CrownLogo } from '../../assets/crown.svg'


const Navigation = () => {
    return (
      <Fragment>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand" to="#">
                <CrownLogo className="logo"/>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">HomePage</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/shop">Shop</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/sign-in">Sign In</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/sign-up">Sign Up</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Outlet/>
      </Fragment>
    )
}

export default Navigation