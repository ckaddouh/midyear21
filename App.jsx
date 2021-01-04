import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
import {createAppContainer} from 'react-navigation'; 
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, TextInput } from 'react-native';
// import MarqueeText from 'react-native-marquee';
import { StackNavigator } from 'react-navigation';
// import Welcome from "./assets/screens/Welcome.js";
// import Play from "./assets/screens/Game.js";

function HomeScreen({ navigation }) {
  
  return (
    <SafeAreaView style={styles.container}>
      
      <Text style = {styles.title}>SPEEDY SNAKE</Text>
      <Button
        title="PLAY"
        onPress={() => navigation.navigate('Game')}
        color= "#fff"
      />
      <Button
        title="INSTRUCTIONS"
        onPress={() => navigation.navigate('Instructions')}
        color= "#fff"
      />
    </SafeAreaView>
  );
}

function checkEquals(text) {
  onChangeText(text);
  //this.setState({ text })
  if (text === 'Hello') {
     // return this.setState({ hello: true })
     console.log("yes");
  }
  //this.setState({ hello: false })
}

function handleKeyDown(e) {
  if (e.keycode === 65) {
    console.log('yay');
  }
  else {
    console.log('oh no');

  }
}

function GameScreen() {
  const [value, onChangeText] = React.useState('');

  // used to be => onChangeText(text)
  return (
    <SafeAreaView style={styles.container}>
      <Text>Game Screen</Text>
      <TextInput
        style={{ height: 40, width: 300, borderColor: 'gray', borderWidth: 1 }}
        autoFocus = {true}
        onChangeText={text => onChangeText(text)}   
        // onChangeText={text => checkEquals(text)}
        onKeyPress = {(keyPress) => handleKeyDown(keyPress)}
        placholder = "Type the words as they appear!"
        value={value}
      />
    </SafeAreaView>
  );
}

function InstructionScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style = {styles.title}>Instructions</Text>
      <Text style = {{fontSize: 20, textAlign: 'center', fontFamily: 'Arial'}}>Text the words you see as fast as you can! Hit play to begin.</Text>
      {/* not able to navigate back to home from a button at the moment */}
      {/* <Button 
        title="BACK"
        color = "#45bf65"
        onPress={() => navigation.navigate('Home')}
      />     */}
    </SafeAreaView>
  );
}

const Stack = createStackNavigator();

//  options={{ headerShown: false }} inside <Stack.Screen>
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Game" component={GameScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Instructions" component={InstructionScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#008081',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    position: 'absolute',
    top: 100,
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff', 
  },
});

export default App;

// will this change show up?
// hello this is dong and i am in the bathroom <3 - dong joo