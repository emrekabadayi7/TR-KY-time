/* eslint-disable react-hooks/exhaustive-deps */
import './App.css';
import * as React from 'react';
import Time from "./components/Time"
import axios from "axios"


export default function App() {
  
  const locale = 'en';
  const [today, setDate] = React.useState(new Date());
  const [istanbulDate, setIstanbulDate] = React.useState("")

  React.useEffect(() => {
      const timer = setInterval(() => {
       setIstanbulDate(prevDate => today.toLocaleTimeString(locale, { hour: 'numeric', hour12: false, minute: 'numeric', second: 'numeric', timeZone:"Europe/Istanbul"}))

      setDate(new Date());
    }, 1000);
    return () => {
      clearInterval(timer);
    }
  }, []);

  
  const [caymantime, setCaymanTime] = React.useState()
  React.useEffect(() => {
   setInterval(() => {
      
      setCaymanTime(prevtime => {
        return ( setIstanbulDate(prevDate => today.toLocaleTimeString(locale, { hour: 'numeric', hour12: false, minute: 'numeric', second: 'numeric', timeZone:"Europe/Istanbul"})))
      })  

    }, 1000);
  }, [])
  
  const day = today.toLocaleDateString(locale, { weekday: 'long' });
  const date = `${day}, ${today.getDate()} ${today.toLocaleDateString(locale, { month: 'long' })}\n\n`;

  
  

  




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
  const [istanbulW, setIstanbulW] = React.useState(null);
  const [IstanbulConditionIcon, setIstanbulConditionIcon] = React.useState(null)
  const [caymanConditionIcon, setCaymanConditionIcon] = React.useState(null)
  
  
  React.useEffect(() => { //Cayman weather data Temperature
  axios.request(caymanWeatherData).then(function (response) {
      console.log(response.data.current.temp_c);
      setCaymanW(() => Math.ceil(response.data.current.temp_c))
    }).catch(function (error) {
      console.error(error);
    });

  }, [])
  React.useEffect(() => { //İstanbul weather data Temperature 

    axios.request(istanbulWeatherData).then(function (response) {
      setIstanbulW(() => Math.ceil(response.data.current.temp_c))
    }).catch(function (error) {
      console.error(error);
    });

  }, [])

  React.useEffect(() => { //İstanbul weather data ICON

    axios.request(istanbulWeatherData).then(function (response) {
      setIstanbulConditionIcon(prevIstanbulIcon => (response.data.current.condition.icon))
    }).catch(function (error) {
      console.error(error);
    });

  }, [])
  React.useEffect(() => { //Cayman weather data ICON
    axios.request(caymanWeatherData).then(function (response) {
      setCaymanConditionIcon(() => (response.data.current.condition.icon))
    }).catch(function (error) {
      console.error(error);
    });

  }, [])
  
  // eslint-disable-next-line no-empty-pattern
  const [] = React.useState()
  const [country] = React.useState("")
  const istanbulimg = "https://www.freepnglogos.com/uploads/turk-bayragi-png/turk-bayragi-turkey-vpn-best-vpn-service-for-users-turkey-1.png"
  
  const [count, setCount] = React.useState(0)
  React.useEffect(() => {
      setInterval(() => {
        setCount(prevCount => {return ( <p>{prevCount + 1}</p>)})
      }, 1000);

  }, [])

      return (
      <div>

          <Time
          count={count}
          istanbulimg={istanbulimg}
          turkeytime={istanbulDate}
          caymantime={caymantime}
          date={date}
          temperatureCayman={caymanw}
          />

      </div>
      )
    }
