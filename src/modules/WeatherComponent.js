import styled from "styled-components";
import {
    faCloudSun,
    faSun,
    faTint,
    faCompressArrowsAlt,
    faMoon,
    faCloudMoon,
    faCloud, faCloudSunRain, faCloudMoonRain, faSmog
} from "@fortawesome/free-solid-svg-icons";
import {faWind} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const WeatherInfoIcons={
    wind: <FontAwesomeIcon icon={faWind} size="4x"/>,
    humidity: <FontAwesomeIcon icon={faTint} size="4x"/>,
    sunset: <FontAwesomeIcon icon={faSun} size="4x"/>,
    sunrise: <FontAwesomeIcon icon={faSun} size="4x"/>,
    pressure: <FontAwesomeIcon icon={faCompressArrowsAlt} size="4x"/>
}
const WeatherIcons = {
    "01d": <FontAwesomeIcon icon={faSun} size="4x"/>,
    "01n": <FontAwesomeIcon icon={faMoon} size="4x"/>,
    "02d": <FontAwesomeIcon icon={faCloudSun} size="4x"/>,
    "02n": <FontAwesomeIcon icon={faCloudMoon} size="4x"/>,
    "03d": <FontAwesomeIcon icon={faCloud} size="4x"/>,
    "03n": <FontAwesomeIcon icon={faCloud} size="4x"/>,
    "04d": <FontAwesomeIcon icon={faSun} size="4x"/>,
    "04n": <FontAwesomeIcon icon={faCloudMoon} size="4x"/>,
    "09d": <FontAwesomeIcon icon={faCloudSunRain} size="4x"/>,
    "09n": <FontAwesomeIcon icon={faCloudMoonRain} size="4x"/>,
    "10d": <FontAwesomeIcon icon={faCloudSunRain} size="4x"/>,
    "10n": <FontAwesomeIcon icon={faCloudMoonRain} size="4x"/>,
    "11d": <FontAwesomeIcon icon={faSmog} size="4x"/>,
    "11n": <FontAwesomeIcon icon={faSmog} size="4x"/>,
};
const WeatherCondition = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    margin: 20px auto;
`;
const Condition = styled.span`
    margin: 20px auto;
    opacity: 0.6;
    font-size: 25px;
    & span {
      font-size: 50px;
    }
`;
const Logo = styled.p`
    opacity: 0.6;
    margin: 5px auto;
`;
const Location = styled.span`
    font-size: 50px;
    opacity: 0.6;
`;
const InfoLabel = styled.span`
    font-size: 25px;
    opacity: 0.6;
    margin: 20px auto;
    text-align: left;
    width: 80%;
`;
const WeatherInfoContainer = styled.div`
    display: flex;
    width: 90%;
    opacity: 0.6;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
`;
const InfoContainer = styled.div`
    display: flex;
    margin-left: 60px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;
const InfoIcon = styled.p`
`;
const Info = styled.span`
    display: flex;
    flex-direction: column;
    font-size: 25px;
    margin: 30px;
    & span {
    font-size: 20px;
    text-transform: capitalize;
    }
`;
const WeatherInfoComponent = (props) => {
    const {name, value} = props;
    return (
        <InfoContainer>
            <InfoIcon>{WeatherInfoIcons[name]}</InfoIcon>
            <Info>
                {value}
                <span>{name}</span>
            </Info>
        </InfoContainer>
    );
};
//Funkcja
const WeatherComponent = (props)=>{
    const {weather} = props;
    const isDay = weather?.weather[0].icon?.includes('d')
    const getTime = (timeStamp) => {
        return `${new Date(timeStamp * 1000).getHours()} : ${new Date(timeStamp * 1000).getMinutes()}`
    }

    return(
        <>
        <WeatherCondition>
            <Condition><span>{`${Math.floor(weather?.main?.temp - 273)}°C`}</span>
                {`  |  ${weather?.weather[0].description}`}</Condition>
            <Logo>{WeatherIcons[weather?.weather[0].icon]}</Logo>
        </WeatherCondition>
        <Location>{`${weather?.name}, ${weather?.sys?.country}`}</Location>
        <InfoLabel>Weather information</InfoLabel>
        <WeatherInfoContainer>
            <WeatherInfoComponent name={isDay ? "sunset" : "sunrise"}
                                  value={`${getTime(weather?.sys[isDay ? "sunset" : "sunrise"])}`}/>
            <WeatherInfoComponent name={"humidity"} value={weather?.main?.humidity}/>
            <WeatherInfoComponent name={"wind"} value={weather?.wind?.speed}/>
            <WeatherInfoComponent name={"pressure"} value={weather?.main?.pressure}/>
        </WeatherInfoContainer>
    </>
    );
};
    // exportowanie klasy z App
export default WeatherComponent;