import React,{Component} from 'react';
import { StyleSheet, Text, View, ActivityIndicator, StatusBar, PermissionsAndroid } from 'react-native';
import Weather from './Weather';

const WEATHER_API_KEY = '820c8c4e1db78d371de3fca298fcc394';

export default class App extends Component {
  state = {
    isLoaded : false,
  }
  //Android API >= 23 Requires an additional step to check for, 
  //and request the ACCESS_FINE_LOCATION permission using the PermissionsAndroid API. 
  //Failure to do so may result in a hard crash.
  //TODO 위 사항 확인
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position)=>{
        console.log(position);
        this._fetchWeather(position.coords.latitude,position.coords.longitude)
        // this.setState({
        //   isLoaded:true,
        //   location:position,
        // })
      },
      (error) => {
        this.setState({ error: error });
      },
    );
  }
  render() {
    const {isLoaded, error, weather} = this.state;
    return (
      <View style={styles.container}>
        <StatusBar hidden={true}/>
        {isLoaded ? <Weather weatherType={weather.type} temperature={Math.round(weather.temp-273.15)}/> : 
          <View style={styles.loading}>
            <Text style={styles.loadingText}>getting the weather data</Text>
            {error? <Text style={styles.errorText}>{error}</Text>:null}
          </View>}
      </View>
    );
  }

  _fetchWeather =(latitude, longitude) =>{
    fetch(`http://api.openweathermap.org/data/2.5/weather?` //apostrophe 와 single quarter의 차이가 뭘까
          +`lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}`)
    .then(response => response.json())
    .then(json=>{
      this.setState({
        isLoaded: true,
        weather:{
          temp: json.main.temp,
          type: json.weather["0"].main,
        }
      })
      console.log(json)
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  errorText:{
    color:'#f00',
    backgroundColor:'transparent',
    marginBottom: 40,
  },
  loading:{
    flex:1,
    backgroundColor: '#fdf6aa',
    justifyContent:'flex-end',
    paddingLeft:25,

  },
  loadingText:{
    fontSize: 38,
    marginBottom: 40,
  }
});