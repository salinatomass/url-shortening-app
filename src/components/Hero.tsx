import './styles/Hero.css';
import { ReactNode } from 'react';

import HeroImage from '../images/illustration-working.svg';

interface HeroProps {
  children?: ReactNode;
}

const Hero = ({ children }: HeroProps) => {
  return (
    <main className="Hero">
      <div className="wrapper">
        <div className="Hero-container">
          <figure
            className="Hero-image"
            style={{ backgroundImage: `url(${HeroImage})` }}
          ></figure>
          <div className="Hero-content">
            <h1 className="Hero-title">More than just shorter links</h1>
            <p className="Hero-description">
              Build your brand’s recognition and get detailed insights on how
              your links are performing.
            </p>
            <button type="button" className="Hero-button primaryButton">
              Get Started
            </button>
          </div>
        </div>
      </div>

      {children}
    </main>
  );
};

export default Hero;
