import React, { useState, useContext } from 'react';
import { AuthContext } from '../context';

//CSS
import './login.css';

const LoginPage = (props) => {
    const { authenticated, login } = useContext(AuthContext);
    
    //hooks
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        login(email, password)//integração com o contexto / api
    }
    
    return (
        <div id='login'>
            <h1 className='title'>Login</h1>
            <p>{String(authenticated)}</p>
            <form className='form'onSubmit={handleSubmit}>
                <div className='field'>
                    <label htmlFor='email'>Email:</label>
                    <input 
                        type='email' 
                        name='email' 
                        id='email' 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='Digite seu email'
                    />
                </div>
                <div className='field'>
                    <label htmlFor="password">Password:</label>
                    <input
                        type='password'
                        name='password'
                        id='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        
                    />
                </div>
                <div className='actions'>
                    <button type='submit'>Enter</button>
                </div>

            </form>
        </div>
    )
}
export default LoginPage;