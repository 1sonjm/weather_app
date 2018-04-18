import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {LinearGradient} from 'expo';
import {Ionicons} from '@expo/vector-icons';

export default class Weather extends Component{
    render(){
        return <LinearGradient 
        colors={['#132213','#212faa','#005bea']} 
        style={styles.container}>

            <View style={styles.upper}>
                <Ionicons color='#fff' size={144} name='ios-rainy'/>
                <Text style={styles.temp}>35˚</Text>
            </View>
            <View style={styles.lower}>
                <Text style={styles.mainMsg}>main msg</Text>
                <Text style={styles.subMsg}>sub msg</Text>
            </View>

        </LinearGradient>
    }
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