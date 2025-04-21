import '../App.css'
import './ScheduleBody.css'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function Schedule() {

    const [agenda, setAgenda] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
        fetch('http://localhost:3000/agenda')
            .then(res => res.json())
            .then(data => setAgenda(data));
    }, []);

    return (
        <div>

            <div className='justify'>
                <button className='createButton' onClick={()=>navigate("/Agendar")}>novo agendamento</button>
            </div>

            <div className='justify'>
                <ul>
                    {agenda.map((n, i) => <Link to={`/Agendamento?ag=${i}`} className='noLinkStyle'><li key={i} className='noListStyle'>
                        <div>
                            <p>{n.nome_Animal} ({n.nome_Tutor}) | {formatarData(n.entrada, n.saida)}</p>
                        </div>
                    </li></Link>)}
                </ul>
            </div>

        </div>
    )

    function formatarData(entrada, saida) {
        let dataE = entrada.split('/')
        let dataS = saida.split('/')

        if (saida != "*") {
            return `${dataE[0]}/${dataE[1]} - ${dataS[0]}/${dataS[1]}`
        }
        return `${dataE[0]}/${dataE[1]}`
    }

}



export default Schedule;