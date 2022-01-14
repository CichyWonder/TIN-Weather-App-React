import React, {useState} from 'react';
import styled, {keyframes} from 'styled-components';
import Axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt } from '@fortawesome/free-solid-svg-icons'
import CityComponent from "./modules/CityComponent";
import WeatherComponent from "./modules/WeatherComponent";

//Setup FontAwesome

//Setup Komponentów styled

//Animacja loga


const animation = keyframes`
  from{
    font-size: 12px;
    opacity: 0;
  }
  to{
    font-size: 50px;
  }
`;
const AnimatedLogo = styled.p`
  font-size: 50px;
  animation: ${animation} 4s ease;
`;
const Container = styled.div`
  font-family: 'Staatliches', cursive;
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
  box-shadow: 0 2em 8em #442747;
  padding: 30px 10px;
  border-radius: 2px;
  width: 580px;
`;

const Label = styled.span`
  font-weight: bold;
  opacity: 0.6;
`;

function App() {
  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();

  const fetchWeather = async (e) => {
    e.preventDefault();
    const response = await Axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fe4feefa8543e06d4f3c66d92c61b69c`,
    );
    updateWeather(response.data);
  };

    return (
    <Container>
      <Label><AnimatedLogo> <FontAwesomeIcon icon={faBolt} />&nbsp;Magenta Weather App</AnimatedLogo></Label>

      {city && weather ? (
          <WeatherComponent weather={weather} city={city} />
      ) : (
          <CityComponent updateCity={updateCity} fetchWeather={fetchWeather} />
      )}
    </Container>
  );
}

export default App;
