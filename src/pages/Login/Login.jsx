import '../../styles/Login/login.css'
import NavBar from '../../components/Navbar/Navbar';
import {Link} from 'react-router-dom'


function Login() {
    return (
        <div className="login-container">
            <div className="nav-bar">
                <NavBar />
            </div>

            <div className="login-content">
                <img src="src\assets\images\Login\flower.png" alt="" className='flower-icon'/>

                <p className="login-name">Login</p>

                <div className="input-container">

                    <div>
                        <img src="src\assets\images\Login\email.png" alt="" className='email-icon' />    
                        <input
                            className="input-style"
                            type="email" 
                            id='emailLogin' 
                            placeholder='email'/>
                    </div>
    
                    <div>
                        <img src="src\assets\images\Login\password.png" alt="" className='password-icons'/> 
                        <input
                        className="input-style"
                        type="password" 
                        id='passwordLogin' 
                        placeholder='senha'/>
                    </div>
                </div>

                <div className="register-text-container">
                    <p className="register-text">
                        Se ainda não tem uma conta, <Link to="/signup" className="clickHere">clique aqui</Link> para fazer o seu cadastro.
                    </p>
                </div>

                
            </div>
        </div>
    )
}

export default Login;