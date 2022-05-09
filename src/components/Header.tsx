import './styles/Header.css';

import { AiOutlineMenu } from 'react-icons/ai';
import logo from '../images/logo.svg';

const Header = () => {
  return (
    <header className="Header">
      <div className="wrapper">
        <div className="Header-container">
          <figure className="Header-logo">
            <img src={logo} alt="Shortly logo" />
          </figure>
          <button className="Header-menu">
            <AiOutlineMenu />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
