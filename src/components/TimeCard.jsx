import React from "react"
import axios from "axios"
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


export default function TimeCard(props){

    const [caymanw, setCaymanW] = React.useState(null);
    const [istanbulw, setIstanbulW] = React.useState(null);
    const [istanbulConditionIcon, setIstanbulConditionIcon] = React.useState(null)
    const [caymanConditionIcon, setCaymanConditionIcon] = React.useState(null)
    const [fakeStore, setFakeStore] = React.useState("")

    const caymanWeatherData = {
        method: 'GET',
        url: 'https://weatherapi-com.p.rapidapi.com/current.json',
        params: {q: 'Cayman Islands'},
        headers: {
          'X-RapidAPI-Key': '50733877f3msh5ba20108002f015p173ba8jsnca50a72c8c15',
          'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
      };
  
      const istanbulWeatherData = {
        method: 'GET',
        url: 'https://weatherapi-com.p.rapidapi.com/current.json',
        params: {q: 'Istanbul'},
        headers: {
          'X-RapidAPI-Key': '50733877f3msh5ba20108002f015p173ba8jsnca50a72c8c15',
          'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
      };

    React.useEffect(() => { //Cayman weather data Temperature
  
        axios.request(caymanWeatherData).then(function (response) {
          console.log(response.data.current.temp_c);
          setCaymanW(prevPost => Math.ceil(response.data.current.temp_c))
        }).catch(function (error) {
          console.error(error);
        });
  
      }, [])
      React.useEffect(() => { //İstanbul weather data Temperature 
  
        axios.request(istanbulWeatherData).then(function (response) {
          console.log(response.data)
          console.log(response.data.current.temp_c);
          setIstanbulW(prevPost => Math.ceil(response.data.current.temp_c))
        }).catch(function (error) {
          console.error(error);
        });
  
      }, [])
  
      React.useEffect(() => { //İstanbul weather data ICON
  
        axios.request(istanbulWeatherData).then(function (response) {
          console.log(response.data)
          console.log(response.data.current.condition.icon);
          setIstanbulConditionIcon(prevIcon => (response.data.current.condition.icon))
        }).catch(function (error) {
          console.error(error);
        });
  
      }, [])
      React.useEffect(() => { //Cayman weather data ICON
        axios.request(caymanWeatherData).then(function (response) {
          console.log(response.data)
          console.log(response.data.current.condition.icon);
          setCaymanConditionIcon(prevIcon => (response.data.current.condition.icon))
        }).catch(function (error) {
          console.error(error);
        });
  
      }, [])
  
      const dataJSON = () =>{
        JSON.stringify(istanbulw)
      }

    return(

        <div className="timeCard">

          <div className="imghour">
            <div className="turkeypng">
              <p>TURKEY</p>
            </div>
      <p>{props.date}</p>
      <p>{props.istanbulWish}</p>
      <p className="istanbulDate">{props.istanbulDate}</p>
      <p className="temp">{props.istanbulw}° </p>
      <img alt="" src={props.istanbulConditionIcon}></img>

          </div>
          <Box sx={{minWidth: 120 }} size="large">
      <FormControl fullWidth>
        <InputLabel id="country">Country</InputLabel>
        <Select
          labelId="country"
          id="country-select"
          value={props.country}
          countryImg="countryimg"
          label="Country"
          onChange={props.handleCountryChange}
        >
          <MenuItem value={10}>Turkey</MenuItem>
          <MenuItem value={20}>Cayman Islands</MenuItem>
        </Select>
      </FormControl>
    </Box>

    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="caymancountry2">Country</InputLabel>
        <Select
          labelId="caymancountry2"
          id="caymancountry2-select"
          value={props.age}
          label="caymanCountry2"
          onChange={props.handleChange}
        >
          <MenuItem value={10}>Turkey</MenuItem>
          <MenuItem value={20}>Cayman Islands</MenuItem>
        </Select>
      </FormControl>
    </Box>
      <div className="imghour">
      <img className="caymanpng"alt="" 
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Coat_of_arms_of_the_Cayman_Islands.svg/314px-Coat_of_arms_of_the_Cayman_Islands.svg.png"></img>
      <p>{props.date}</p>
      <p>{props.wish}</p>
      <p className="caymanDate">{props.time}</p>
      <p className="temp">{props.caymanw}°</p>
      <img alt="" src={props.caymanConditionIcon}></img>
      {props.age}
      <div className="gorunmezcaymantext">CAYMAN ISLANDS</div>

          </div>
      </div> 

    )
}