import styles from './Login.module.css';

import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthContext';
import { useForm } from '../../hooks/useForm';

const LoginFormKeys = {
  Email: 'email',
  Password: 'password',
};

export const Login = () => {
  const { onLoginSubmit } = useContext(AuthContext);
  const { values, changeHandler, onSubmit } = useForm(
    {
      [LoginFormKeys.Email]: '',
      [LoginFormKeys.Password]: '',
    },
    onLoginSubmit
  );

  return (
    <div className={styles.divBody}>
      <div className={styles.loginBody}>
        <div className={styles.container}>
          <form id="login" method="POST" onSubmit={onSubmit}>
            <div className={styles.title}>Login</div>
            <div className={styles['input-box']}>
              <input
                type="email"
                id="email"
                placeholder="Enter Your Email"
                name={LoginFormKeys.Email}
                value={values[LoginFormKeys.Email]}
                onChange={changeHandler}
                required
              />
              <div className={styles.underline}></div>
            </div>
            <div className={styles['input-box']}>
              <input
                type="password"
                id="login-password"
                name={LoginFormKeys.Password}
                value={values[LoginFormKeys.Password]}
                onChange={changeHandler}
                placeholder="Enter Your Password"
                required
              />
              <div className={styles.underline}></div>
            </div>
            <div className={styles['input-box']}>
              <input type="submit" value="Continue" />
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
