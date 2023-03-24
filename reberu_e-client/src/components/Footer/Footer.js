import styles from '../Footer/Footer.module.css';

export const Footer = () => {


  const onClickScrollHome = (e) => {
    e.preventDefault();

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  };


  return (
    <footer className={`tm-bg-dark-blue`}>
      <div className={`${styles.stickyArrow}`}>
        <a href="#" onClick={onClickScrollHome}>
          <i className={`fa fa-chevron-circle-up `}></i>
        </a>
      </div>
      <div className="container">
        <div className="row">
          <p className="col-sm-12 text-center tm-font-light tm-color-white p-4 tm-margin-b-0">
            Copyright &copy; <span className="tm-current-year">2023</span> Travel Agency - ReberuE
          </p>
        </div>
      </div>
    </footer>
  );
};
