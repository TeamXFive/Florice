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
                <img src="src\assets\images\Login\flower-login.png" alt="" className='flower-icon'/>

                <p className="login-name">Login</p>

                <div className="input-container">

                    <div className="input-box">
                        <img src="src\assets\images\Login\email.png" alt="" className='email-icon' />    
                        <input
                            className="input-style"
                            type="email" 
                            id='emailLogin' 
                            placeholder='email'/>
                    </div>
    
                    <div className="input-box">
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

                <div className="buttons">
                    <button className="enterButton">Entrar</button>
                </div>

                <div className="orSignup">
                    <p>ou<br></br>entre com suas redes</p>
                </div>

                <div className="socialMediasIcon">
                    <img src="src\assets\images\Login\linkedin.png" alt="" />
                    <img src="src\assets\images\Login\facebook.png" alt="" />
                    <img src="src\assets\images\Login\google.png" alt="" />
                </div>

                
            </div>
        </div>
    )
}

export default Login;