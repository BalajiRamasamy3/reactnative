import MyButton from './component/MyButton';
import React, {Component} from 'react';  
import {Button, Platform, StyleSheet, Text, View} from 'react-native';  
  

export default class App extends React.Component {  
  constructor(){
  
    super();
    
      this.state= {
        count :1,
      }
    }
    increment(){
      this.setState(
        {
        count : this.state.count +1,
        }
      )
    }
    
  

  render() {  
    return (  
      <View>  
        <Text style={styles.welcome}>Welcometo MyApp</Text> 
        <Button title='Increment'
        onPress={()=>{ this.increment()}}></Button>
        <text fontSize={30}> this.state.count</text>
      
      </View>  
      
    );  
  }  
}  
const styles = StyleSheet.create({  
  welcome: {  
    backgroundColor : '#fff',
    fontSize: 20,  
    textAlign: 'center',  
    margin: 10,  
  }  
});  
    

    
  
