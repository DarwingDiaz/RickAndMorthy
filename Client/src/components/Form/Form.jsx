import styles from './Form.module.css';
import { useState } from 'react';
import validation from './validation';
import { Navigate } from 'react-router-dom';



const Form = ({login}) =>{

    const[userData, setUserData] = useState({
        email:'',
        password:''
    });

    const[errors, setErrors] = useState({})

    const handleChange = (e) => {
        setErrors(validation({...userData,[e.target.name]: e.target.value}));
        setUserData({...userData,[e.target.name]: e.target.value});

    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        login(userData);
        Navigate('/home');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className={styles.formulario}>
            <img  className={styles.imagen} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT22tOJBapiFLJPnQ2Ry7KqkFItU2iJLl-peA&usqp=CAU' alt=''/>
            <div className={styles.requi}>
                <div className={styles.usuario}>
                <label className={styles.label}   htmlFor='email'>EMAIL</label>
                <input 
                    className={styles.i}
                    name="email"
                    placeholder="Escribe tu email..."
                    type="text"
                    value={userData.email}
                    onChange={handleChange}
                />
               {errors.email && <span className = {styles.error} > {errors.email}</span>} 
            
                <label className={styles.label} htmlFor='password'>PASSWORD</label>
                <input
                    className={styles.i}
                    name="password"
                    placeholder="Contraseña"
                    type="password"
                    value={userData.password}
                    onChange={handleChange}
                />
                {errors.password && <span className = {styles.error} > {errors.password}</span>} 
               </div>
            </div>
            <button className={styles.btn} type='submit'>SUBMIT</button>
            </div>
        </form>
    );

}

export default Form;