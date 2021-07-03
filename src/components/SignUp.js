import styles from './SignUp.module.css'
import logo from '../assets/images/logo.png';
import coin from '../assets/images/coin.png';
import { useState } from 'react';
import {FaEye, FaEyeSlash} from 'react-icons/fa'


export default function SignUp () {
    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(true)
    const [errors, setErrors] = useState({})
    const handleSubmit= (e) => {
       console.log(fullName, phoneNumber, email, password)
    }
    return (
        <div className={styles.mainContainer}>
            <div className={styles.innerContainer}>
                <div className={styles.left_InnerContainer}>
                   <div><img alt='logo' src={logo} /></div> 
                    <img alt='coin_Image' src={coin} />
                </div>
                <div className={styles.right_InnerContainer}>
                    <div className={styles.centerContent}>
                        <h2 style={{marginTop:'80px', marginBottom:'30px'}}>Create <br/>an account</h2>
                        <div className={styles.inputContainer}>
                            <label className={styles.lableText}>Full Name</label><br/>
                            <input type='text' className={styles.inputText} name='fullName' value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                            />
                            {errors && errors.fullName && <p className={styles.error}>failed input</p>}
                        </div>
                        <div className={styles.inputContainer}>
                            <label className={styles.lableText}>Phone Number</label><br/>
                            <input type='tel' className={styles.inputText} name='phoneNumber' value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                            />
                        </div>
                        <div className={styles.inputContainer}>
                            <label className={styles.lableText}>Email</label><br/>
                            <input type='email' className={styles.inputText} name='email' value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
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
                        </div>
                        <div>
                            <button className={styles.submitBtn} onClick={handleSubmit}>Create an account</button>
                        </div>

                        <p style={{fontWeight:'bold'}}>Already have an account? <span style={{color:'red', cursor:'pointer'}}>Sign In</span></p>
                    </div>
                </div>
            </div>

        </div>
    )
}