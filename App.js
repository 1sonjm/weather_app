import React,{Component} from 'react';
import { StyleSheet, Text, View, ActivityIndicator, StatusBar, PermissionsAndroid } from 'react-native';
import Weather from './Weather';

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
        this.setState({
          isLoaded:true,
          location:position,
        })
      },
      (error) => {
        this.setState({ error: error });
      },
    );
  }
  render() {
    const {isLoaded, error} = this.state;
    return (
      <View style={styles.container}>
        <StatusBar hidden={true}/>
        {isLoaded ? <Weather/> : 
          <View style={styles.loading}>
            <Text style={styles.loadingText}>getting the weather data</Text>
            {error? <Text style={styles.errorText}>{error}</Text>:null}
          </View>}
      </View>
    );
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