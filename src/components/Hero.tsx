import './styles/Hero.css';
import HeroImage from '../images/illustration-working.svg';
import { ReactNode } from 'react';

interface HeroProps {
  children?: ReactNode;
}

const Hero = ({ children }: HeroProps) => {
  return (
    <main className="Hero">
      <figure
        className="Hero-image"
        style={{ backgroundImage: `url(${HeroImage})` }}
      ></figure>
      <div className="wrapper">
        <div className="Hero-container">
          <h1>More than just shorter links</h1>
          <p>
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>
          <button className="Hero-button primaryButton">Get Started</button>
        </div>
      </div>

      {children}
    </main>
  );
};

export default Hero;
