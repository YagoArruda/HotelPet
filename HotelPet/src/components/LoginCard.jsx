import '../App.css'
import './LoginCard.css'
import { useNavigate } from 'react-router-dom'
import womanAndCat from '../assets/womanAndCat.svg'

function LoginCard(){
    const navigate = useNavigate()
    
    function Autenticar(){
        navigate('/Rents')
    }

    return (
        
        <div className='loginSection'>
            <img src={womanAndCat} alt="womanAndCat" className='womanAndCat'/>

            <div className='loginCard'>
                <h2>Login</h2>
                <input type="user" className='loginInput' placeholder='Usuario'/>
                <input type="password" className='loginInput' placeholder='Senha'/>
                <button className='loginButton' onClick={Autenticar}>Entrar</button>
            </div>
        </div>
    )

}

export default LoginCard;