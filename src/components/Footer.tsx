import './styles/Footer.css';
import Logo from './Logo';
import SocialIcon from './SocialIcon';

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
            <a href="/#" className="Footer-social-icon">
              <SocialIcon icon="facebook" />
            </a>
            <a href="/#" className="Footer-social-icon">
              <SocialIcon icon="twitter" />
            </a>
            <a href="/#" className="Footer-social-icon">
              <SocialIcon icon="pinterest" />
            </a>
            <a href="/#" className="Footer-social-icon">
              <SocialIcon icon="instagram" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
