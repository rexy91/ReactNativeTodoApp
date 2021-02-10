import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {

  const [toggle, setToggle] = useState(false)

  const ToggleTrueFalseText = () => {
        setToggle(!toggle)
  }

  return (
    <View style={styles.container}>
      <Text>React Native Todo App</Text>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Text>{toggle ? 'ff' : 'False'}</Text>
      <Button
        onPress={ToggleTrueFalseText}
        title='Next Page'
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  },
});
