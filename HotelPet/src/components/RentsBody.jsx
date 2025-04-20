import '../App.css'
import './RentsBody.css'
import RentsCard from './RentsCard';

function RentsBody() {

    function viewRegisters() {
        document.getElementById("btRegisters").classList.remove("notSelected")
        document.getElementById("btRegisters").classList.add("selected")

        document.getElementById("btBooked").classList.remove("selected")
        document.getElementById("btBooked").classList.add("notSelected")
    }

    function viewBooked() {
        document.getElementById("btRegisters").classList.remove("selected")
        document.getElementById("btRegisters").classList.add("notSelected")

        document.getElementById("btBooked").classList.remove("notSelected")
        document.getElementById("btBooked").classList.add("selected")
    }

    return (
        <div className='justify'>
            <div className='width50'>
                <div className='areaInformations justify'>
                    <button id='btRegisters' className='button selected' onClick={viewRegisters}>Novo Registro</button>
                    <button id='btBooked' className='button notSelected' onClick={viewBooked}>Visualizar Reserva</button>
                </div>
                <div className='areaInformations justify'>
                    <button id='btBooked' className='button notSelected' onClick={viewBooked}>Visualizar Reserva</button>
                </div>
            </div>

            <div className='width50 textCenter'>
                <h1>Reservas</h1>
                <div className='justify'>
                    <RentsCard></RentsCard>
                </div>
            </div>
        </div>

    )
}

export default RentsBody;