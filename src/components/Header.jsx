import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav>
        <h1>
          <Link to="/">King Router</Link>
        </h1>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="careers">Careers</NavLink>
        <NavLink to="/help">Help</NavLink>
      </nav>
    </header>
  );
}
