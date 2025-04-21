import '../App.css'
import './DataBody.css'
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function DataBody() {

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const ag = queryParams.get('ag');

    const [agenda, setAgenda] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/agenda')
            .then(res => res.json())
            .then(data => {
                setAgenda(data)
                const selecionado = data[ag];
                if (selecionado) {
                    setNomeTutor(selecionado.nome_Tutor);
                    setContato(selecionado.contato_Tutor);
                    setNomeAnimal(selecionado.nome_Animal);
                    setOpcaoEspecie(selecionado.especie);
                    setRaca(selecionado.raca);
                    setEntrada(formatarData(selecionado.entrada));
                    setSaida(formatarData(selecionado.saida));
                    setDiarias(duracaoAtual(selecionado.entrada))
                    setDiariasTotais(duracaoTotal(selecionado.entrada, selecionado.saida))
                }
            });
    }, []);

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
    };

    const [diariasTotais, setDiariasTotais] = useState("*");
    const [saida, setSaida] = useState("");
    const handleChangeSaida = (event) => {
        setSaida(event.target.value);
        setDiariasTotais(duracaoTotal(entrada, event.target.value))
    };

    return (
        <div>
            <div className='justify'>
                <ul>
                    {agenda.map((n, i) => {
                        if (ag == i) {
                            return <li key={i} className='noListStyle3'>

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
                            </li>
                        }
                    })}
                </ul>

            </div>

            <div className='justify'>
                <button className='saveButton'>Salvar</button>
                <button className='deleteButton'>Excluir</button>
            </div>
        </div>
    )

    function duracaoTotal(entrada, saida) {

        if (saida != "*") {
            let _entrada = entrada.split("/")
            let _saida = saida.split("/")

            const DataEntrada = new Date(`${_entrada[2]}-${_entrada[1]}-${_entrada[0]}`);
            const DataSaida = new Date(`${_saida[2]}-${_saida[1]}-${_saida[0]}`);

            const mseg = DataSaida - DataEntrada;
            const dias = mseg / (1000 * 60 * 60 * 24);

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

        return Math.floor(dias)

    }

    function formatarData(data) {
        if (data !== "*") {
            let _data = data.split("/");
            return `${_data[2]}-${_data[1]}-${_data[0]}`;
        }
        return "";
    }


}

export default DataBody;