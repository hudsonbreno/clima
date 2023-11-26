import styled from 'styled-components'
import casaco from '../../assets/casaco.png';
import lupa from '../../assets/lupa.png';
import InfoTime from './InfoTime/InfoTime';

export default function LeftSide(props) {

  const { data } = props
    return (
        <LeftContainer>
            <Intro>
                <img src={casaco} />
                <Title>Levo um casaquinho?</Title>
            </Intro>
            <SearchContainer>
                <SearchBar>
                    <img src={lupa} />
                    <input type="text" placeholder="Procure por uma cidade"></input>
                </SearchBar>
            </SearchContainer>
            <InfoTime data={data} />
        </LeftContainer>
    )
}

const LeftContainer = styled.div`
 display:flex;
 flex-direction:column;
 width: 30%;
`

const Intro = styled.div`
padding-top: 2em;
margin-left:2em;

display:flex;
flex-direction: row;
width: 279px;
height: 60px;
img{
  width: 4.75em;
  height: 3.75em;
  padding-right: 10px;
}
`;

const Title = styled.div`
font-family: "Poppins";
font-size: 2em;
color:#000;
font-weight: 500;
line-height: 28px;
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
    padding-right: 8px;
    padding-left: 8px;
  }
  input{
    width: 90%;
    background-color: #EDEDEF;
    border: none;
    outline: none;
    font-family: "Montserrat";
    font-weight: 600;
    font-weight: 22px;
    line-height: 24px;
  }

`;