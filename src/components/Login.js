import styles from './Login.module.css'
import logo from '../assets/images/logo.png';
import coin from '../assets/images/coin.png';
import { useState } from 'react';
import {FaEye, FaEyeSlash} from 'react-icons/fa'
import _ from 'lodash'
import {loginValidator} from '../utils/validateInputs';
import { useHistory } from 'react-router-dom';

export default function Login () {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(true)
    const [errors, setErrors] = useState({})
    const history = useHistory()
    const handleSubmit = () => {
        setErrors({});
        const validationErrors = loginValidator({email, password})
        if(!_.isEmpty(validationErrors)){
            setErrors(validationErrors)
            return
        }
        window.alert('Login Successfull')
        setEmail(''); setPassword(''); 
    }
    return (
        <div className={styles.mainContainer}>
            <div className={styles.innerContainer}>
                <div className={styles.left_InnerContainer}>
                   <div className={styles.logo}><img alt='logo' src={logo} /></div> 
                    <img alt='coin_Image' src={coin} className={styles.coinBox}/>
                </div>
                <div className={styles.right_InnerContainer}>
                    <div className={styles.centerContent}>
                        <h2 className={styles.heading}>Log into <br/>your account</h2>
                        <div className={styles.inputContainer}>
                            <label className={styles.lableText}>Email</label><br/>
                            <input type='email' className={styles.inputText} name='email' value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            {errors && errors.email && <p className={styles.error}>{errors.email }</p>}
                        </div>
                        <div className={styles.inputContainer}>
                            <label className={styles.lableText}>Password</label><br/>
                            <input type={showPassword ? 'text' : 'password'} className={styles.inputText} name='password' value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                
                            />{showPassword ? <FaEyeSlash style={{marginLeft:'-20px',marginBottom:'-4px', cursor:'pointer'}}
                                onClick={() => setShowPassword(false)}
                            /> : 
                            <FaEye style={{marginLeft:'-20px',marginBottom:'-4px', cursor:'pointer'}}
                                onClick={() => setShowPassword(true)}
                            /> }
                            {errors && errors.password && <p className={errors.password.length > 30 ? styles.long_error : styles.error}>{errors.password}</p>}
                        </div>
                        <div>
                            <button className={styles.submitBtn} onClick={handleSubmit}>Create an account</button>
                        </div>

                        <p style={{fontWeight:'bold', paddingBottom:'60px'}}>Don't have an account yet? 
                        <span style={{color:'red', cursor:'pointer', marginLeft:'4px'}} onClick={() => history.push('/signup')}>Sign Up</span>
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}