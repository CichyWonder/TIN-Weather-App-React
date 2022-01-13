import React from 'react';
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt } from '@fortawesome/free-solid-svg-icons'
import './style.css';

//Setup FontAwesome

//Setup Komponentów styled
const AnimatedLogo = styled.p`
  font-size: 50px;
  opacity: 50%;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
  box-shadow: 0 2em 8em #442747;
  padding: 20px 10px;
  border-radius: 20px;
  width: 580px;
  height: 100%;
`;
const CityComponent = styled.div`
  display: flex;
  flex-direction: column;
`;
const WeatherComponent = styled.div`
  display: flex;
  flex-direction: column;
`;
const Label = styled.span`
  font-size: 18px;
  font-weight: bold;
`;

function App() {
  return (
    <Container>
     <Label>Magenta Weather App</Label> <AnimatedLogo> <FontAwesomeIcon icon={faBolt} /> </AnimatedLogo>
    <CityComponent></CityComponent>
    <WeatherComponent></WeatherComponent>
    </Container>
  );
}

export default App;
