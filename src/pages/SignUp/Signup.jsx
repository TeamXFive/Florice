import '../../styles/SignUp/signup.css'
import NavBar from '../../components/Navbar/Navbar';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function SignUp() {

    const [imgUser, setNewImageUser] = useState("src/assets/images/Login/user-gray.png")
    const [imgEmail, setNewImageEmail] = useState("src/assets/images/Login/email.png")
    const [imgPassword, setNewImagePassword] = useState("src/assets/images/Login/password.png")

    const [notFocusedUser, isOnFocusUser] = useState(false);
    const [notFocusedEmail, isOnFocusEmail] = useState(false);
    const [notFocusedPassword, isOnFocusPassword] = useState(false);

    const changeImage = (setNewImage, imgUrl, checkFocus, type) => {
        setNewImage(imgUrl)

        switch (type) {
            case "user":
                isOnFocusUser(checkFocus)
                break
            case "email":
                isOnFocusEmail(checkFocus)
                break
            case "password":
                isOnFocusPassword(checkFocus)
                break
        }
    }

    return (
        <div className="signup-container">
            <div className="nav-bar">
                <NavBar/>
            </div>
           

            <div className="signup-content">

                <div className="welcome-signup">
                    <p className="has-account">Já Tem Conta?</p>

                    <p className="go-to-login">Seja bem-vindo, <Link to="/login" className="clickHere">clique aqui </Link>para <br></br>logar na sua conta.</p>

                    <img src="src/assets/images/Login/flower.png" className="flower-icon-signup" />

                </div>

                <div className="create-account">
                    <p className="create-account-call">Crie Sua Conta</p>


                    <div className="inputs-signup">

                        <div className="individual-input-container">
                            <img className={notFocusedUser ? "box-img-focus" : "box-img"} src={imgUser}/>
                            
                            <input
                                className='input-style-signup'
                                placeholder='username'
                                type='username'
                                onBlur={() => changeImage(setNewImageUser, "src/assets/images/Login/user-gray.png", false, "user")}
                                onFocus={() => changeImage(setNewImageUser, "src/assets/images/Login/user-green.png", true, "user")}

                            />
                        </div>
 

                        <div className="individual-input-container">
                            <img className={notFocusedEmail ? "box-img-focus" : "box-img"}  src={imgEmail}/>

                            <input
                                className='input-style-signup'
                                placeholder='email'
                                type='email'
                                onBlur={() => changeImage(setNewImageEmail, "src/assets/images/Login/email.png", false, "email")}
                                onFocus={() => changeImage(setNewImageEmail, "src/assets/images/Login/email-green.png", true, "email")}

                            />

                        </div>


                        <div className="individual-input-container">
                            <img className={notFocusedPassword ? "box-img-focus" : "box-img"}  src={imgPassword}/>

                            <input
                                className='input-style-signup'
                                placeholder='password'
                                type='password'
                                onBlur={() => changeImage(setNewImagePassword, "src/assets/images/Login/password.png", false, "password")}
                                onFocus={() => changeImage(setNewImagePassword, "src/assets/images/Login/password-green.png", true, "password")}

                            />
                        </div>


                    </div>


                    <button className="enterButton">Criar conta</button>

                    <div className="orSignup">
                        <p>ou<br></br>entre com suas redes</p>
                    </div>

                    <div className="socialMediasIcon">
                        <img src="src/assets/images/Login/linkedin.png" alt="" />
                        <img src="src/assets/images/Login/facebook.png" alt="" />
                        <img src="src/assets/images/Login/google.png" alt="" />
                    </div>

                </div>

            </div>

        </div>
    )
}

export default SignUp;