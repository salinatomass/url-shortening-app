import './styles/Boost.css';
import BgBoostMobile from '../images/bg-boost-mobile.svg';
import BgBoostDesktop from '../images/bg-boost-desktop.svg';
import useDesktopBreakpoint from '../hooks/useDesktopBreakpoint';

const Boost = () => {
  const isDesktop = useDesktopBreakpoint();

  return (
    <section
      className="Boost"
      style={{
        backgroundImage: `url(${isDesktop ? BgBoostDesktop : BgBoostMobile})`,
      }}
    >
      <div className="wrapper">
        <div className="Boost-container">
          <h2 className="Boost-title">Boost your links today</h2>
          <button type="button" className="primaryButton">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Boost;
