import './styles/Boost.css';
import BgBoostMobile from '../images/bg-boost-mobile.svg';

const Boost = () => {
  return (
    <section
      className="Boost"
      style={{ backgroundImage: `url(${BgBoostMobile})` }}
    >
      <div className="wrapper">
        <div className="Boost-container">
          <h2 className="Boost-title">Boost your links today</h2>
          <button className="primaryButton">Get Started</button>
        </div>
      </div>
    </section>
  );
};

export default Boost;
