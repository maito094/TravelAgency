import styles from './Login.module.css';

export const Login = () => {
  return (
    <div className={styles.divBody}>
      <div className={styles.loginBody}>
        <div className={styles.container}>
          <form action="GET">
            <div className={styles.title}>Login</div>
            <div className={styles['input-box']}>
              <input type="text" placeholder="Enter Your Email" required />
              <div className={styles.underline}></div>
            </div>
            <div className={styles['input-box']}>
              <input type="password" placeholder="Enter Your Password" required />
              <div className={styles.underline}></div>
            </div>
            <div className={styles['input-box']}>
              <input type="submit" name="" value="Continue" />
            </div>
          </form>
          <div className={styles.option}>or Connect With Social Media</div>
          <div className={styles.twitter}>
            <a href="#">
              <i className="fa fa-twitter-square" aria-hidden="true"></i>Sign in With Twitter
            </a>
          </div>
          <div className={styles.facebook}>
            <a href="#">
              <i className="fa fa-facebook-square" aria-hidden="true"></i>Sign in With Facebook
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
