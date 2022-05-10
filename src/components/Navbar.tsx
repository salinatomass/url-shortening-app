import './styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="Navbar" id="navbar">
      <ul className="Navbar-links">
        <li className="Navbar-links-item">
          <a href="/#">Features</a>
        </li>
        <li className="Navbar-links-item">
          <a href="/#">Pricing</a>
        </li>
        <li className="Navbar-links-item">
          <a href="/#">Resources</a>
        </li>
      </ul>
      <div className="Navbar-auth">
        <a href="/#" className="">
          Login
        </a>
        <a href="/#" className="primaryButton">
          Signup
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
