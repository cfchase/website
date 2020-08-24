import React from "react"
import { Link } from "gatsby"
import '../styles/_home.scss'

const Nav = () => {

  return (

<nav className="navbar navbar-dark navbar-expand-md fixed-top">
    <a className="navbar-brand" href="/" aria-label="DataHubLogo"><img src="/assets/img/logos/datahub_color_hrz-gry-bg.png" alt="DATA HUB LOGO" /></a>

    <div className="collapse navbar-collapse justify-content-end" id="dhNavbar">
        <ul className="navbar-nav">
            <li className="nav-item">
            <Link to="/docs" className="nav-link">DOCS</Link>
            </li>
        </ul>
        <ul className="navbar-nav">
            <li className="nav-item">
            <Link to="/news" className="nav-link">NEWS</Link>
            </li>
        </ul>
        <ul className="navbar-nav">
            <li className="nav-item">
            <Link to="/community" className="nav-link">COMMUNITY</Link>
            </li>
        </ul>
        <ul className="navbar-nav">
            <li className="nav-item">
                <a className="nav-link" href="{{ site.baseurl }}/feed.xml"><i className="fas fa-rss"></i></a>
            </li>
        </ul>
    </div>

    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#dhNavbar" aria-controls="dhNavbar" aria-expanded="false" aria-label="Toggle navigation">
        <i className="fas fa-bars"></i>
    </button>

</nav>

)}

export default Nav