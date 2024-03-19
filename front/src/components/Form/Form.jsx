import React, {useState} from 'react';
import validation from '../../utils/validation';
import styles from './Form.module.scss';


function Form({login}) {
    const [userData, setUSerData] = useState({
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({
        email: '',
        password:''
    });

    const handleChange = (event) =>{
        setUSerData({
            ...userData,
            [event.target.name]: event.target.value
        });

        setErrors(
            validation({
                ...userData,
                [event.target.name]: event.target.value
            })
        );
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData);
    }

    return (  
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <form>
                    <h1>LOGIN</h1>
                    {/*<label>EMAIL</label>*/}
                    <input 
                        className={styles.inputBox}
                        type='email' 
                        placeholder='Email'
                        value={userData.email} 
                        name='email' 
                        onChange={handleChange}
                    />
                    <p>{errors.email}</p>

                    
                    {/*<label>PASSWORD</label>*/}
                    <input 
                        className={styles.inputBox}
                        type="password" 
                        placeholder='Password'
                        value={userData.password} 
                        name='password' 
                        onChange={handleChange}
                    />
                    <p>{errors.password}</p>
                    
                    <button type='submit' className={styles.btnLog} onClick={handleSubmit}>Login</button>
                    
                </form>
            </div>
        </div>
    );
}

export default Form;