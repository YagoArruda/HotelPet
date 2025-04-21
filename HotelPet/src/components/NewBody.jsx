import '../App.css'
import './NewBody.css'

import {useState } from 'react';
import { useNavigate } from 'react-router-dom'

function NewBody() {

    const navigate = useNavigate()

    const [opcaoEspecie, setOpcaoEspecie] = useState("");
    const handleChangeEspecie = (event) => {
        setOpcaoEspecie(event.target.value);
    };

    const [raca, setRaca] = useState("");
    const handleChangeRaca = (event) => {
        setRaca(event.target.value);
    };

    const [nomeAnimal, setNomeAnimal] = useState("");
    const handleChangeNomeAnimal = (event) => {
        setNomeAnimal(event.target.value);
    };

    const [contato, setContato] = useState("");
    const handleChangeContato = (event) => {
        setContato(event.target.value);
    };

    const [nomeTutor, setNomeTutor] = useState("");
    const handleChangeNomeTutor = (event) => {
        setNomeTutor(event.target.value);
    };

    const [diarias, setDiarias] = useState(0);
    const [entrada, setEntrada] = useState("");
    const handleChangeEntrada = (event) => {
        setEntrada(event.target.value);
        setDiarias(duracaoAtual(event.target.value))
        setDiariasTotais(duracaoTotal(event.target.value, saida))
    };

    const [diariasTotais, setDiariasTotais] = useState("*");
    const [saida, setSaida] = useState("");
    const handleChangeSaida = (event) => {
        setSaida(event.target.value);
        setDiarias(duracaoAtual(entrada))
        setDiariasTotais(duracaoTotal(entrada, event.target.value))
    };

    return (
        <div>
            <div className='justify'>
                <div className='card'>
                    <div className='justify'>
                        <h1>Agendar</h1>
                    </div>
                    <div className='justify-start'>
                        <h2>Tutor: </h2>
                        <input id="inputNomeTutor" type="text" value={nomeTutor} onChange={handleChangeNomeTutor} placeholder="Nome" />
                    </div>
                    <div className='justify-start'>
                        <h3>Contato: </h3>
                        <input id="inputContato" type="text" value={contato} onChange={handleChangeContato} placeholder="xxxx-xxxx" />
                    </div>
                    <div className='justify-start'>
                        <h3>Animal: </h3>
                        <input id="inputNomeAnimal" type="text" value={nomeAnimal} onChange={handleChangeNomeAnimal} placeholder="Nome animal" />
                    </div>
                    <div className='justify-start'>
                        <h3>Especie:</h3>
                        <select id="selectEspecie" value={opcaoEspecie} onChange={handleChangeEspecie}>
                            <option value="">Selecione...</option>
                            <option value="Gato">Gato</option>
                            <option value="Cachorro">Cachorro</option>
                        </select>
                        <h1>-</h1>
                        <input id="inputRaca" type="text" value={raca} onChange={handleChangeRaca} placeholder="Raça" />
                    </div>

                    <h3>Estadia:</h3>
                    <ul>
                        <li>Entrada: <input id="entrada" type="date" value={entrada} onChange={handleChangeEntrada} placeholder="" /></li>
                        <li>Previsão de saída: <input id="saida" type="date" value={saida} onChange={handleChangeSaida} placeholder="" /></li>
                        <li id="diarias">Diárias até o momento: {diarias}</li>
                        <li>Diárias totais previstas: {diariasTotais}</li>
                    </ul>
                </div>
            </div>

            <div className='justify'>
                <button className='createAgButton' onClick={() => agendar(getAgendamento())}>Agendar</button>
            </div>
        </div>
    )


    function duracaoTotal(entrada, saida) {

        if (saida != "*" && saida != "") {
            let _entrada = entrada.split("/")
            let _saida = saida.split("/")

            const DataEntrada = new Date(`${_entrada[2]}-${_entrada[1]}-${_entrada[0]}`);
            let DataSaida = new Date(`${_saida[2]}-${_saida[1]}-${_saida[0]}`);

            if (_entrada[2] > _saida[2]) {
                DataSaida = DataEntrada
                setSaida(entrada)
            }
            else if (_entrada[1] > _saida[1]) {
                DataSaida = DataEntrada
                setSaida(entrada)
            }
            else if ((_entrada[1] == _saida[1]) && (_entrada[0] > _saida[0])) {
                DataSaida = DataEntrada
                setSaida(entrada)
            }

            const mseg = DataSaida - DataEntrada;
            const dias = mseg / (1000 * 60 * 60 * 24);

            if (dias < 0) {
                return 0
            }
            return dias
        }
        return "*"

    }

    function duracaoAtual(entrada) {

        let _entrada = entrada.split("/")

        const DataEntrada = new Date(`${_entrada[2]}-${_entrada[1]}-${_entrada[0]}`);
        const DataAtual = new Date();

        const mseg = DataAtual - DataEntrada;
        const dias = mseg / (1000 * 60 * 60 * 24);

        if (dias < 0) {
            return 0
        }
        return Math.floor(dias)

    }

    function validar() {

        if (nomeTutor != "" && nomeAnimal != null && contato != null && (opcaoEspecie == "Gato" || opcaoEspecie == "Cachorro") && raca != "" && entrada != "") {
            return true
        }

        return false
    }

    function agendar(agendamento) {
        console.log(agendamento)
        if (validar()) {
            fetch(`http://localhost:3000/agenda`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(agendamento)
            })
                .then(res => {
                    if (res.ok) {
                        alert("Agendamento realizado com sucesso!");
                        navigate("/Agenda")
                    } else {
                        alert("Erro ao agendar!");
                    }
                });
        }
    }

    function getAgendamento(){
        let agendamento = {
            nome_Animal: nomeAnimal,
            nome_Tutor: nomeTutor,
            contato_Tutor: contato,
            especie: opcaoEspecie,
            raca: raca,
            entrada: desformatarData(entrada),
            saida: desformatarData(saida)
        };
        return agendamento;
    }

    function desformatarData(data){
        if (data !== "*") {
            let _data = data.split("-");
            return `${_data[2]}/${_data[1]}/${_data[0]}`;
        }
        return "*";
    }

}

export default NewBody;