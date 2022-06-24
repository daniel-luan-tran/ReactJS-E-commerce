import { Outlet } from "react-router-dom"
import { Fragment } from "react"
import{ ReactComponent as CrownLogo } from '../../assets/crown.svg'


const Navigation = () => {
    return (
      <Fragment>

<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
        <CrownLogo className="logo"/>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">HomePage</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/shop">Shop</a>
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