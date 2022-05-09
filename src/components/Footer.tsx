import './styles/Footer.css';
import Logo from './Logo';
import FacebookIcon from '../images/icon-facebook.svg';
import TwitterIcon from '../images/icon-twitter.svg';
import PinterestIcon from '../images/icon-pinterest.svg';
import InstagramIcon from '../images/icon-instagram.svg';

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="wrapper">
        <div className="Footer-container">
          <figure className="Footer-logo">
            <Logo color="#FFFFFF" />
          </figure>
          <div className="Footer-about">
            <div className="Footer-about-section">
              <h4 className="Footer-about-title">Features</h4>
              <a href="/#" className="Footer-about-link">
                Link Shortening
              </a>
              <a href="/#" className="Footer-about-link">
                Branded Links
              </a>
              <a href="/#" className="Footer-about-link">
                Analytics
              </a>
            </div>
            <div className="Footer-about-section">
              <h4 className="Footer-about-title">Resources</h4>
              <a href="/#" className="Footer-about-link">
                Blog
              </a>
              <a href="/#" className="Footer-about-link">
                Developers
              </a>
              <a href="/#" className="Footer-about-link">
                Support
              </a>
            </div>
            <div className="Footer-about-section">
              <h4 className="Footer-about-title">Company</h4>
              <a href="/#" className="Footer-about-link">
                About
              </a>
              <a href="/#" className="Footer-about-link">
                Our Team
              </a>
              <a href="/#" className="Footer-about-link">
                Careers
              </a>
              <a href="/#" className="Footer-about-link">
                Contact
              </a>
            </div>
          </div>
          <div className="Footer-social">
            <figure className="Footer-social-icon">
              <img src={FacebookIcon} alt="Facebook icon" />
            </figure>
            <figure className="Footer-social-icon">
              <img src={TwitterIcon} alt="Twitter icon" />
            </figure>
            <figure className="Footer-social-icon">
              <img src={PinterestIcon} alt="Pinterest icon" />
            </figure>
            <figure className="Footer-social-icon">
              <img src={InstagramIcon} alt="Instagram icon" />
            </figure>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
