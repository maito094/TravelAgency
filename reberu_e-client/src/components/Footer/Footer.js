import styles from '../Footer/Footer.module.css'

export const Footer = () => {
  return (
      
    <footer className={`tm-bg-dark-blue ${styles.footer}`}>
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
