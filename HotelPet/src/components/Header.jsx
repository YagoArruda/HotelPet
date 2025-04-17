import '../App.css'
import './Header.css'
import { useNavigate } from 'react-router-dom'

function Header(){
    const navigate = useNavigate()

    function Autenticar(){
        navigate('/Rents')
    }


    return (
        <header className='header'>
            <div className='headerHalf'>
                <h1>HotelPet</h1>
            </div>

            <div className='headerHalfInverse'>
                <button className='headerButton' onClick={Autenticar}><p>Hospedagens</p></button>
                <button className='headerButton' onClick={Autenticar}><p>Cadastros</p></button>
            </div>

        </header>
    )
}

export default Header;