import styles from './Register.module.css';

export const Register = () => {
  return (
    <div className={styles.divBody}>
      <div className={styles.registerBody}>
        <audio autoplay>
          <source src="https://www.epidemicsound.com/track/TFQTXMbhOs/" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <div className={styles['main-container']}>
          <div className={styles['main-forms']}>
            <div className={styles['signup-form']}>
              <form className={styles['sign-back']} action="" method="">
                <h1>sign UP</h1>
                <div className={styles['signup-row']}>
                  <i className="fa fa-user"></i>
                  <label htmlFor="fullname"></label>
                  <input type="text" name="fullname" value="" placeholder="FULL NAME" />
                </div>
                <div className={styles['signup-row']}>
                  <i className="fa fa-envelope-o"></i>
                  <label htmlFor="email"></label>
                  <input type="text" name="email" value="" placeholder="EMAIL" />
                </div>
                <div className={styles['signup-row']}>
                  <i className="fa fa-phone"></i>
                  <label htmlFor="mobile"></label>
                  <input type="text" name="mobile" value="" placeholder="MOBILE" />
                </div>
                <div className={styles['signup-row']}>
                  <i className="fa fa-key"></i>
                  <label htmlFor="pass"></label>
                  <input type="password" name="password" value="" placeholder="PASSWORD" />
                </div>
                <div className={styles['input-box']}>
                <label htmlFor="continue"></label>
              <input type="submit" name="continue" value="Sign-Up" />
            </div>
                <div className={styles['form-bottom']}>
                  <div className={styles['remember']}>
                    <label htmlFor="check"></label>
                    <input type="checkbox" name="check" value="" />
                    <span>Remember</span>
                  </div>
                  <div className={styles['remember']}>
                    <a href="#">Already Have Account ?</a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
