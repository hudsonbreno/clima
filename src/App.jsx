import "./App.css";
import styled from "styled-components";
import LeftSide from './components/LeftSide/LeftSide';
import RigthSide from './components/RightSide';
import { useEffect, useState } from "react";
import axios from "axios";

function App() {

  const [data, setData] = useState({
    name:"Aguarde",
    dt:1223322,
    wind:{
      speed:0,
    },
    main:{
      temp_min:0,
      temp_max:0,
    },
    coord:{
    lat:0.0,
    lon:0.0,
  },
  weather:[{icon:'10d',},{}]

})

  useEffect(() => {
    loadDataFromToDoAPI();

  }, []);

  function loadDataFromToDoAPI(){
    const URL = import.meta.env.VITE_APIURL;
    const key = import.meta.env.VITE_key;
    const city = 'São Paulo';
    axios.get(`${URL}/weather?q=${city}&appid=${key}&lang=pt_br`)
    .then(response => {
      setData(response.data)
      console.log(response.data)
    })
  }

  return (
    <>
      <MiniBody>
        <LeftSide data={data}/>
        <RigthSide data={data}/>
      </MiniBody>
    </>
  );
}

export default App;

const MiniBody = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`

{
  /* <a href="https://vitejs.dev" target="_blank">
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
      </p> */
    }