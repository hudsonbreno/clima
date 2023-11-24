import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import styled from "styled-components";
import ButtonRound from "./components/ButtonRound";
import casaco from './assets/casaco.png';
import lupa from './assets/lupa.png';
import pontoLaranja from './assets/orange-circle.png'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <MiniBody>
      <LeftSide>
        <Intro>
          <img src={casaco}/>
          <Title>Levo um casaquinho?</Title>
        </Intro>
        <SearchContainer>
          <SearchBar>
          <img src={lupa}/>
          <input type="text" placeholder="Procure por uma cidade"></input>
          </SearchBar>
        </SearchContainer>
        <InfoTime>
          <Climate>
            <img src={pontoLaranja}/>
            <h1>31°C</h1>
          </Climate>
          <span>Céu aberto</span>
          <Now>16/11/2023 Quinta-feira, 16:32</Now>
          <C>
            <ButtonRound>
              <label class="switch">
                <input type="checkbox" />
                <span class="slider round"></span>
              </label>
            </ButtonRound>
            <span>°F</span>
          </C>
          <C>
            <ButtonRound>
              <label class="switch">
                <input type="checkbox" />
                <span class="slider round"></span>
              </label>
            </ButtonRound>
            <span>Dark Mode</span>
          </C>
        </InfoTime>
      </LeftSide>
      <RightSide>
        <SelectDay>
          <a>Hoje</a>
          <a>Proximos dias</a>
        </SelectDay>
        <City>São Paulo</City>
        <LatLong>lat:44.34 long:35.25</LatLong>
        <Cards>
          <CardBox>
            <SmallLetter>Mínima</SmallLetter>
            <InfoCard>31° C</InfoCard>
          </CardBox>
          <CardBox>
            <SmallLetter>Máxima</SmallLetter>
            <InfoCard>31° C</InfoCard>
          </CardBox>
          <CardBox>
            <SmallLetter>Umidade</SmallLetter>
            <InfoCard>31° C</InfoCard>
          </CardBox>
          <CardBox>
            <SmallLetter>Velocidade do vento</SmallLetter>
            <InfoCard>31° C</InfoCard>
          </CardBox>
        </Cards>
        <Casaquinho>Não, você não quer levar um casaquinho</Casaquinho>
        <Copyright>
          Dados fornecidos pela <a>Open Weather API</a>
        </Copyright>
      </RightSide>
      </MiniBody>
    </>
  );
}

export default App;

const MiniBody = styled.div`
display: flex;
  flex-direction: row;
`

const LeftSide = styled.div`
display:flex;
flex-direction: column;
width: 570px;
height: 100%;
background-color: #FFFF;
;
`;

const Intro = styled.div`
padding-left: 28px;

display:flex;
flex-direction: row;
width: 279px;
height: 60px;
img{
  width: 69px;
  height: 69px;
  padding-right: 10px;
}
`;

const Title = styled.div`
font-family: "Poppins";
font-size: 40px;
font-weight: 600;
line-height: 33px;
letter-spacing: 0em;
text-align: left;
font-weight:bold;
`;

const SearchContainer = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;

`

const SearchBar = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 36px;
  width: 250px;
  height: 40px;
  flex-direction:row;
  width: 250px;
  background-color: #EDEDEF;
  border-radius:12px;
  img{
    width: 18px;
    height: 20px;
    opacity: 80%;
    padding-right: 3px;
  }
  input{
    width: 80%;
    background-color: #EDEDEF;
    border: none;
    outline: none;
    font-family: "Montserrat";
    font-weight: 600;
    font-weight: 22px;
    line-height: 24px;
  }

`;

const RightSide = styled.div`
display:flex;
flex-direction:row;
`
const SelectDay = styled.div`
display: flex;
flex-direction:column;
`;

const City = styled.div`
font-family: Poppins;
font-size: 50px;
font-weight: 400;
line-height: 16px;
letter-spacing: 0em;
text-align: left;
background: #222222;

`;

const LatLong = styled.div`
font-family: Poppins;
font-size: 8px;
font-weight: 400;
line-height: 16px;
letter-spacing: 0em;
text-align: left;
`;

const Cards = styled.div`
display: flex;
flex-direction: row;
`;

const CardBox = styled.div`
display: flex;
flex-direction: row;
`;

const SmallLetter = styled.div`
font-family: Poppins;
font-size: 8px;
font-weight: 700;
line-height: 8px;
letter-spacing: 0em;
text-align: left;

`;
const InfoCard = styled.div`
font-family: Poppins;
font-size: 16px;
font-weight: 600;
line-height: 12px;
letter-spacing: 0em;
text-align: left;

`;

const Casaquinho = styled.div`
font-family: Poppins;
font-size: 8px;
font-style: italic;
font-weight: 400;
line-height: 12px;
letter-spacing: 0em;
text-align: left;
`;

const Copyright = styled.div`
  font-family: Poppins;
  font-size: 8px;
  font-weight: 400;
  line-height: 12px;
  letter-spacing: 0em;
  text-align: left;
`;

const InfoTime = styled.div`
font-family: Poppins;
font-size: 8px;
font-weight: 400;
line-height: 12px;
letter-spacing: 0em;
text-align: left;
background: #222222;
padding-top: 33px;
height: 145px;

`;

const Climate = styled.div`
display: flex;
justify-content: center;
align-items: center;

  img{
    width: 50px;
    height: 50px;
  }
  h1{
    font-size: 60px;
    font-family: "Poppins";
  }
`;

const Now = styled.div`
  font-family: Poppins;
  font-size: 8px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: left;
`;

const C = styled.div`
  font-family: Poppins;
  font-size: 8px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: left;
`;

      {/* <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </p>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}