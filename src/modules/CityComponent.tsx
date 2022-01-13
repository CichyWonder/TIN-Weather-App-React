import styled, {keyframes} from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudSun } from '@fortawesome/free-solid-svg-icons'

const animation = keyframes`
  from{
    opacity: 0;
  }
  to{
    opacity: 0.6;
  }
`;
const WeatherLogo = styled.p`
    opacity: 0.6;
    animation: ${animation} 5s linear;
`;
const ChoseCity = styled.span`
  padding: 10px;
  font-size: 38px;
  opacity: 0.6;
  animation: ${animation} 5s linear;
`;
const SearchBox = styled.form`
    display: flex;
    flex-direction: row;
    opacity: 0.6;
    animation: ${animation} 5s linear;
    margin: 10px auto;
    & input{
      font-family: 'Staatliches', cursive;
      font-size: 20px;
      padding: 20px;
      border: none;
      outline: none;
      border-radius: 10px;
      background: none;
      box-shadow: 0 1em 4em #442747;
      width: 300px;
    }
    & input::placeholder{
      color: black;
      opacity: 0.6;
      font-family: 'Staatliches', cursive;
    }
    & button{
      font-family: 'Staatliches', cursive;
      border-radius: 10px;
      color: white;
      border: none;
      outline: none;
      width: 150px;
      font-size: 20px;
      box-shadow: 0 1em 4em #442747;
      background-color: black;
    }
    & button:hover{
      cursor: pointer;
      background-color: white;
      color: black;
      transition: 0.4s ease-out;
    }
`;


//Funkcja
const CityComponent = ()=>{
    return (
        <>
        <WeatherLogo> <FontAwesomeIcon icon={faCloudSun} size="10x"/></WeatherLogo>
        <ChoseCity> Wpisz miasto aby zobaczyć pogodę</ChoseCity>
        <SearchBox>
            <input placeholder="Miasto"/>
            <button>Szukaj</button>
        </SearchBox>
        </>
    );
};
// exportowanie klasy z App
export default CityComponent;