import React from 'react';
import styled, {keyframes} from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt } from '@fortawesome/free-solid-svg-icons'
import './style.css';
import CityComponent from "./modules/CityComponent";
import WeatherComponent from "./modules/WeatherComponent";

//Setup FontAwesome

//Setup Komponentów styled
const Background = styled.div`
  //height 100% nie działa
  height: 100vh;
  font-family: 'Staatliches', cursive;
`;
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
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
  box-shadow: 0 2em 8em #442747;
  padding: 30px 10px;
  border-radius: 20px;
  width: 580px;
`;

const Label = styled.span`
  font-weight: bold;
  opacity: 0.6;
`;

function App() {
  return (
      <Background>
    <Container>
      <Label><AnimatedLogo> <FontAwesomeIcon icon={faBolt} />&nbsp;Magenta Weather App</AnimatedLogo></Label>
    <CityComponent/>
    </Container>
      </Background>
  );
}

export default App;
