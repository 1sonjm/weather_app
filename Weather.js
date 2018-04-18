import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {LinearGradient} from 'expo';
import {Ionicons} from '@expo/vector-icons';
import PropTypes from 'prop-types';

// export default class Weather extends Component{
//     render(){
//         return <LinearGradient 
//         colors={['#132213','#212faa','#005bea']} 
//         style={styles.container}>

//             <View style={styles.upper}>
//                 <Ionicons color='#fff' size={144} name='ios-rainy'/>
//                 <Text style={styles.temp}>35˚</Text>
//             </View>
//             <View style={styles.lower}>
//                 <Text style={styles.mainMsg}>main msg</Text>
//                 <Text style={styles.subMsg}>sub msg</Text>
//             </View>

//         </LinearGradient>
//     }
// }
const weatherCases = {
    Rain: {
        colors:['#00c6fb','#05bea'],
        mainMsg: '비',
        subMsg: '비옴',
        icon: 'ios-rainy'
    },
    Clear: {
        colors:['#fef253','#ff7300'],
        mainMsg: '맑음',
        subMsg: '맑은날',
        icon: 'ios-sunny'
    },
    Thunderstorm: {
        colors:['#00ecbc','#007adf'],
        mainMsg: '천둥번개',
        subMsg: '낙뢰주의',
        icon: 'ios-thunderstorm'
    },
    Clouds: {
        colors:['#d7d2cc','#304352'],
        mainMsg: '구름',
        subMsg: '흐린날',
        icon: 'ios-cloudy'
    },
}

function Weather({temperature, weatherType}){
    console.log(temperature)
    console.log(weatherType)
    return (
        <LinearGradient 
        colors={weatherCases[weatherType].colors}
        style={styles.container}>

            <View style={styles.upper}>
                <Ionicons color='#fff' size={144} name={weatherCases[weatherType].icon}/>
                <Text style={styles.temp}>{temperature}˚</Text>
            </View>
            <View style={styles.lower}>
                <Text style={styles.mainMsg}>{weatherCases[weatherType].mainMsg}</Text>
                <Text style={styles.subMsg}>{weatherCases[weatherType].subMsg}</Text>
            </View>

        </LinearGradient>
    )
}
export default Weather;

Weather.proptypes = {
    temperature: PropTypes.number.isRequired,
    weatherType: PropTypes.string.isRequired,
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    upper:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
    temp:{
        fontSize:38,
        backgroundColor: 'transparent',
        color:'#fff',
        marginBottom: 24,
    },

    
    lower:{
        flex:1,
        alignItems:'flex-start',
        justifyContent:'flex-end',
        paddingLeft:25,
    },
    mainMsg:{
        fontSize:35,
        backgroundColor: 'transparent',
        color:'#fff',
        marginBottom: 10,
        fontWeight: '300'
    },
    subMsg:{
        fontSize:24,
        backgroundColor: 'transparent',
        color:'#fff',
        marginBottom: 24,
    },
});