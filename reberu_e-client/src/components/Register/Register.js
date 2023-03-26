import styles from './Register.module.css';
import { useContext } from "react";
import { Link } from "react-router-dom";

import { useForm } from "../../hooks/useForm";
import { AuthContext } from "../../contexts/AuthContext";

export const Register = () => {


  const { onRegisterSubmit } = useContext(AuthContext);
  const { values, changeHandler, onSubmit } = useForm({
      email: '',
      fullname:'',
      mobile:'',
      password: '',
      confirmPassword: '',
  }, onRegisterSubmit);

  return (
    <div className={styles.divBody}>
      <div className={styles.registerBody}>
        <div className={styles['main-container']}>
          <div className={styles['main-forms']}>
            <div className={styles['signup-form']}>
              <form className={styles['sign-back']} id="register" method="post" onSubmit={onSubmit}>
                <h1>sign UP</h1>
                <div className={styles['signup-row']}>
                  <i className="fa fa-user"></i>
                  <label htmlFor="fullname"></label>
                  <input
                   type="text"
                   name="fullname"
                   placeholder="FULL NAME"
                   value={values.fullname}
                  onChange={changeHandler} />
                </div>
                <div className={styles['signup-row']}>
                  <i className="fa fa-envelope-o"></i>
                  <label htmlFor="email"></label>
                  <input 
                  type="text"
                   name="email"
                   placeholder="EMAIL"
                   value={values.email}
                   onChange={changeHandler}
                   />
                </div>
                <div className={styles['signup-row']}>
                  <i className="fa fa-phone"></i>
                  <label htmlFor="mobile"></label>
                  <input 
                  type="text" 
                  name="mobile" 
                  placeholder="MOBILE"
                  value={values.mobile}
                  onChange={changeHandler}  />
                </div>
                <div className={styles['signup-row']}>
                  <i className="fa fa-key"></i>
                  <label htmlFor="pass"></label>
                  <input 
                  type="password"
                   name="password" 
                   placeholder="PASSWORD"
                   value={values.password}
                   onChange={changeHandler} />
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
                    <Link to="/login">Already Have Account ?</Link>
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
