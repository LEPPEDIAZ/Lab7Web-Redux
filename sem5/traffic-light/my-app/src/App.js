import React, { Component } from 'react';
import './App.css';
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";
//obtenido de https://home.openweathermap.org/api_keys
const API_KEY = "cac44e456724e32d0f7bc67a13cb0715";

class App extends Component {
  getWeather = async (e) => {
    //sin e react refresca la pagina
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch (`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    console.log(data);
  }
  render() {
    return (
      <div>
         <Titles />
         <Form getWeather={this.getWeather}/>
         <Weather />
      </div>
    );
  }
}

export default App;

