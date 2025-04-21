import '../App.css'
import './LoginBody.css'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import womanAndCat from '../assets/womanAndCat.svg'

function LoginBody(){
    const navigate = useNavigate()
    
    function Autenticar(){
        navigate('/Agenda')
    }

    return (
        
        <div className='loginSection'>
            <img src={womanAndCat} alt="womanAndCat" className='womanAndCat'/>

            <div className='loginCard'>
                <h2>Login</h2>

                <input type="user" className='loginInput' placeholder='Usuario'/>
                <input type="password" className='loginInput' placeholder='Senha'/>

                <p className='loginButton' onClick={Autenticar}>
                    <Link to='/' className='noLinkStyle'>Entrar</Link>
                </p>
            </div>
        </div>
    )

}

export default LoginBody;