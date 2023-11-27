import styled from 'styled-components';

export default function RightSide(props) {
    const { data } = props
    console.log(data)

    function withCasaquinho(){
        if(true)
            return ("Não, você não quer levar um casaquinho")
        else
            return("Melhor levar um casaquinho")
    }

    return (
        <RightContainer>
            <SelectDay>
                <a>Hoje</a>
                <a>Proximos dias</a>
            </SelectDay>
            <City>{data.name}</City>
            <LatLong>lat: {data.coord.lat} long: {data.coord.lon}</LatLong>
            <Cards>
                <CardBox>
                    <SmallLetter>Mínima</SmallLetter>
                    <InfoCard>{(data.main.temp_min - 273.15).toFixed(2)} °C</InfoCard>
                </CardBox>
                <CardBox>
                    <SmallLetter>Máxima</SmallLetter>
                    <InfoCard>{(data.main.temp_max - 273.15).toFixed(2)} °C</InfoCard>
                </CardBox>
                <CardBox>
                    <SmallLetter>Umidade</SmallLetter>
                    <InfoCard>{data.main.humidity} %</InfoCard>
                </CardBox>
                <CardBox>
                    <SmallLetter>Velocidade do vento</SmallLetter>
                    <InfoCard>{(data.wind.speed)} m/s</InfoCard>
                </CardBox>
            </Cards>
            <Casaquinho>{withCasaquinho()}</Casaquinho>
            <Copyright>
                Dados fornecidos pela <a>Open Weather API</a>
            </Copyright>
        </RightContainer>
    )
}

const RightContainer = styled.div`
display: flex;
flex-direction: column;
width: 70%;
background-color: #d8d8d861;
`

const SelectDay = styled.div`
display: flex;
flex-direction:row;
width: 100%;
margin-top:1em;
font-size: 1.5em;
a{
    color:#000;
    margin-left:1.4em;
    margin-right: 2em;
}
`;

const City = styled.div`
margin-top:0.7em;
margin-left:0.4em;
margin-bottom:0.4em;
font-size: 500%;
flex-wrap:wrap;
font-weight: 400;
text-align: left;
line-height: 0.75em;
`;

const LatLong = styled.div`
font-family: Poppins;
margin-left:3em;
margin-bottom: 2em;
font-size: 0.8em;
font-weight: 400;
line-height: 2em;
letter-spacing: 0;
text-align: left;
`;

const Cards = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
margin-left: 2em;
`;

const CardBox = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: start;
width: 18em;
height: 5.2em;
margin-bottom: 2em;
margin-right: 4em;
padding-left: 2em;
background-color: #4F43AE;
border-radius: 14px;
`;

const SmallLetter = styled.div`
font-size: 0.7em;
font-weight: 600;
line-height: 8px;
letter-spacing: 0em;
text-align: left;
color:#fff;
`;
const InfoCard = styled.div`
color:#fff;
margin-top:0.5em;
font-size: 1.5em;
font-weight: 600;
line-height: 12px;
letter-spacing: 0em;
text-align: left;

`;

const Casaquinho = styled.div`
margin-left:3em;
font-size: 0.7em;
font-style: italic;
font-weight: 400;
line-height: 12px;
letter-spacing: 0em;
text-align: left;
color:#AFADAD
`;

const Copyright = styled.div`
margin-left:2.5em;
margin-top:2em;
padding-bottom:1.3em;
  font-size: 0.9em;
  font-weight: 400;
  line-height: 12px;
  letter-spacing: 0em;
  text-align: left;
`;
