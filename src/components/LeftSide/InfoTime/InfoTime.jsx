import styled from 'styled-components'
import ButtonRound from "./ButtonRound"
import pontoLaranja from '../../../assets/orange-circle.png'

export default function InfoTime(props) {

    const { data } = props
    const dataTime = data.dt
    function getData(dataTime) {
        const timestamp = dataTime;

        const data = new Date(timestamp * 1000);
        const dia = data.getDate();
        const mes = data.getMonth() + 1;
        const ano = data.getFullYear();

        // Formatando para o formato dia/mês/ano
        const dataFormatada = `${dia}/${mes}/${ano}`;

        return (dataFormatada);
    }

    function getDataWeak(dataTime) {
        const timestamp = dataTime


        const data = new Date(timestamp * 1000);

        const diasDaSemana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
        const diaDaSemana = diasDaSemana[data.getDay()];

        const horas = (`0${data.getHours()}`).slice(-2);
        const minutos = (`0${data.getMinutes()}`).slice(-2);

        const dataFormatada = `${diaDaSemana}, ${horas}:${minutos}`;

        return (dataFormatada);
    }

    return (
        <InfoContainer>
            <Climate>
                <img src={pontoLaranja} />
                <h1></h1>
                <h2>°C</h2>
            </Climate>
            <span>Céu aberto</span>
            <hr size="5"></hr>
            <Now>
                <h3>{getData(dataTime)}</h3>
                <h3>{getDataWeak(dataTime)}</h3>
            </Now>
            <C>
                <ButtonRound>
                    <label className="switch">
                        <input type="checkbox" />
                        <span className="slider round"></span>
                    </label>
                </ButtonRound>
                <h3>°F</h3>
            </C>
            <C>
                <ButtonRound>
                    <label className="switch">
                        <input type="checkbox" />
                        <span className="slider round"></span>
                    </label>
                </ButtonRound>
                <h3>Dark Mode</h3>
            </C>
            <Hfim>Todos os direitos reservados. 2023.</Hfim>
        </InfoContainer>
    )
}

const InfoContainer = styled.div`
hr{
    background-color: #EDEDED;
    border: 0px;
    margin-left: 4.5em;
    margin-right: 4.5em;
    margin-top: 1em;
    margin-bottom: 1em;
}
`

const Hfim = styled.div`
    position: absolute;
    bottom: 0px;
    font-size:0.9em;
    left: 3em;
    padding-bottom: 1.2em;
`

const Climate = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-top:1em;
height: 6em;

  img{
    width: 2.8em;
    height: 2.8em;
    margin-right:1.4em;
  }
  h1{
    font-size: 4.2em;
    color:#f49805;
  }
`;

const Now = styled.div`
line-height: 0.5em;
`;

const C = styled.div`
width: 100%;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
margin: 0px;
h3{
    width: 3em;
}
`;