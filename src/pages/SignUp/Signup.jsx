import '../../styles/SignUp/signup.css'
import NavBar from '../../components/Navbar/Navbar';
import { Link } from 'react-router-dom';

function SignUp() {

    return (
        <div className="signup-container">
            <div className="nav-bar">
                <NavBar/>
            </div>
           

            <div className="signup-content">

                <div className="welcome-signup">
                    <p className="has-account">Já Tem Conta?</p>

                    <p className="go-to-login">Seja bem-vindo, <Link to="/login" className="clickHere">clique aqui </Link>para <br></br>logar na sua conta.</p>

                    <img src="src\assets\images\Login\flower.png" className="flower-icon-signup" />

                </div>

                <div className="create-account">
                    <p className="create-account-call">Crie Sua Conta</p>


                    <div className="inputs-signup">

                        <div className="individual-input-container">
                            <img className="box-img" src="src\assets\images\Login\user-gray.png"/>
                            
                            <input
                                className='input-style-signup'
                                placeholder='username'
                                type='username'

                            />
                        </div>
 

                        <div className="individual-input-container">
                            <img className="box-img" src="src\assets\images\Login\email.png"/>

                            <input
                                className='input-style-signup'
                                placeholder='email'
                                type='email'

                            />

                        </div>


                        <div className="individual-input-container">
                            <img className="box-img" src="src\assets\images\Login\password.png"/>

                            <input
                                className='input-style-signup'
                                placeholder='password'
                                type='password'

                            />
                        </div>


                    </div>


                    <button className="enterButton">Criar conta</button>

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

        </div>
    )
}

export default SignUp;