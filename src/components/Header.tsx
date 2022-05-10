import './styles/Header.css';

import { AiOutlineMenu } from 'react-icons/ai';
import logo from '../images/logo.svg';
import Navbar from './Navbar';

const Header = () => {
  return (
    <header className="Header">
      <div className="wrapper">
        <div className="Header-container">
          <figure className="Header-logo">
            <img src={logo} alt="Shortly logo" />
          </figure>
          <button
            type="button"
            className="Header-menu"
            onClick={() =>
              document.getElementById('navbar')?.classList.toggle('open')
            }
          >
            <AiOutlineMenu />
          </button>
          <Navbar />
        </div>
      </div>
    </header>
  );
};

export default Header;
