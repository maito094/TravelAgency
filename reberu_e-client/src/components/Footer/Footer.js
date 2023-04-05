import { useEffect } from 'react';
import { useLocation} from 'react-router-dom';
import styles from '../Footer/Footer.module.css';

export const Footer = () => {


  const onClickScrollHome = (e) => {
    e.preventDefault();

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  };

  let location = useLocation();

  return (

    <footer className={`tm-bg-dark-blue`}>
     {location.pathname==='/' &&  <div className={`${styles.stickyArrow}`}>
       <div onClick={onClickScrollHome}>
         <i className={`fa fa-chevron-circle-up `}></i>
       </div>
     </div>}
      <div className="container">
        <div className="row">
          <p className="col-sm-12 text-center tm-font-light tm-color-white p-4 tm-margin-b-0">
            Copyright &copy; <span className="tm-current-year">{new Date().getFullYear()}</span> Travel Agency - ReberuE
          </p>
        </div>
      </div>
    </footer>
  );
};
