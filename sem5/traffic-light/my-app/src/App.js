import React, { Component } from 'react';
import './App.css';
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";
import { GoogleComponent } from 'react-google-location' 

//gooogle location
const API_KEY = "AIzaSyAZUr8Clbfo3Evrx9XJPKNuegwiKkMTpl4" // how to get key - step are below


//obtenido de https://home.openweathermap.org/api_keys
const API_KEY = "cac44e456724e32d0f7bc67a13cb0715";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      place: null,
    };
  }

  

  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }
  getWeather = async (e) => {
    //sin e react refresca la pagina
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch (`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    console.log(data);
    this.setState({
      temperature: data.main.temp,
      city: data.name,
      country: data.sys.country,
      humidity: data.main.humidity,
      description: data.weather[0].description,
      error: ""
    });
  }
  render() {
    return (
      <div>
         <Titles />
         <Weather
            temperature={this.state.temperature} 
            city={this.state.city} 
            country={this.state.country} 
            humidity={this.state.humidity} 
            description={this.state.description} 
            error={this.state.error} 
            />
          <Form getWeather={this.getWeather}/>
          <GoogleComponent
         
          apiKey={API_KEY}
          language={'en'}
          country={'country:in|country:us'}
          coordinates={true}
          locationBoxStyle={'custom-style'}
          locationListStyle={'custom-style-list'}
          onChange={(e) => { this.setState({ place: e }) }} />

      </div>
    );
  }
}

export default App;
