import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  
  return (
    <View style={styles.container}>
      <Text>React Native Todo App</Text>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />

      <TextInput
          value=''
          label='Enter Username'
          style={styles.input}
      />
      <TextInput
          value=''
          label='Enter Username'
          style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',    
  },
    input:{
        fontSize:'14',
        backgroundColor:'grey'
    }
});
