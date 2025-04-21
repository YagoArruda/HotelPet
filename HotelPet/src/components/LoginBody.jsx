import '../App.css'
import './LoginBody.css'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import womanAndCat from '../assets/womanAndCat.svg'
import {useState } from 'react';

function LoginBody(){
    const navigate = useNavigate()

    const [login, setLogin] = useState("");
        const handleChangeLogin = (event) => {
            setLogin(event.target.value);
        };
    
        const [senha, setSenha] = useState("");
        const handleChangeSenha = (event) => {
            setSenha(event.target.value);
        };
    
    function Autenticar(){

        if(login == "admin" && senha == "admin"){
            navigate('/Agenda')
        }
        else{
            alert("Dados Incorretos!");
        }
    }

    return (
        
        <div className='loginSection'>
            <img src={womanAndCat} alt="womanAndCat" className='womanAndCat'/>

            <div className='loginCard'>
                <h2>Login</h2>

                <input type="user" className='loginInput' placeholder='Usuario' onChange={handleChangeLogin}/>
                <input type="password" className='loginInput' placeholder='Senha' onChange={handleChangeSenha}/>

                <p className='loginButton' onClick={Autenticar}>
                    <Link to='/' className='noLinkStyle'>Entrar</Link>
                </p>
            </div>
        </div>
    )

}

export default LoginBody;