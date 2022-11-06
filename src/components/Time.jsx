import React from "react"
import { ReactDOM } from "react-dom";
import axios from "axios"
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Time(props){

   // 👇️ from CURRENT DATE

  const [zamanisik, setZamaniSik] = React.useState("");



  const locale = 'en';
  const [today, setDate] = React.useState(new Date());
  const istanbulDate = today.toLocaleTimeString(locale, { hour: 'numeric', hour12: false, minute: 'numeric', second: 'numeric', timeZone:"Europe/Istanbul" });
  const caymanDate = today.toLocaleTimeString(locale, { hour: 'numeric', hour12: false, minute: 'numeric', second: 'numeric', timeZone:"America/Cayman" });

  React.useEffect(() => {
      const timer = setInterval(() => {

      const istanbulWish = `Good ${(istanbulDate.hour > 6, istanbulDate.hour < 12 && 'Morning') ||
   (istanbulDate.hour > 12, istanbulDate.hour < 17 && 'Afternoon') ||
  (istanbulDate.hour > 17, istanbulDate.hour < 24 && 'Evening') ||
   'Night'}`;

      setDate(new Date());
        setZamaniSik(prevzamanisik => today.toLocaleTimeString(locale, { hour: 'numeric', hour12: false, minute: 'numeric', second: 'numeric', timeZone:"Europe/Istanbul" }))

    }, 1000);
    return () => {
      clearInterval(timer); // Return a funtion to clear the timer so that it will stop being called on unmount
    }
  }, []);


  function zamanisiktirettim() {
    JSON.stringify(today.toLocaleTimeString(locale, { hour: 'numeric', hour12: false, minute: 'numeric', second: 'numeric', timeZone:"Europe/Istanbul" }))
   return JSON.stringify(today.toLocaleTimeString(locale, { hour: 'numeric', hour12: false, minute: 'numeric', second: 'numeric', timeZone:"Europe/Istanbul" }))

  }

    const day = today.toLocaleDateString(locale, { weekday: 'long' });
    const date = `${day}, ${today.getDate()} ${today.toLocaleDateString(locale, { month: 'long' })}\n\n`;
  
    const hour = today.getHours();
    
    
    const wish = `Good ${(hour < 12 && 'Morning') || (hour < 17 && 'Afternoon') || (hour > 17, hour < 24 && 'Evening') || 'Night'}`;

    const istanbulWish = `Good ${(istanbulDate.hour > 6, istanbulDate.hour < 12 && 'Morning') ||
     (istanbulDate.hour > 12, istanbulDate.hour < 17 && 'Afternoon') ||
    (istanbulDate.hour > 17, istanbulDate.hour < 24 && 'Evening') ||
     'Night'}`;
  


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

    const [caymanw, setCaymanW] = React.useState(null);
    const [istanbulw, setIstanbulW] = React.useState(null);
    const [istanbulConditionIcon, setIstanbulConditionIcon] = React.useState(null)
    const [caymanConditionIcon, setCaymanConditionIcon] = React.useState(null)
    const [fakeStore, setFakeStore] = React.useState("")
    
    React.useEffect(() => { //Cayman weather data Temperature

      axios.request(caymanWeatherData).then(function (response) {
        console.log(response.data.current.temp_c);
        setCaymanW(prevW => Math.ceil(response.data.current.temp_c))
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
    
    const [firstValueState, setFirstValueState] = React.useState("")
    const [secondValueState, setSecondValueState] = React.useState("")

    function handleFirstChange(event){
        setFirstValueState(event.target.value)
    }

    const handleSecondChange = (event) => {
      setSecondValueState(event.target.value)
      
    }


    return (
      <div>
      <div className="timeCard">

<div className="imghour">
  <img className="turkeypng"alt="" 
src="https://www.freepnglogos.com/uploads/turk-bayragi-png/turk-bayragi-turkey-vpn-best-vpn-service-for-users-turkey-1.png"></img>
<p className="font-Inter">{date}</p>
<p className="font-Inter">{istanbulWish}</p>
<p className="istanbulDate">{istanbulDate}</p>
<p className="temp font-Inter">{istanbulw}° </p>
<img alt="" className="w-20" src={istanbulConditionIcon}></img>

</div>
  
<div className="imghour">
<img className="caymanpng"alt="" 
src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Coat_of_arms_of_the_Cayman_Islands.svg/314px-Coat_of_arms_of_the_Cayman_Islands.svg.png"></img>
<p className="font-Inter">{date}</p>
<p className="font-Inter">{wish}</p>
<p className="caymanDate">{caymanDate}</p>
<p className="temp font-Inter">{caymanw}°</p>
<img alt="" className="w-20" src={caymanConditionIcon}></img>
<div className="gorunmezcaymantext">CAYMAN ISLANDS</div>

</div></div></div>
    )

  /*      <Box sx={{minWidth: 120 }} size="large">
  <FormControl fullWidth>
  <InputLabel id="country">Country</InputLabel>
  <Select
    labelId="country"
    id="country-select"
    value={firstValueState}
    countryImg="countryimg"
    label="Country"
    onChange={handleFirstChange}
  >
    <MenuItem value={() => { return ( <h1>{istanbulDate}</h1>)}}> Turkey </MenuItem>
    <MenuItem value={() => {
      setInterval(() => {
       
        return (
          <div className="imghour">
          <img className="caymanpng"alt="" 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Coat_of_arms_of_the_Cayman_Islands.svg/314px-Coat_of_arms_of_the_Cayman_Islands.svg.png"></img>
          <p>{date}</p>
          <p>{wish}</p>
          <p className="caymanDate">{props.caymantime}</p>
          <p className="temp">{caymanw}°</p>
          <img alt="" className="w-20" src={caymanConditionIcon}></img>
              </div>
        )
        
      }, 1000);
       
    }}>Cayman Islands</MenuItem>
  </Select>
</FormControl>
</Box>


<Box sx={{ minWidth: 120 }}>
<FormControl fullWidth>
  <InputLabel id="caymancountry2">Country</InputLabel>
  <Select
    labelId="caymancountry2"
    id="caymancountry2-select"
    value={secondValueState}
    label="caymanCountry2"
    onChange={handleSecondChange}
  >
    <MenuItem value={() => { 
      return (
      <div className="imghour">
          <img src={props.istanbulimg} alt=""/>
      <p>{date}</p>
      <p>{istanbulWish}</p>
      <p className="istanbulDate">{istanbulDate}</p>
      <p className="temp">{istanbulw}° </p>
      <img alt="" className="w-20" src={istanbulConditionIcon}></img>
      </div>
    )
    }}>Turkey</MenuItem>
    <MenuItem value={() => {
       return (
        <div className="imghour">
        <img className="caymanpng"alt="" 
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Coat_of_arms_of_the_Cayman_Islands.svg/314px-Coat_of_arms_of_the_Cayman_Islands.svg.png"></img>
        <p>{date}</p>
        <p>{wish}</p>
        <p className="caymanDate">{props.caymantime}</p>
        <p className="temp">{caymanw}°{props.count}</p>
        <img alt="" className="w-20" src={caymanConditionIcon}></img>
            </div>
      )
    }}>Cayman Islands</MenuItem>
  </Select>
</FormControl>
</Box> */










    
    /* çalışıyordu! return (
      
        <div className="timeCard">

            <div className="imghour">
              <img className="turkeypng"alt="" 
        src="https://www.freepnglogos.com/uploads/turk-bayragi-png/turk-bayragi-turkey-vpn-best-vpn-service-for-users-turkey-1.png"></img>
        <p>{date}</p>
        <p>{istanbulWish}</p>
        <p className="istanbulDate">{istanbulDate}</p>
        <p className="temp">{istanbulw}° </p>
        <img alt="" className="w-20" src={istanbulConditionIcon}></img>
        <div className="gorunmezturkeytext">TURKEY</div>

            </div>
              
            <div className="imghour">
        <img className="caymanpng"alt="" 
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Coat_of_arms_of_the_Cayman_Islands.svg/314px-Coat_of_arms_of_the_Cayman_Islands.svg.png"></img>
        <p>{date}</p>
        <p>{wish}</p>
        <p className="caymanDate">{time}</p>
        <p className="temp">{caymanw}°</p>
        <img alt="" className="w-20" src={caymanConditionIcon}></img>
        <div className="gorunmezcaymantext">CAYMAN ISLANDS</div>

            </div>
        </div>
//bir dropdown menü aç, kullanıcıların seçtiği ülkeleri, aşağıya render et ve o ülkenin zamanını da render et, ve ülke bayrağını.
        

    ) */
}