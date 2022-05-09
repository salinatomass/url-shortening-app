import './styles/Statistics.css';
import BrandRecognition from '../images/icon-brand-recognition.svg';
import DetailedRecords from '../images/icon-detailed-records.svg';
import FullyCustomizable from '../images/icon-fully-customizable.svg';

const Statistics = () => {
  return (
    <section className="Statistics">
      <div className="wrapper">
        <h2 className="Statistics-title">Advanced Statistics</h2>
        <p className="Statistics-description">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
        <div className="Statistics-container">
          <article className="Statistics-card">
            <figure className="Statistics-card-image">
              <img src={BrandRecognition} alt="" />
            </figure>
            <h3 className="Statistics-card-title">Brand Recognition</h3>
            <p className="Statistics-card-desciption">
              Boost your brand recognition with each click. Generic links don’ t
              mean a thing. Branded links help instil c onfidence in your
              content.
            </p>
          </article>
          <article className="Statistics-card">
            <div className="Statistics-line_divider"></div>
            <figure className="Statistics-card-image">
              <img src={DetailedRecords} alt="" />
            </figure>
            <h3 className="Statistics-card-title">Detailed Records</h3>
            <p className="Statistics-card-desciption">
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </article>
          <article className="Statistics-card">
            <div className="Statistics-line_divider"></div>
            <figure className="Statistics-card-image">
              <img src={FullyCustomizable} alt="" />
            </figure>
            <h3 className="Statistics-card-title">Fully Customizable</h3>
            <p className="Statistics-card-desciption">
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
