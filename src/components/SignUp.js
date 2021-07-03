import styles from './SignUp.module.css'
import logo from '../assets/images/logo.png';
import coin from '../assets/images/coin.png';
import { useState } from 'react';
import {FaEye, FaEyeSlash} from 'react-icons/fa'
import _ from 'lodash'
import { signUpValidator } from '../utils/validateInputs';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

export default function SignUp () {
    const [full_name, setFullName] = useState('');
    const [phone_number, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(true)
    const [errors, setErrors] = useState({})
    const history = useHistory()
    const handleSubmit = () => {
        setErrors({});
        const validationErrors = signUpValidator({full_name, phone_number, email, password})
        if(!_.isEmpty(validationErrors)){
            setErrors(validationErrors)
            return
        }
        axios.post('https://60d5f346943aa60017768d18.mockapi.io/api/v1/users', 
        {full_name, phone_number, email, password})
        .then(res => {
            setFullName(''); setEmail(''); setPassword(''); setPhoneNumber('')
            console.log(res)
        })
        .catch(err => console.log(err))
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
                        <h2 className={styles.heading}>Create <br/>an account</h2>
                        <div className={styles.inputContainer}>
                            <label className={styles.lableText}>Full Name</label><br/>
                            <input type='text' className={styles.inputText} name='full_name' value={full_name}
                                onChange={(e) => setFullName(e.target.value)}
                            />
                            {errors && errors.full_name && <p className={styles.error}>{errors.full_name}</p>}
                        </div>
                        <div className={styles.inputContainer}>
                            <label className={styles.lableText}>Phone Number</label><br/>
                            <input type='tel' className={styles.inputText} name='phone_number' value={phone_number}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                            />
                            {errors && errors.phone_number && <p className={styles.error}>{errors.phone_number}</p>}
                        </div>
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

                        <p style={{fontWeight:'bold', paddingBottom:'60px'}}>Already have an account? 
                            <span style={{color:'red', cursor:'pointer', marginLeft:'4px'}} onClick={() => history.push('/login')}>Sign In</span>
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}