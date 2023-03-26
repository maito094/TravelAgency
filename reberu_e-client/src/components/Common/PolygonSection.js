import { Link } from 'react-router-dom';

export const PolygonSection = ({ title, subtitle, path, btnMsg }) => {
  return (
    <div className="tm-section-2">
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <h2 className="tm-section-title">{title}</h2>
            <p className="tm-color-white tm-section-subtitle">{subtitle}</p>
            <Link to={`${path}`} className="tm-color-white tm-btn-white-bordered">
              {btnMsg}
            </Link>
          </div>
        </div>
      </div>
      <div className="tm-position-relative">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none" className="tm-section-down-arrow">
          <polygon fill="#ee5057" points="0,0  100,0  50,60"></polygon>
        </svg>
      </div>
    </div>
  );
};
