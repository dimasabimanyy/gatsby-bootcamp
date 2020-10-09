import { Link } from "gatsby"
import React from "react"

const Header = () => {
  return (
    <nav>
      <h3 className="logo">Dimas Abimanyu</h3>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Header
