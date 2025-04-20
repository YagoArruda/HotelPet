import '../App.css'
import './Header.css'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

function Header(){
    const navigate = useNavigate()

    function Autenticar(){
        navigate('/Rents')
    }


    return (
        <header className='header'>
            <div className='headerHalf'>
                <h1>
                    <Link to='/' className='noLinkStyle'>HotelPet</Link>
                </h1>
            </div>

            <div className='headerHalfInverse'>
                <p className='headerButton' onClick={Autenticar}>
                    <Link to='/' className='noLinkStyle'>Agenda</Link>
                </p>
            </div>

        </header>
    )
}

export default Header;