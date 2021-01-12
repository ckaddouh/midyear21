import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
import {createAppContainer} from 'react-navigation'; 
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, TextInput } from 'react-native';
// import MarqueeText from 'react-native-marquee';
import { StackNavigator } from 'react-navigation';
// import Welcome from "./assets/screens/Welcome.js";
// import Play from "./assets/screens/Game.js";
//import wordsFile from "./words.txt";


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



// setWords([...words, nextWord]);
function GameScreen() {
  //var fs = require("fs");
  // var text = fs.readFileSync("./words.txt").toString('utf-8');
  
  const [value, setValue] = useState('');
  const [score, setScore] = useState(0);
  const [words, setWords] = useState([]);
  
  // setWords(wordFile.toSTring('utf-8').split("\n"));
  // var content = require('./words.txt');
  // var tags = content.split("\n");
  // setWords(tags);
  // console.log(words[0]);


  const inputHandler = (enteredText) => {
    var points = 0;
    //if (score < 20) {
      setValue(enteredText);
      if (enteredText == 'hello') {
        setValue('');
        // setScore({score}++);
        // console.log(score);
        points++;
        console.log(points);
      //}
    }
    // else {
    //   <Button
    //     title="FINISH"
    //     onPress={() => navigation.navigate('Game')}
    //     color= "#fff"
    //   />
    // }

  };
  // used to be => onChangeText(text)
  return (
    <SafeAreaView style={styles.container}>
      <Text>Game Screen</Text>
      <TextInput
        style={{ height: 40, width: 300, borderColor: 'gray', borderWidth: 1 }}
        value={value}
        autoFocus = {true}
        onChangeText = {inputHandler}
        //onChangeText={text => inputHandler(text)}   
        // onChangeText={text => checkEquals(text)}
        // onKeyPress = {(keyPress) => handleKeyDown(keyPress)}
        placholder = "Type the words as they appear!"
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

function EndScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style = {styles.title}>End Screen</Text>
      //<Text style = {{fontSize: 20, textAlign: 'center', fontFamily: 'Arial'}}>Text the words you see as fast as you can! Hit play to begin.</Text>
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
        <Stack.Screen name="End" component={EndScreen} />
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